from flask import Flask, jsonify
from datetime import date
from src.model.ExpenseModel import ExpenseModel
from src.action.ExpenseAction import ExpenseAction

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
            expense = ExpenseAction().getExpenseColoc(id)
        except Exception as e:
            return jsonify({}), 404
        if len(expense) == 0:
            return jsonify({}), 404
        return jsonify([expense]), 200

    def showUserExpense(id):
        try:
            expense = ExpenseAction().getExpenseUser(id)
        except Exception as e:
            return jsonify({}), 404
        if len(expense) == 0:
            return jsonify({}), 404
        return jsonify([expense]), 200

    def newExpense(data):
       # data['date'] = date.today().strftime("%Y-%m-%d")
        try:
            expense = ExpenseModel(data)
            ExpenseAction().post(expense)
        except Exception as e:
             return jsonify({"message" :e}), 422
        return jsonify({"message" : "Expense create !"}), 201


    def updateExpense(id, data):
        # date de mise à jour ?
        try:
            expense = ExpenseModel(data)
            ExpenseAction().update(id, expense)
        except Exception as e:
            return jsonify({"message" :e}), 422
        return jsonify({"message" : "Expense update !"}), 204
    
    def deleteExpense(id):
        ExpenseAction().delete(id)
        return jsonify({"message" : "Expense delete"}), 204