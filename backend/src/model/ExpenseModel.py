from src.model.BasicModel import BasicModel
from flask import Flask
from datetime import date

class ExpenseModel(BasicModel):
    attributes = {
            'amount': int,
            'colocataireId': int,
            'paidFor': str,
            'description': str,
            'colocationId': int,
        }
    serializable = {
            'id': int,
            'amount': int,
            'colocataireId': int,
            'paidFor': str,
            'createdAt': str,
            'updatedAt': str,
            'description': str,
            'colocationId': int
        }
    
    relationships = ['Users','Coloation']

    def __init__(self, data):
        super().__init__(data)
       

    def Colocataire(self):
        return self.belongs_to('colocataireId', 'id', self.ColocataireId)
    def User(self):
        return self.has_one('id', 'colocataireId', self.ColocataireId)
    