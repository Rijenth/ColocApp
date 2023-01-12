from flask import Flask, jsonify
#from src.App.Actions.UserAction import UserAction
from src.action.AuthenticationAction import AuthenticationAction
from src.model.UsersModel import UsersModel
from flask_jwt_extended import create_access_token

class UsersController:
    def __init__(self, request):
        self.request = request

    def register(data):
        data.setdefault('phone', "")
        data.setdefault('picture', "")
        data.setdefault('income', 0)
        user = UsersModel(data)

        if(AuthenticationAction().register(user) == False):
            return jsonify({"type" : "error", "message" : "Database wasn't able to create this user"}), 422

        identity = {
            "uid" : user.uid,
            "firstName" : user.firstName, 
            "lastName" : user.lastName, 
            "email" : user.email
        }

        if(user.phone):
            identity['phone'] = user.phone

        if(user.picture):
            identity['picture'] = user.picture
            
        return jsonify(
            {
                'type' : 'success',
                'token' : create_access_token(
                    identity = identity
                )
            }
        ), 200            

    def login(data):
        row = AuthenticationAction().login(data)
        if(row == []):
            return jsonify({"type" : "error", "message" : "Wrong Credentials"}), 403
        user =  UsersModel(row)
        return jsonify(
            {
                'type' : 'success',
                'token' : create_access_token(
                    identity = {
                        "uid" : user.uid, 
                        "firstName" : user.firstName, 
                        "lastName" : user.lastName, 
                        "email" : user.email, 
                        "phone" : user.phone,
                        "picture" : user.picture,
                        "income" : user.income
                        })
            }
        ), 200   
