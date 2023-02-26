from flask import Flask, request
import smtplib

app = Flask(__name__)

@app.route('/contact', methods=['POST'])
def send_email():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    from_addr = email
    to_addr = 'guidemelearn.info@gmail.com'
    subject = f'New message from {name}'
    body = f'Name: {name}\nEmail: {email}\nMessage: {message}'

    message = f'Subject: {subject}\n\n{body}'

    # Send email
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login('guidemelearn.info@gmail.com', 'Myf1srtw3bs!te')
        smtp.sendmail(from_addr, to_addr, message)

    return 'Message sent successfully!'

if __name__ == '__main__':
    app.run(debug=True)
