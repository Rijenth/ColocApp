from src.action.ColocationAction import ColocationAction
from src.model.ColocationModel import ColocationModel
from flask import Flask, jsonify

class ColocationController:
    def __init__(self, request):
        self.request = request

    def indexColocation():
        return jsonify(ColocationAction().index()), 
        
    def showColocation(id):
        try:
            colocation = ColocationModel().show(id)
        except Exception as e:
            return jsonify({}), 404
        if len(colocation) == 0:
            return jsonify({}), 404
        return jsonify([colocation]), 200

    def createColocation(data):
        try:
            colocation = ColocationModel(data)
            ColocationModel().post(colocation)
        except Exception as e:
            return jsonify({"message" : "Une erreur est survenue sur la création"}), 422
        return jsonify({"message" : "Colocation crée !"}), 201

    def updateColocation(id, data):
