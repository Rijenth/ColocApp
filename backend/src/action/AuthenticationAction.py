from src.action.DatabaseActions import DatabaseActions
import bcrypt


class AuthenticationAction(DatabaseActions):
    def __init__(self):
        super().__init__('user')

    def register(self, model):
        query = "INSERT INTO " + self.table + " (username, name, email, password, role, picture, income) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        value = (
            model.username,
            model.name,
            model.email,
            self.hashPassword(model.password), 
            model.role,
            model.picture,
            model.income
        )
        super()._execute(query, value)
    
    def login(self, data): 
        row = super()._get("username", data["username"])
        if(len(row) == 0):
            return []
        elif(self.checkPassword(data['password'].encode('utf-8'), row['password'].encode('utf-8')) == False):
            return []
        return row
   

    def hashPassword(self, password:str):
        return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    def checkPassword(self, password, hashedPassword):
        return bcrypt.checkpw(password, hashedPassword)