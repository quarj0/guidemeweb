from flask import Flask, jsonify, request, session, redirect, url_for
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
import os


app = Flask(__name__)

CORS(app, origins=["http://localhost:3000"])

# set the secret key for session management
app.secret_key = os.environ.get("SECRET_KEY", os.urandom(24))

# set the database uri from an environment variable
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL", "sqlite:///registration.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize the database
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(128), nullable=False)
    
    
    def __repr__(self):
        return '<User %r>' % self.email
    

class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    feedback = db.Column(db.String(500), nullable=False)
    
    
    def __repr__(self):
        return '<Feedback %r>' % self.id
    
@app.route("/register", methods=["POST"])

def register():
    name = request.form.get("name")
    email = request.form.get("email")
    password = generate_password_hash(request.form.get("password"), method='bcrypt')
    
    # Check if email is already registered
    if User.query.filter_by(email=email).first() is not None:
        return jsonify({"error": "Email already registered"}), 400
    
    user = User(name=name, email=email, password=password)
    db.session.add(user)
    db.session.commit()
    
    return jsonify({"success": "User registered successfully"}), 201

@app.route("/login", methods=["POST"])

def login():
    email = request.form.get("email")
    password = request.form.get("password")
    
    user = User.query.filter_by(email=email).first()
    
    if user is None or not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid email or password"}), 400
    
    session["user_id"] = user.id
    
    return jsonify({"message": "Login successfully"}), 200

@app.route("/logout", methods=["POST"])
def logout():
    session.pop("user_id", None)
    return jsonify({"message": "Logout successfully"}), 200

# Only allow logged in users to access the feedback route
@app.route("/feedback", methods=["POST"])
def feedback():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    
    if request.method == "POST":
        feedback = request.form.get("feedback")
        
        # validate the feedback
        if len(feedback.strip()) == 0:
            return jsonify({"error": "Feedback cannot be empty"}), 400
        
        feedback_obj = Feedback(user_id=session["user_id"], feedback=feedback)
        db.session.add(feedback_obj)
        db.session.commit()
        
        return jsonify({"message": "Feedback submitted successfully"}), 201
    
    # If the request method is GET
    feedbacks = Feedback.query.filter_by(user_id=session["user_id"]).all()
    feedback_list = [{'id': feedback.id, 'feedback': feedback.feedback} for feedback in feedbacks]
    
    return jsonify(feedback_list), 200


# Add error handling 
@app.errorhandler(400)
def bad_request(e):
    return jsonify({"error": "Bad request"})


