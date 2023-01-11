from src.model.BasicModel import BasicModel
from datetime import date

class ColocationModel(BasicModel):
    attributes = {
        'id': int,
        'name': str,
        'rentDue': int,
        'rentPaid': int,
        'createdAt': str,
        'updatedAt': str
    }

    serializable = {
        'id': int,
        'name': str,
        'rentDue': int,
        'rentPaid': int,
        'createdAt': str,
        'updatedAt': str
    }

    def __init__(self, data):
        super().__init__(data)