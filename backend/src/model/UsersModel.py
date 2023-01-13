from src.model.BasicModel import BasicModel
from flask import Flask
from datetime import date
import uuid

class UsersModel(BasicModel):
    attributes = {
        'id': int,
        'uid': str,
        'firstName': str,
        'lastName': str,
        'email': str,
        'password': str,
        'gender': str,
        'phone': str,
        'birthdate': str,
        'picture': str,
        'income': int
    }

    serializable = {
        'id': int,
        'uid': str,
        'firstName': str,
        'lastName': str,
        'email': str,
        'password': str,
        'gender': str,
        'phone': str,
        'birthdate': str,
        'picture': str,
        'income': int,
        'colocation': int or None
    }

    relationships = ['Colocataire']

    def __init__(self, data):
        super().__init__(data)

    def setColocationId(self):
        self.colocation = self.Colocataire()['colocationId'] if self.Colocataire() else None

    def Colocataire(self):
        return self.belongsTo('Colocataire', 'userId', self.id)
