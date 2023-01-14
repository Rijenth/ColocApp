from flask import Flask, jsonify
#from src.App.Actions.UserAction import UserAction
from src.action.AuthenticationAction import AuthenticationAction
from src.model.UsersModel import UsersModel
from flask_jwt_extended import create_access_token
from src.action.UsersAction import UsersAction

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
        user.setColocationId()
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
                        "income" : user.income,
                        "colocation" : user.colocation
                        })
            }
        ), 200   

    def indexUser():
        return jsonify(UsersAction().index()), 200

    def showUser(uid):
        try:
            user = UsersAction().show("uid", uid)
        except Exception as e:
            return jsonify({'type' : 'error', 'message' : 'Database error'}), 404
        if user == None or len(user) == 0:
            return jsonify({'type' : 'error', 'message' : 'User not found'}), 404
        user = UsersModel(user)
        user.setColocationId()
        return jsonify(user.serialize()), 200

    def updateUser(uid, data):
        try:
            user = UsersModel(data)
            UsersAction().update(uid, user)
        except Exception as e:
            return jsonify({'type' : 'error', "message": e}), 422
        user = UsersAction().show("uid", uid)
        return jsonify(user.serialize()), 201

    def deleteUser(uid):
        UsersAction().delete(uid)
        return jsonify({'type' : 'success'}), 204