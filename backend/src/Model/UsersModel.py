from src.model.BasicModel import BasicModel
from flask import Flask

class UsersModel(BasicModel):
    attributes = {
        'id': int,
        'username': str,
        'name': str,
        'email': str,
        'password': str,
        'role': bool,
        'picture': str,
        'income': int
    }

    serializable = {
        'id': int,
        'username': str,
        'name': str,
        'email': str,
        'password': str,
        'role': bool,
        'picture': str,
        'income': int
    }

    def __init__(self, data):
        super().__init__(data)
