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
        query= "INSERT INTO " + self.table + " (`amount`, `colocataireId`, `paidFor`, `createdAt`, `updatedAt`, `description`, `colocationId`) VALUES (%s, %s, %s, %s, %s,%s, %s)"
        value = (
            model.amount, 
            model.colocataireId, 
            model.paidFor, 
            date.today().strftime("%Y-%m-%d"),
            date.today().strftime("%Y-%m-%d"),
            model.description, 
            model.colocationId  
        )
        super()._execute(query, value)

    def getAllExpensesFromUser(self, colocataireId, colocationId):
        query = "SELECT * FROM " + self.table + " WHERE colocataireId= " + str(colocataireId) +" AND colocationId= " + str(colocationId)
        return super()._index(query)

    def getAllExpensesColoc(self, colocationId):
        query = "SELECT * FROM " + self.table + " WHERE colocationId= " + str(colocationId)
        return super()._index(query)

    def update(self, model, id):
        query= "UPDATE "+ self.table +" Set amount = %s, colocataireId = %s, paidFor = %s, updatedAt  = %s, description  = %s , colocationId  = %s  WHERE id = %s"
        value = (
            model.amount, 
            model.colocataireId, 
            model.paidFor, 
            date.today().strftime("%Y-%m-%d"),
            model.description, 
            model.colocationId,
            id
        )
        super()._execute(query, value)

    def delete(self, id):
        query = "DELETE FROM " + self.table + " WHERE id = %s"
        super()._execute(query, (id,))
