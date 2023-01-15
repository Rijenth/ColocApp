from src.action.DatabaseActions import DatabaseActions
from src.action.AuthenticationAction import AuthenticationAction
from src.model.UsersModel import UsersModel

class UsersAction(DatabaseActions):
    def __init__(self):
        super().__init__('Users')

    def index(self):
        data = super()._index()
        result = []
        for user in data:
            result.append(UsersModel(user).serialize())
        return result

    def show(self, key, value):
        return super()._get(key, value)

    def update(self, uid, model):
        query = "UPDATE " + self.table + " SET firstName = %s, lastName = %s, email = %s, gender = %s WHERE uid = %s"
        value = (
            model.firstName,
            model.lastName,
            model.email,
            model.gender,
            uid
        )
        super()._execute(query, value)

    def delete(self, id):
        query = "DELETE FROM " + self.table + " WHERE id = %s"
        super()._execute(query, (id,))
