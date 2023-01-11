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

    def __init__(self, data):
        super().__init__(data)
       

    def Colocataire(self):
        return self.belongs_to('colocataireId', 'id', self.ColocataireId)
    