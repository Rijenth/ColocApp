from flask import Flask, jsonify
#from src.App.Actions.UserAction import UserAction
from src.action.AuthenticationAction import AuthenticationAction
from src.model.UsersModel import UsersModel
from flask_jwt_extended import create_access_token

class UsersController:
    def __init__(self, request):
        self.request = request

    def register(data):
        try :
            user = UsersModel(data)
            AuthenticationAction().register(user)
        except Exception as e:
            return jsonify({"message" : "Erreur de création du model et du register"}), 422
        return jsonify({}), 201

    def login(data):
        row = AuthenticationAction().login(data)
        if(row == []):
            return jsonify({"message" : "Wrong Credentials"}), 403
        user =  UsersModel(row).serialize()
        return jsonify(
            {
                'token' : create_access_token(identity={"username" : user['username'], "id" : user['id']}), 
                "user" : user
            }
        ), 200
