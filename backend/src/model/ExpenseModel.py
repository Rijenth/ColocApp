from src.model.BasicModel import BasicModel
from flask import Flask
from datetime import date

class ExpenseModel(BasicModel):
    table = "expense"
    
    attributes = {
            'id': int,
            'amount': int,
            'paibBy': str,
            'paidFor': enumerate(['loyer', 'electricite', 'eau', 'nourriture', 'autre']),
            'createdAt': date,
            'updatedAt': date,
            'description': str,
            'colocataireId': int,
        }

    def __init__(self, data):
        super(self).__init__(data)
       

    def Colocataire(self):
        return self.belongs_to('colocataireId', 'id', self.ColocataireId)
    
    def index():
        return ExpenseModel.query.all()

    def post(self, model):
        query= "INSERT INTO " + self.table + " (amount, paidBy, paidFor, createdAt, updatedAt , description , colocataireId ) VALUES (%s, %s, %s, %s, %s)"
        value = (model.amount, model.paidBy, model.paidFor, model.createdAt, model.updatedAt ,model.description, model.colocataireId )
        super()._execute(query, value)

    def get(self, id):
        data = super()._get("id", (id,))   
        return self(data).serializeWithRelationships()

    def update(self , model, id):
        query= "UPDATE" + self.table + " (amount, paidBy, paidFor, createdAt, updatedAt , description , colocataireId ) VALUES (%s, %s, %s, %s, %s)"
        value = (model.amount, model.paidBy, model.paidFor, model.createdAt, model.updatedAt ,model.description, model.colocataireId )
        super()._execute(query, value)

    def delete(self, id):
        query = "DELETE FROM " + self.table + " WHERE id = %s"
        super()._execute(query, (id,))
    