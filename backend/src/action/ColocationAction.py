from src.action.DatabaseActions import DatabaseActions
from datetime import date
import random

class ColocationAction(DatabaseActions):
    def __init__(self):
        super().__init__('Colocation')

    def index(self):
        result = super()._index()
        return result

    def show(self, key, value):
        result = super()._get(key, value)
        return result

    def post(self, model):
        query = "INSERT INTO " + self.table + " (name, rentDue, rentPaid, createdAt, updatedAt, code) VALUES (%s, %s, %s, %s, %s, %s)"
        value = (
            model.name,
            model.rentDue,
            False,
            date.today().strftime("%Y-%m-%d"),
            date.today().strftime("%Y-%m-%d"),
            model.code
            
        )
        super()._execute(query, value)

    def update(self, id, model):
        query = "UPDATE " + self.table + " SET name = %s, rentDue = %s, rentPaid = %s WHERE id = %s"
        value = (
            model.name,
            model.rentDue,
            model.rentPaid,
            id
        )
        super()._execute(query, value)

    def delete(self, id):
        query = "DELETE FROM " + self.table + " WHERE id = %s"
        super()._execute(query, (id,))

