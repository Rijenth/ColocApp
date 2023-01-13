from src.model.BasicModel import BasicModel
from datetime import date

class ColocationModel(BasicModel):
    attributes = {
        'id': int,
        'name': str,
        'rentDue': int,
        'rentPaid': int,
        'code': int,
    }

    serializable = {
        'id': int,
        'name': str,
        'rentDue': int,
        'rentPaid': int,
        'createdAt': str,
        'updatedAt': str,
        'code': int
    }

    relationships = ['Colocataire']

    def __init__(self, data):
        super().__init__(data)

    def Colocataire(self):
        return self.hasMany('Colocataire', 'colocationId', self.id)