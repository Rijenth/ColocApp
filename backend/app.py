from flask import (Flask, jsonify, json, request)
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from src.controller.UsersController import UsersController
from src.controller.ExpenseController import ExpenseController
from src.model.ColocationModel import ColocationModel
from datetime import datetime
from src.controller.ExpenseController import ExpenseController
from src.controller.ColocationController import ColocationController
from src.controller.ColocataireController import ColocataireController

app=Flask(__name__)
cors = CORS(app)
app.config['JWT_SECRET_KEY'] = "952zWPh*6aKvy4aP8h6Dx"
jwt = JWTManager(app)

@app.route('/', methods=['GET'])
def home():
    return jsonify({'message': 'Everything is fine!'}), 200

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
###   Expense      ###
###                ### 

# Get all expenses
@app.route('/api/expense', methods=['GET'])
def indexExpense():
        return ExpenseController.indexExpense()

# Get all expense of a colocation
@app.route('/api/expense/colocation/<string:id>', methods=['GET'])
def showColocExpense(id):
    try:
        int(id)
    except Exception as e:
        return jsonify({"type": "error"}), 422
    return ExpenseController.showColocExpense(int(id))

# Get all expense of a user
@app.route('/api/expense/user/<string:id>', methods=['GET'])
def showExpense(id):
    try:
        int(id)
    except Exception as e:
        return jsonify({"type": "error"}), 422
    return ExpenseController.showColocExpense(int(id))

# Create a new expense
# { "amount", "colocataireId", "paidFor": 'loyer, electricte, eau, nourriture, autre', "description" ,"colocationId" }
@app.route('/api/expense', methods=['POST'])
def createExpense():
    data = request.get_json()

    if not all (k in data for k in ("amount", "colocataireId", "paidFor", "description", "colocationId")):
        missing = [k for k in ("amount", "colocataireId", "paidFor", "description", "colocationId") if k not in data]
        return jsonify({"type": "error", "message" : "missing one of the following attributes " + str(missing)}), 422

    if data['paidFor'] not in ('loyer','electricite','eau','nourriture','autres'):
        return jsonify({"type": "error", "message" : "paidFor has to be one of ('loyer','electricite','eau','nourriture','autres')"}), 422

    return ExpenseController.newExpense(data)

# Update a expense
# {"id", "amount", "colocataireId", "paidFor": 'loyer,eletricte,eau,nourriture,autre',"desccription" ,"colocationId" }
@app.route('/api/expense/<string:id>', methods=['PUT'])
def updateExpense(id):
    data = request.get_json()
    
    if not all (k in data for k in ("amount", "colocataireId", "paidFor", "description", "colocationId")):
        missing = [k for k in ("amount", "colocataireId", "paidFor", "description", "colocationId") if k not in data]
        return jsonify({"type": "error", "message" : "missing one of the following attributes " + str(missing)}), 422

    if data['paidFor'] not in ('loyer','electricite','eau','nourriture','autres'):
        return jsonify({"type": "error", "message" : "paidFor has to be one of ('loyer','electricite','eau','nourriture','autres')"}), 422

    try:
        int(id)
    except Exception as e:
        return jsonify({"type": "error"}), 422
    return ExpenseController.updateExpense(int(id), data)

# Delete a expense
@app.route('/api/expense/<string:id>', methods=['DELETE']) 
def deleteExpense(id):
    try:
        int(id)
    except Exception as e:
        return jsonify({"type": "error"}), 422
    return ExpenseController.deleteExpense(int(id))



###                ###
###   Colocataire  ###
###                ### 

# Get all Colocataire
@app.route('/api/colocataire', methods=['GET'])
def indexColocataire():
        return ColocataireController.indexColocataire()

# Get one Colocataire 
@app.route('/api/colocataire/user/<string:id>', methods=['GET'])
def showColocataire(id):
    try:
        int(id)
    except Exception as e:
        return jsonify({"type": "error"}), 422
    return ColocataireController.showColocataire(int(id))

# Get  Colocataire of a colocation
@app.route('/api/colocataire/colocation/<string:id>', methods=['GET'])
def showColocExpenseColoc(id):
    try:
        int(id)
    except Exception as e:
        return jsonify({"type": "error"}), 422
    return ColocataireController.showColocataireColoc(int(id))

# Create a new Colocataire
# { "code", "userId" }
@app.route('/api/colocataire', methods=['POST'])
def createColocataire():
    data = request.get_json()
    if not 'code' in data or not 'uid' in data:
        return jsonify({"type": "error", "message" : "missing attributes 'code:int4' or/and 'uid:str'"}), 422
    return ColocataireController.createColocataire(data)


# Update a Colocataire
# { "userId", "colocationId" }
@app.route('/api/Colocataire/<string:id>', methods=['PUT'])
def updateColocataire(id):
    data = request.get_json()
    try:
        int(id)
    except Exception as e:
        return jsonify({"type": "error"}), 422
    return ColocataireController.updateColocataire(int (id), data)

# Delete a Colocataire
@app.route('/api/Colocataire/<string:id>', methods=['DELETE']) 
def deleteColocataire(id):
    try:
        int(id)
    except Exception as e:
        return jsonify({"type": "error"}), 422
    return ColocataireController.deleteColocataire(int(id))

###                ###
###      USER      ###
###                ###

# INDEX
@app.route('/api/users', methods=['GET'])
def indexUser():
    return UsersController.indexUser()

# SHOW
@app.route('/api/users/<string:uid>', methods=['GET'])
def showUser(uid):
    return UsersController.showUser(uid)

# UPDATE
# { Un body avec toutes les données du user }
@app.route('/api/users/<string:uid>', methods=['PUT'])
def updateUser(uid):
    data = request.get_json()
    try:
        str(uid)
    except Exception as e:
        return jsonify({"message": "Bad request"}), 422
    return UsersController.updateUser(str(uid), data)

# DELETE
@app.route('/api/users/<string:uid>', methods=['DELETE'])
def deleteUser(uid):
    try:
        str(uid)
    except Exception as e:
        return jsonify({"message": "Bad request"}), 422
    return UsersController.deleteUser(str(uid))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5500)