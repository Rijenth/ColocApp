from src.action.DatabaseActions import DatabaseActions
import bcrypt


class AuthenticationAction(DatabaseActions):
    def __init__(self):
        super().__init__('Users')

    def register(self, model):
        query = "INSERT INTO " + self.table + " (uid, firstName, lastName, email, password, gender, birthdate, phone, picture, income) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        value = (
            model.uid,
            model.firstName,
            model.lastName,
            model.email,
            self.hashPassword(model.password), 
            model.gender,
            model.birthdate,
            model.phone,
            model.picture,
            model.income
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