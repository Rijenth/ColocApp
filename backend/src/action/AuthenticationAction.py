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

        try :
            super()._execute(query, value)
        except Exception as e:
            return False
        return True
            
    
    def login(self, data): 
        row = super()._get("email", data["email"])

        if(row == None or len(row) == 0):
            return []

        if(self.checkPassword(data['password'].encode('utf-8'), row['password'].encode('utf-8')) == False):
            return []
            
        return row
   

    def hashPassword(self, password:str):
        return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    def checkPassword(self, password, hashedPassword):
        return bcrypt.checkpw(password, hashedPassword)