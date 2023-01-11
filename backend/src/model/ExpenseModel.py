from src.model.BasicModel import BasicModel
from flask import Flask
from datetime import date

class ExpenseModel(BasicModel):
    attributes = {
            'id': int,
            'amount': int,
            'colocataireId': int,
            'paidFor': enumerate(['loyer', 'electricite', 'eau', 'nourriture', 'autre']),
            'createdAt': str,
            'updatedAt': str,
            'description': str,
            'colocation.id': int,
        }
    serializable = {
            'id',
            'amount',
            'colocataireId',
            'paidFor',
            'createdAt',
            'updatedAt',
            'description',
            'colocation.id'
        }
    
    relationships = ['Users','Coloation']

    def __init__(self, data):
        super().__init__(data)
       

    def Colocataire(self):
        return self.belongs_to('colocataireId', 'id', self.ColocataireId)
    def User(self):
        return self.has_one('id', 'colocataireId', self.ColocataireId)
    