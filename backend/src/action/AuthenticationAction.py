from src.action.DatabaseActions import DatabaseActions
import bcrypt


class AuthenticationAction(DatabaseActions):
    def __init__(self):
        super().__init__('Users')

    def register(self, model):
        query = "INSERT INTO " + self.table + " (firstName, lastName, email, password, gender, birthdate) VALUES (%s, %s, %s, %s, %s, %s)"
        value = (
            model.firstName,
            model.lastName,
            model.email,
            self.hashPassword(model.password), 
            model.gender,
            model.birthdate,
        )
        super()._execute(query, value)
    
    def login(self, data): 
        row = super()._get("firstName", data["firstName"])
        if(len(row) == 0):
            return []
        elif(self.checkPassword(data['password'].encode('utf-8'), row['password'].encode('utf-8')) == False):
            return []
        return row
   

    def hashPassword(self, password:str):
        return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    def checkPassword(self, password, hashedPassword):
        return bcrypt.checkpw(password, hashedPassword)