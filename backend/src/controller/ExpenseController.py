from flask import Flask, jsonify
from datetime import date
from src.model.ExpenseModel import ExpenseModel
class ExpenseController:
    def __init__(self, request):
        self.request = request

    def indexExpense():
        return jsonify(ArticleAction().index()), 200

    def showExpense(id):
        try:
            expense = ExpenseModel().show(id)
        except Exception as e:
            return jsonify({}), 404
        if len(expense) == 0:
            return jsonify({}), 404
        return jsonify([expense]), 200

    def newExpense(data):
        data['date'] = date.today().strftime("%Y-%m-%d")
        try:
            expense = ExpenseModel(data)
            ExpenseModel().post(expense)
        except Exception as e:
            return jsonify({}), 422
        return jsonify({}), 201

    def updateExpense(id, data):
        # date de mise à jour ?
        try:
            expense = ExpenseModel(data)
            ExpenseModel().post(expense)
        except Exception as e:
            return jsonify({}), 422
        return jsonify({}), 204
    
    def deleteArticle(id):
        ExpenseModel().delete(id)
        return jsonify({}), 204