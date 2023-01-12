from flask import (Flask, jsonify, json, request)
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from src.controller.UsersController import UsersController
from src.model.ColocationModel import ColocationModel
from datetime import datetime


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
###                ###
###                ### 



@app.route('/api/colocation', methods=['GET'])
def getColoc():
    colocation = ColocationModel(
        '1',
        'ColocataireUser',
        '185',
        '1',
        '24/12/2022',
        '25/12/2022'
    )

    return jsonify({
        'id': colocation.id,
        'name': colocation.name,
        'rentDue': colocation.rentDue,
        'rentPaid': colocation.rentPaid,
        'createdAt': colocation.createdAt,
        'updatedAt': colocation.updatedAt
    })

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