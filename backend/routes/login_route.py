from flask import Flask, request, redirect, url_for, session, Blueprint
from models import User

login_blueprint = Blueprint('login', __name__)

@login_blueprint.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        user = User.query.filter_by(email=email).first()

        if user and user.password == password:
            session["user_id"] = user.user_id
            return redirect(url_for('home'))
        
        return "Invalid email or password", 401

@login_blueprint.route("/end")
def logout():
    session.pop('user_id', None)
    return redirect(url_for('home'))