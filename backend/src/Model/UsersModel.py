from src.model.BasicModel import BasicModel
from flask import Flask
from datetime import date

class UsersModel(BasicModel):
    attributes = {
        'id': int,
        'firstName': str,
        'lastName': str,
        'email': str,
        'password': str,
        'gender': str,
        'phone': str,
        'birthdate': date,
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
        'birthdate': date,
        'picture': str,
        'income': int
    }

    def __init__(self, data):
        super().__init__(data)
