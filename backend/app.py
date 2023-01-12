from flask import (Flask, jsonify, json, request)
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from src.controller.UsersController import UsersController
from src.model.ColocationModel import ColocationModel
from datetime import datetime

from src.controller.ColocationController import ColocationController

app=Flask(__name__)
cors = CORS(app)
app.config['JWT_SECRET_KEY'] = "952zWPh*6aKvy4aP8h6Dx"
jwt = JWTManager(app)

@app.route('/api/', methods=['GET'])
def home():
    return jsonify({'message': 'Everything is fine!', 'cool': 'Everything is fine!'})

###                ###
### AUTHENTICATION ###
###                ###  

@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json()
    for key, value in data.items():
        if(type(value) == bool):
            data[key] = value
        else :
            data[key] = value.strip()
    return UsersController.register(data)

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    for key, value in data.items():
        data[key] = value.strip()
    return UsersController.login(data)


###                ###
###   COLOCATION   ###
###                ### 

###     INDEX      ###
@app.route('/api/colocation', methods=['GET'])
def indexColocation():
    return ColocationController.indexColocation()

###      SHOW      ###
@app.route('/api/colocation/<string:id>', methods=['GET'])
def showColocation(id):
    int(id)
    return ColocationController.showColocation(int(id))

###     CREATE     ###
# { "name": "nameCreate", "rentDue": 100, "rentPaid": 0 }
@app.route('/api/colocation', methods=['POST'])
def postColocation():
    data = request.get_json()
    return ColocationController.createColocation(data)

###     UPDATE     ###
# { "name": "nameEdit", "rentDue": 123, "rentPaid": 1 }
@app.route('/api/colocation/<string:id>', methods=['PUT'])
def updateColocation(id):
    data = request.get_json()
    try:
        int(id)
    except Exception as e:
        return jsonify({"message": "error"}), 422
    return ColocationController.updateColocation(int(id), data)

###     DELETE     ###
@app.route('/api/colocation/<string:id>', methods=['DELETE'])
def deleteColocation(id):
    try:
        int(id)
    except Exception as e:
        return jsonify({"message": "error"}), 422
    return ColocationController.deleteColocation(int(id))
    
###                ###
###                ###
###                ### 

@app.route('/api/data', methods=['POST'])
def data():
    data = request.get_json()
    return jsonify({'message': 'Data received!', 'data': data})


# Path: backend\src\controller\ExpenseController.py
# Get all expenses
@app.route('/api/expense', methods=['GET'])
def indexExpense():
        return ExpenseController.indexExpense()
# Get all expense of a colocation
@app.route('/api/expense/colocation/<id>', methods=['GET'])
def showColocExpense(id):
       return ExpenseController.showColocExpense(id)
       # return Faut lui passer l'id de la colocation

# Get all expense of a user
@app.route('/api/expense/user/<id>', methods=['GET'])
def showExpense(id):
       return ExpenseController.showColocExpense(id)
       # return Faut lui passer l'id de l'user

# Create a new expense
@app.route('/api/expense', methods=['POST'])
def createExpense():
    data = request.get_json()
    return ExpenseController.newExpense(data)

# Update a expense
@app.route('/api/expense/<id>', methods=['PUT'])
def updateExpense(id):
    data = request.get_json()
    return ExpenseController.updateExpense(id, data)

# Delete a expense
@app.route('/api/expense/<id>', methods=['DELETE']) 
def deleteExpense(id):
    return ExpenseController.deleteExpense(id)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)