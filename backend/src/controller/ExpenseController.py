from flask import Flask, jsonify
from datetime import date
from src.model.ExpenseModel import ExpenseModel
from src.model.UsersModel import UsersModel
from src.action.ColocataireAction import ColocataireAction
from src.action.ExpenseAction import ExpenseAction
from src.action.UsersAction import UsersAction

class ExpenseController:
    def __init__(self, request):
        self.request = request

    def indexExpense():
        try:
            expense = ExpenseAction().index()
        except Exception as e:
            return jsonify({'type':"error", 'message': e})
        return jsonify([expense]), 200

    def showColocExpense(id):
        try:
            expense = ExpenseAction().getAllExpensesColoc(id)
        except Exception as e:
            return jsonify({"type" : "error", "messages" : "SQL Request error"}), 422
        if expense is None or len(expense) == 0:
            return jsonify({}), 200
        return jsonify([expense]), 200

    def showUserExpense(uid):
        getUserData = UsersAction().show("uid", uid)
        user = UsersModel(getUserData)
        colocataire = ColocataireAction().showUser(user.id)

        try:
            expense = ExpenseAction().getAllExpensesFromUser(colocataire['id'], colocataire['colocationId'])
        except Exception as e:
            return jsonify({"type" : "error", "messages" : "SQL Request error"}), 422
        if expense is None or len(expense) == 0:
            return jsonify({}), 200
        return jsonify([expense]), 200

    def newExpense(data):
        try:
            expense = ExpenseModel(data)
            ExpenseAction().post(expense)
        except Exception as e:
             return jsonify({"message" :e}), 422
        return jsonify({"message" : "Expense create !"}), 201


    def updateExpense(id, data):
        expense = ExpenseModel(data)
        try:
            ExpenseAction().update(expense, id)
        except Exception as e:
            return jsonify({"message" :e}), 422
        return jsonify({"message" : "Expense update !"}), 204
    
    def deleteExpense(id):
        ExpenseAction().delete(id)
        return jsonify({"message" : "Expense delete"}), 204