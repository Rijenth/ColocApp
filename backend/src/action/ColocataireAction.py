from src.action.DatabaseActions import DatabaseActions
from datetime import date

class ColocataireAction(DatabaseActions):
    def __init__(self):
        super().__init__('Colocataire')

    def index(self):
        result = super()._index()
        return result

    def show(self, id):
        result = super()._get('id', id)
        return result
    
    def showColocUser(self, id, colocationId):
        query = "SELECT * FROM " + self.table + " WHERE userId = %s AND colocationId = %s"
        result = super()._execute(query, (id,colocationId))
        return result

    def showUser(self, id):
        result = super()._get('userId', id)
        return result
    def showColoc(self, id):
        result = super()._get('colocationId', id)
        return result

    def post(self, model):
        query = "INSERT INTO " + self.table + "  (userId, colocationId) VALUES (%s, %s)"
        value = (
            model.userId,
            model.colocationId,
        )
        super()._execute(query, value)

    def update(self, id, model):
        query = "UPDATE " + self.table + " SET userId = %s, colocationId = %s, WHERE id = %s"
        value = (
            model.userId,
            model.colocationId,
        )
        super()._execute(query, value)

    def delete(self, id):
        query = "DELETE FROM " + self.table + " WHERE id = %s"
        super()._execute(query, (id,))

        