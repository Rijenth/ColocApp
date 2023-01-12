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

    def show(self, id):
        return super()._get('id', id)

    def update(self, id, model):
        query = "UPDATE " + self.table + " SET firstName = %s, lastName = %s, email = %s, password = %s, phone = %s, gender = %s, birthdate = %s, picture = %s, income = %s WHERE id = %s"
        value = (
            model.firstName,
            model.lastName,
            model.email,
            AuthenticationAction().hashPassword(model.password),
            model.phone,
            model.gender,
            model.birthdate,
            model.picture,
            model.income,
            id
        )
        super()._execute(query, value)

    def delete(self, id):
        query = "DELETE FROM " + self.table + " WHERE id = %s"
        super()._execute(query, (id,))
