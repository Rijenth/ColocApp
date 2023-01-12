from src.model.BasicModel import BasicModel
from flask import Flask
from datetime import date
import uuid

class UsersModel(BasicModel):
    attributes = {
        'id': int,
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

    def __init__(self, data):
        super().__init__(data)

    def getUuid(self):
        return uuid.uuid1(self.id)

    def getIdFromUuid(self, uuid):
        return uuid.int & (2**32-1)

