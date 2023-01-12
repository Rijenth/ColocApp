from src.action.DatabaseActions import DatabaseActions
from src.model.ColocationModel import ColocationModel

class ColocationAction(DatabaseActions):
    def __init__(self):
        super().__init__('Colocation')

    def index(self):
        result = super()._index()
        return result

    def show(self, id):
        result = super()._get('id', id)
        return result

    def post(self, model):
        query = "INSERT INTO " + self.table + " (name, rentDue, rentPaid, createdAt, updatedAt ) VALUES (%s, %s, %s, %s, %s)"
        value = (
            model.name,
            model.rentDue,
            model.rentPaid,
            model.createdAt,
            model.updatedAt
        )
        super()._execute(query, value)

    def update(self, model, id):
        query = "UPDATE" + self.table + " (name, rentDue, rentPaid, createdAt, updatedAt ) VALUES (%s, %s, %s, %s, %s)"
        value = (
            model.name,
            model.rentDue,
            model.rentPaid,
            model.createdAt,
            model.updatedAt
        )
        super()._execute(query, value, id)

    def delete(self, id):
        query = "DELETE FROM " + self.table + " WHERE id = %s"
        super()._execute(query, (id,))

