from urllib import response
from flask import Flask, jsonify, request, session, redirect, url_for, send_from_directory
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import sqlite3
import os

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

# Secret key for session management
def secret_key():
    return os.urandom(24)
    

# Database initialization
DATABASE = 'database.db'

def get_db():
    db = sqlite3.connect(DATABASE)
    db.row_factory = sqlite3.Row
    return db

def init_db():
    db = get_db()

    with app.open_resource('database.db', mode='r') as f:
        db.cursor().executescript(f.read())

    db.commit()

@app.route('/register', methods=['POST'])
def register():
    db = get_db()

    name = request.form.get('name')
    email = request.form.get('email')
    password = generate_password_hash(request.form.get('password'))
    

    # Check if the email is already registered
    if db.execute('SELECT id FROM users WHERE email = ?', (email,)).fetchone() is not None:
        return jsonify({'message': 'Email address already registered.'}), 400

    db.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
               (name, email, password))
    db.commit()

    return jsonify({'message': 'Registration successful.'}), 201


@app.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory('/H:/my website/my-website/src/assets/', filename)


@app.route('/login', methods=['POST'])
def login():
    db = get_db()

    email = request.form.get('email')
    password = request.form.get('password')

    user = db.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()

    if user is None or not check_password_hash(user['password'], password):
        return jsonify({'message': 'Invalid email or password.'}), 401

    session['user_id'] = user['id']

    return jsonify({'message': 'Login successful.'}), 200

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({'message': 'Logout successful.'}), 200

# Only allow authenticated users to access the feedback section
@app.route('/feedback')
def feedback():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    # Access the feedback page here
    return "Welcome to the feedback section!"

if __name__ == '__main__':
    init_db()

    app.run(debug=True, port=5001)
