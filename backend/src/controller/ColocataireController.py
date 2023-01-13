from src.action.ColocataireAction import ColocataireAction
from src.model.ColocataireModel import ColocataireModel
from flask import Flask, jsonify

class ColocataireController:
    def indexColocataire():
        try:
            coloc = ColocataireAction().index()
        except Exception as e:
            return jsonify({'type':"error", 'message': e})
        return jsonify([coloc]), 200,
        
    def showColocataire(id):
        try:
            Colocataire = ColocataireAction().show(id)
        except Exception as e:
            return jsonify({}), 404
        if len(Colocataire) == 0:
            return jsonify({}), 404
        return jsonify([Colocataire]), 200

    def showColocataireUser(id):
        try:
            Colocataire = ColocataireAction().showUser(id)
        except Exception as e:
            return jsonify({}), 404
        if len(Colocataire) == 0:
            return jsonify({}), 404
        return jsonify([Colocataire]), 200

    def showColocataireColoc(id):
        try:
            Colocataire = ColocataireAction().showColoc(id)
        except Exception as e:
            return jsonify({}), 404
        if len(Colocataire) == 0:
            return jsonify({}), 404
        return jsonify([Colocataire]), 200

    def createColocataire(data):
        Colocataireexit = ColocataireAction().showColocUser(data['id_user'],data['id_coloc'])
        if len(Colocataireexit) != 0:
            return jsonify({"message" : "Vous êtes déjà dans cette colocation"}), 422
        if data['id_user'] == data['id_coloc']:
            return jsonify({"message" : "Vous ne pouvez pas vous ajouter vous même"}), 422
        try:
            Colocataire = ColocataireModel(data)
            ColocataireAction().post(Colocataire)
        except Exception as e:
            return jsonify({"message" : "Une erreur est survenue dans create"}), 422
        return jsonify({"message" : "Colocataire create !"}), 201


    def updateColocataire(id, data):
        try:
            Colocataire = ColocataireModel(data)
            ColocataireAction().update(id, Colocataire)
        except Exception as e:
            return jsonify({"message" : e}), 422
        return jsonify({"message" : "Colocataire update !"}), 201

    def deleteColocataire(id):
        ColocataireAction().delete(id)
        return jsonify({"message" : "Colocataire delete"}), 204

