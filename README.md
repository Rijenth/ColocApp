# ColocApp

cd ColocApp/frontend && yarn install

docker-compose up -d --build

## Team

| Nom de famille | Prénom  | Github     |
| -------------- | ------- | ---------- |
| VIDEAU         | Ethan   | @Setsudan  |
| HA             | Adrien  | @JinSu77   |
| ARUMAINATHAN   | Rijenth | @Rijenth   |
| LEVENEUR       | Louis   | @LFLeveeur |
| PIVERT         | Fabrice | @Fabpiv    |
| BAKAYOKO       | Kader   | @gaoubak   |


# Pour lancer l'app

`cd frontend` -> `yarn` -> `cd ..` -> `docker-compose up -d --build`

1. Testing Endpoint
    1.  Endpoint : `/`
        1. method: GET
        2. status code: 200 OK
        3. data: None
        4. response: {"message"}

2. Authentication
    1. Register
        1. Endpoint : `/api/auth/register`
        2. method: POST
        3. status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
        4. data: {
            uid: str
            firstName: str
            lastName: str
            email: str
            password: str
            gender: str
            phone: str
            birthdate: str
            picture: str
            income: int
        }
        5. response: {"type", "token"}
        
    2. Login
        1. Endpoint : `/api/auth/login`
        2. method: POST
        3. status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
        4. data: {
            email: str
            password: str
        }
        5. response: {"type", "token"}

3. Colocation
    1. Get All Colocations
        1. Endpoint : `/api/colocation`
        2. method: GET
        3. status code: 200 (OK)
        4. data: None
        5. response: {...[colocation]}

    2. Get Colocation by ID
        1. Endpoint : `/api/colocation/<string:id>`
        2. method: GET
        3. status code: 200 (OK) || 404 (NOT FOUND)
        4. data: {
            uid: str
        }
        5. response: {[colocation]}
    
    3. Create Colocation
        1. Endpoint : `/api/colocation`
        2. method: POST
        3. status code: 201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
        4. data: { 
            name: str
            rentDue: int
            rentPaid: int 
        }
        5. response: {"message"}

    4. Update Colocation
        1. Endpoint : `/api/colocation/<string:id>`
        2. method: PUT
        3. status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
        4. data: {
            name: str
            rentDue: int
            rentPaid: int 
        }
        5. response: {"message"}

    5. Delete Colocation
        1. Endpoint : `/api/colocation/<string:id>`
        2. method: DELETE
        3. status code: 204 (NO CONTENT)
        4. data: None
        5. response: None

4. Expense
    1. Get All Expenses
        1. Endpoint : `/api/expense`
        2. method: GET
        3. status code: 200 (OK)
        4. data: None
        5. response: {...[Expense]}

    2. Get Expenses by Colocation ID
        1. Endpoint : `/api/expense/colocation/<string:id>`
        2. method: GET
        3. status code: 200 (OK) || 404 (NOT FOUND) || 422 (UNPROCESSABLE ENTITY)
        4. data: None
        5. response: {[Expense]}

    3. Get Expenses by User ID
        1. Endpoint : `/api/expense/user/<string:id>`
        2. method: GET
        3. status code: 200 (OK) || 404 (NOT FOUND) || 422 (UNPROCESSABLE ENTITY)
        4. data: None
        5. response: {[Expense]}

    4. Create Expense
        1. Endpoint : `/api/expense`
        2. method: POST
        3. status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
        4. data: {
            amount: int
            colocataireId: int
            paidFor: enumerate(['loyer', 'electricite', 'eau', 'nourriture', 'autre'])
            description: str
            colocation.id: int 
        }
        5. response: {"message"}

    5. Update Expense
        1. Endpoint : `/api/expense/<string:id>`
        2. method: PUT
        3. status code: 204 (NO CONTENT)) || 422 (UNPROCESSABLE ENTITY)
        4. data: None
        5. response: None

    6. Delete Expense
        1. Endpoint : `/api/expense/<string:id>`
        2. method: DELETE
        3. status code: 204 (NO CONTENT)
        4. data: None
        5. response: None

5. Colocataire
    1. Get All Colocataires
        1. Endpoint : `/api/colocataire`
        2. method: GET
        3. status code: 200 (OK)
        4. data: None
        5. response: {...[colocataire]}

    2. Get Colocataire by User ID
        1. Endpoint : `/api/colocataire/user/<string:id>`
        2. method: GET
        3. status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
        4. data: None
        5. response: {...[colocataire]}

    3. Get Colocataire by Colocation ID
        1. Endpoint : `/api/colocataire/colocation/<string:id>`
        2. method: GET
        3. status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
        4. data: None
        5. response: {[colocataire]}

    4. Create Colocataire
        1. Endpoint : `/api/colocataire`
        2. method: POST
        3. status code: 201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
        4. data: {
            userId: int
            colocationId: int 
        }
        5. response: {"message"}

    5. Update Colocataire
        1. Endpoint : `/api/colocataire/<string:id>`
        2. method: PUT
        3. status code: 201 (CREATED))

    6. Delete Colocataire
        1. Endpoint : `/api/colocataire/<string:id>`
        2. method: DELETE
        3. status code: 204 (NO CONTENT)
        4. data: None
        5. response: None

    7. Update Colocataire
        1. Endpoint : `/api/Colocataire/<string:id>`
        2. method: PUT
        3. status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
        4. data: None
        5. response: {"message"}

6. Users
    1. Get All Users
        1. Endpoint : `/api/users`
        2. method: GET
        3. status code: 200 (OK)
        4. data: None
        5. response: {...[User]}

    2. Get User by ID
        1. Endpoint : `/api/users/<int:id>`
        2. method: GET
        3. status code: 200 (OK) || 404 (NOT FOUND)
        4. data: None
        5. response: {[User]}

    3. Update User
        1. Endpoint : `/api/users/<string:id>`
        2. method: PUT
        3. status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
        4. data: {
            firstName: str,
            lastName: str,
            email: str,
            password: str,
            gender: str,
            phone: str,
            birthdate: str,
            picture: str,
            income: int 
        }
        5. response: {[User]}

    4. Delete User
        1. Endpoint : `/api/users/<int:id>`
        2. method: DELETE
        3. status code: 204 (NO CONTENT)
        4. data: None
        5. response: None