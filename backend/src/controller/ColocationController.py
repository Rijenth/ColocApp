from src.action.ColocationAction import ColocationAction
from src.model.ColocationModel import ColocationModel
from flask import Flask, jsonify

class ColocationController:
    def indexColocation():
        try:
            coloc = ColocationAction().index()
        except Exception as e:
            return jsonify({'type':"error", 'message': e})
        return coloc, 200,
        
    def showColocation(id):
        try:
            colocation = ColocationAction().show("id", id)
        except Exception as e:
            return jsonify({}), 404
        if len(colocation) == 0:
            return jsonify({}), 404
        colocationModel = ColocationModel(colocation).serializeWithRelationships()
        return jsonify(colocationModel), 200

    def createColocation(data):
        try:
            colocation = ColocationModel(data)
            ColocationAction().post(colocation)
        except Exception as e:
            return jsonify({"message" : "Une erreur est survenue dans create"}), 422
        return jsonify({"message" : "Colocation create !"}), 201

    def updateColocation(id, data):
        try:
            colocation = ColocationModel(data)
            ColocationAction().update(id, colocation)
        except Exception as e:
            return jsonify({"message" : e}), 422
        return jsonify({"message" : "Colocation update !"}), 201

    def deleteColocation(id):
        ColocationAction().delete(id)
        return jsonify({}), 204

