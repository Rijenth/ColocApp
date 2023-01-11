from flask import Flask, jsonify
from datetime import date
from src.model.ExpenseModel import ExpenseModel
from src.action.ExpenseAction import ExpenseAction

class ExpenseController:
    def __init__(self, request):
        self.request = request

    def indexExpense():
        return jsonify(ExpenseAction().index()), 200

    def showAllExpense(id):
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
        data['date'] = date.today().strftime("%Y-%m-%d")
        try:
            expense = ExpenseModel(data)
            ExpenseAction().post(expense)
        except Exception as e:
            return jsonify({}), 422
        return jsonify({}), 201

    def updateExpense(id, data):
        # date de mise à jour ?
        try:
            expense = ExpenseModel(data)
            ExpenseAction().post(expense)
        except Exception as e:
            return jsonify({}), 422
        return jsonify({}), 204
    
    def deleteArticle(id):
        ExpenseAction().delete(id)
        return jsonify({}), 204