from flask import (Flask, jsonify, json, request)
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from src.controller.UsersController import UsersController
from src.model.ColocationModel import ColocationModel
from src.model.ExpenseModel import ExpenseModel
from src.controller.ExpenseController import ExpenseController
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
    data = {
        'id': 1,
        'name': "John",
        'rentDue': 185,
        'rentPaid': 185,
        'createdAt': "24/12/2022",
        'updatedAt': "25/12/2022"
    }
    colocation = ColocationModel(data)

    return jsonify(colocation.serialize())

@app.route('/api/data', methods=['POST'])
def data():
    data = request.get_json()
    return jsonify({'message': 'Data received!', 'data': data})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

@app.route('/api/expense', methods=['GET'])
def indexExpense():
   return ExpenseController.indexExpense()

@app.route('/api/expense/<id>', methods=['GET'])
def showColocExpense(id):
       return ExpenseController.showAllExpense(id)
       # return Faut lui passer l'id de la colocation

@app.route('/api/expense', methods=['POST'])
def createExpense():
    data = request.get_json()
    return ExpenseController.newExpense(data)
@app.route('/api/expense/<id>', methods=['PUT'])
def updateExpense(id):
    data = request.get_json()
    return ExpenseController.updateExpense(id, data)
    
@app.route('/api/expense/<id>', methods=['DELETE']) 
def deleteExpense(id):
    return ExpenseController.deleteExpense(id)