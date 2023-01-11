from src.model.ExpenseModel import ExpenseModel
from src.action.DatabaseActions import DatabaseActions
import pymysql
 

class ExpenseAction(DatabaseActions):
    def __init__(self):
         super().__init__('expense')

    def index(self):
        data = super()._get()   
        return self(data).serializeWithRelationships()

    def post(self, model):
        query= "INSERT INTO " + self.table + " (amount, colocataireId, paidFor, createdAt, updatedAt , description , colocation.id ) VALUES (%s, %s, %s, %s, %s)"
        value = (model.amount, model.colocataireId, model.paidFor, model.createdAt, model.updatedAt ,model.description, model.colocation.id )
        super()._execute(query, value)

    def getExpenseUser(self, id):
        data = super()._get("colocataireId", (id,))   
        return self(data).serializeWithRelationships()

    def getExpenseColoc(self, id):
        data = super()._get("colocation.id", (id,))   
        return self(data).serializeWithRelationships()

    def update(self , model, id):
        query= "UPDATE" + self.table + " (amount, colocataireId, paidFor, createdAt, updatedAt , description , colocation.id ) VALUES (%s, %s, %s, %s, %s)"
        value = (model.amount, model.colocataireId, model.paidFor, model.createdAt, model.updatedAt ,model.description, model.colocation.id )
        super()._execute(query, value)

    def delete(self, id):
        query = "DELETE FROM " + self.table + " WHERE id = %s"
        super()._execute(query, (id,))
