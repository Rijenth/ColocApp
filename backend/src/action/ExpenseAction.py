from src.model.ExpenseModel import ExpenseModel
from src.action.DatabaseActions import DatabaseActions
from datetime import date
import pymysql
 

class ExpenseAction(DatabaseActions):
    def __init__(self):
         super().__init__('Expense')

    def index(self):
        result = super()._index("SELECT * FROM " + self.table + " Inner JOIN Users ON Expense.colocataireId = Users.id ")
        return result

    def post(self, model):
        query= "INSERT INTO " + self.table + " (amount, colocataireId, paidFor, createdAt, updatedAt , description , colocation.id ) VALUES (%s, %s, %s, %s, %s)"
        value = (
            model.amount, 
            model.colocataireId, 
            model.paidFor, 
            date.today().strftime("%Y-%m-%d"),
            date.today().strftime("%Y-%m-%d"),
            model.description, 
            model.colocation.id 
        )
        super()._execute(query, value)

    def getExpenseUser(self, id):
        data = super()._get("SELECT * FROM " + self.table + "Where colocataireId = %s  Inner JOIN Users ON Expense.colocataireId = Users.id ", (id))   
        return data
    
    def getExpenseColoc(self, id):
        data = super()._get("colocation.id", (id))   
        return data

    def update(self , model, id):
        query= "UPDATE" + self.table + " (amount, colocataireId, paidFor, createdAt, updatedAt , description , colocation.id ) VALUES (%s, %s, %s, %s, %s)"
        value = (
            model.amount, 
            model.colocataireId, 
            model.paidFor, 
            date.today().strftime("%Y-%m-%d"),
            date.today().strftime("%Y-%m-%d"),
            model.description, 
            model.colocation.id 
        )
        super()._execute(query, value, id)

    def delete(self, id):
        query = "DELETE FROM " + self.table + " WHERE id = %s"
        super()._execute(query, (id,))
