from src.action.ColocataireAction import ColocataireAction
from src.model.ColocataireModel import ColocataireModel
from src.model.ColocationModel import ColocationModel
from src.action.ColocationAction import ColocationAction
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
        colocation = ColocationAction().show("code", data['code'])
        
        if colocation == None :
            return jsonify({"type" : "error", "message" : "Ce code ne correspond à aucune colocation !"}), 422

        colocationModel = ColocationModel(colocation).serializeWithRelationships()

        for colocataireUser in colocationModel['relationships']['Colocataire'] :
            if colocataireUser['userId'] == data['userId']:
                return jsonify({"type" : "error", "message" : "Vous êtes déjà inscrit à cette colocation !"}), 422

        data['colocationId'] = colocation['id']
        Colocataire = ColocataireModel(data)
        try:
            ColocataireAction().post(Colocataire)
        except Exception as e:
            return jsonify({"type" : "error", "message" : "Une erreur s'est produite lors de la création du colocataire"}), 422
        return jsonify({"type" : "success", "message" : "Colocataire created !"}), 201


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

