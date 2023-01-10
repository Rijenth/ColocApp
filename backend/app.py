from flask import (Flask, jsonify, json, request)
from flask_cors import CORS
from src.model.ColocationModel import ColocationModel

app=Flask(__name__)
cors = CORS(app)

@app.route('/api/', methods=['GET'])
def home():
    return jsonify({'message': 'Everything is fine!', 'cool': 'Everything is fine!'})

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

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)