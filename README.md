# ColocApp

cd ColocApp/frontend && yarn install

docker-compose up -d --build

## Team

| Nom de famille | Prénom  | Github     |
| -------------- | ------- |------------|
| VIDEAU         | Ethan   | @Setsudan  |
| HA             | Adrien  | @JinSu77   |
| ARUMAINATHAN   | Rijenth | @Rijenth   |
| LEVENEUR       | Louis   | @LFLeveeur |
| PIVERT         | Fabrice | @Fabpiv    |
| BAKAYOKO       | Kader   | @gaoubak   |

1. TESTING ENDPOINT
    1. endpoint : `/`
    2. method : GET
    3. status code : 200 OK
    4. data : None
    5. response : {"message"}

2. AUTHENTIFICATION
    1. endpoint : `/api/auth/register`
    2. method : POST
    3. status code : 200 (OK) || 422 (UNPROCESSABLE ENTITY)
    4. data : {
        'uid': str,
        'firstName': str,
        'lastName': str,
        'email': str,
        'password': str,
        'gender': str,
        'phone': str,
        'birthdate': str,
        'picture': str,
        'income': int
    }
    5. response : {"type", "token"}

    1. endpoint : `/api/auth/login`
    2. method : POST
    3. status code : 200 (OK) || 422 (UNPROCESSABLE ENTITY)
    4. data : {
        'email': str,
        'password': str,
    }
    5. response : {"type", "token"}

3. COLOCATION
    1. endpoint : `/api/colocation`
    2. method : GET
    3. status code : 200 (OK)
    4. data : None
    5. response : {...[colocation]}

    1. endpoint : `/api/colocation/<string:id>`
    2. method : GET
    3. status code : 200 (OK) || 404 (NOT FOUND)
    4. data : {
        'uid': str
        }
    5. response : {[colocation]}

    1. endpoint : `/api/colocation`
    2. method : POST
    3. status code : 201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
    4. data : {
        'name': str,
        'rentDue': int,
        'rentPaid': int,
    }
    5. response : {"message"}

        1. endpoint : `/api/colocation/<string:id>`
    2. method : PUT
    3. status code : 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
    4. data : {
        'name': str,
        'rentDue': int,
        'rentPaid': int,
    }
    5. response : {"message"}

    1. endpoint : `/api/colocation/<string:id>`
    2. method : DELETE
    3. status code : 204 (NO CONTENT)
    4. data : None
    5. response : None

4. Expense
    1. endpoint : `/api/expense`
    2. method : GET
    3. status code : 200 (OK)
    4. data : None
    5. response : {...[Expense]}

    1. endpoint : `/api/expense/colocation/<string:id>`
    2. method : GET
    3. status code : 200 (OK) || 404 (NOT FOUND) || 422 (UNPROCESSABLE ENTITY)
    4. data : None
    5. response : {[Expense]}

    1. endpoint : `/api/expense/user/<string:id>`
    2. method : GET
    3. status code : 200 (OK) || 404 (NOT FOUND) || 422 (UNPROCESSABLE ENTITY)
    4. data : None
    5. response : {[Expense]}

    1. endpoint : `/api/expense`
    2. method : POST
    3. status code : 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
    4. data : {
            'amount': int,
            'colocataireId': int,
            'paidFor': enumerate(['loyer', 'electricite', 'eau', 'nourriture', 'autre']),
            'description': str,
            'colocation.id': int,
        }
    5. response : {"message"}

    1. endpoint : `/api/expense/<string:id>`
    2. method : PUT
    3. status code : 204 (NO CONTENT)) || 422 (UNPROCESSABLE ENTITY)
    4. data : None
    5. response : None

    1. endpoint : `/api/expense/<string:id>`
    2. method : DELETE
    3. status code : 204 (NO CONTENT)
    4. data : None
    5. response : None
    
5. COLOCATAIRE
    1. endpoint : `/api/colocataire`
    2. method : GET
    3. status code : 200 (OK)
    4. data : None
    5. response : {...[colocataire]}

    1. endpoint : `/api/colocataire/user/<string:id>`
    2. method : GET
    3. status code : 200 (OK) || 422 (UNPROCESSABLE ENTITY)
    4. data : None
    5. response : {...[colocataire]}

    1. endpoint : `/api/colocataire/colocation/<string:id>`
    2. method : GET
    3. status code : 200 (OK) || 422 (UNPROCESSABLE ENTITY)
    4. data : None
    5. response : {[colocataire]}

    1. endpoint : `/api/colocataire`
    2. method : POST
    3. status code : 201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
    4. data : {
        'userId': int,
        'colocationId': int,
    }
    5. response : {"message"}

    1. endpoint : `/api/colocataire/<string:id>`
    2. method : PUT
    3. status code : 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
    4. data : {
        'name': str,
        'rentDue': int,
        'rentPaid': int,
    }
    5. response : {"message"}

    1. endpoint : `/api/colocataire/<string:id>`
    2. method : DELETE
    3. status code : 204 (NO CONTENT)
    4. data : None
    5. response : None

    1. endpoint : `/api/Colocataire/<string:id>`
    2. method : PUT
    3. status code : 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
    4. data : None
    5. response : {"message"}

6. 
    1. endpoint : `/api/users`
    2. method : GET
    3. status code : 200 (OK)
    4. data : None
    5. response : {...[User]}

    1. endpoint : `/api/users/<int:id>`
    2. method : GET
    3. status code : 200 (OK) || 404 (NOT FOUND)
    4. data : None
    5. response :{[User]}

    1. endpoint : `/api/users/<string:id>`
    2. method : PUT
    3. status code : 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
    4. data : {
        'firstName': str,
        'lastName': str,
        'email': str,
        'password': str,
        'gender': str,
        'phone': str,
        'birthdate': str,
        'picture': str,
        'income': int
    }
    5. response : {[User]}

    1. endpoint : `/api/users/<int:id>`
    2. method : DELETE
    3. status code : 204 (NO CONTENT)
    4. data : None
    5. response : None


    
    


