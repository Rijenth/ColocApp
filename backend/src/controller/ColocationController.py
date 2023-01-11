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
            colocation = ColocationAction().show(id)
        except Exception as e:
            return jsonify({}), 404
        if len(colocation) == 0:
            return jsonify({}), 404
        return jsonify([colocation]), 200

    def createColocation(data):
        try:
            colocation = ColocationModel(data)
            ColocationAction().post(colocation)
        except Exception as e:
            return jsonify({"message" : "Une erreur est survenue sur la création"}), 422
        return jsonify({"message" : "Colocation create !"}), 201

    def updateColocation(id, data):
        try:
            colocation = ColocationModel(data)
            ColocationAction().update(colocation)
        except Exception as e:
            return jsonify({"message" : "Une erreur est survenue"}), 422
        return jsonify({"message" : "Colocation update !"}), 201

    def deleteColocation(id):
        ColocationAction().delete(id)
        return jsonify({"message" : "Colocation delete"}), 204

