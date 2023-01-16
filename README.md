# ColocApp

git clone https://github.com/Rijenth/ColocApp

## To run the app

1. **cd into frontend and do a yarn install**
    1. ``cd frontend && yarn install``
<br>

2. **cd back to root and build the container**
    1. ``cd .. && docker-compose up -d --build``
<br>

3. **handling error with frontend container**
    1. The frontend container was created to be launch throught WSL,
    if you have any issue with the `react_frontend` container, or if the application is not working as intended on the client side,
    you have to down the `react_frontend` container and then use the following command : 
    2. ``cd frontend && yarn dev``

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
        1. Method: GET
        2. Status code: 200 OK
        3. Data: None
        4. Response: {"message"}

2. Authentication
    1. Register
        1. Endpoint : `/api/auth/register`
        2. Method: POST
        3. Status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
        4. Data: {
            uid: str, 
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
        5. Response: {"type", "token"}
        
    2. Login
        1. Endpoint : `/api/auth/login`
        2. Method: POST
        3. Status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
        4. Data: {
            email: str, 
            password: str
        }
        5. Response: {"type", "token"}

3. Colocation
    1. Get All Colocations
        1. Endpoint : `/api/colocation`
        2. Method: GET
        3. Status code: 200 (OK)
        4. Data: None
        5. Response: {...[colocation]}

    2. Get Colocation by ID
        1. Endpoint : `/api/colocation/<string:id>`
        2. Method: GET
        3. Status code: 200 (OK) || 404 (NOT FOUND)
        4. Data: {
            uid: str 
        }
        5. Response: {[colocation]}
    
    3. Create Colocation
        1. Endpoint : `/api/colocation`
        2. Method: POST
        3. Status code: 201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
        4. Data: { 
            name: str, 
            rentDue: int, 
            rentPaid: int 
        }
        5. Response: {"message"}

    4. Update Colocation
        1. Endpoint : `/api/colocation/<string:id>`
        2. Method: PUT
        3. Status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
        4. Data: {
            name: str, 
            rentDue: int, 
            rentPaid: int 
        }
        5. Response: {"message"}

    5. Delete Colocation
        1. Endpoint : `/api/colocation/<string:id>`
        2. Method: DELETE
        3. Status code: 204 (NO CONTENT)
        4. Data: None
        5. Response: None

4. Expense
    1. Get All Expenses
        1. Endpoint : `/api/expense`
        2. Method: GET
        3. Status code: 200 (OK)
        4. Data: None
        5. Response: {...[Expense]}

    2. Get all Expenses for colocation by Colocation ID
        1. Endpoint : `/api/expense/colocation/<string:id>`
        2. Method: GET
        3. Status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
        4. Data: None
        5. Response: {[Expense]}

    3. Get all Expenses for a colocation by UID
        1. Endpoint : `/api/expense/user/<string:uid>`
        2. Method: GET
        3. Status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
        4. Data: None
        5. Response: {[Expense]}

    4. Create Expense
        1. Endpoint : `/api/expense`
        2. Method: POST
        3. Status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
        4. Data: {
            amount: int, 
            colocataireId: int, 
            paidFor: enumerate(['loyer', 'electricite', 'eau', 'nourriture', 'autre']), 
            description: str, 
            colocation.id: int 
        }
        5. Response: {"message"}

    5. Update Expense
        1. Endpoint : `/api/expense/<string:id>`
        2. Method: PUT
        3. Status code: 204 (NO CONTENT)) || 422 (UNPROCESSABLE ENTITY)
        4. Data: None
        5. Response: None

    6. Delete Expense
        1. Endpoint : `/api/expense/<string:id>`
        2. Method: DELETE
        3. Status code: 204 (NO CONTENT)
        4. Data: None
        5. Response: None

5. Colocataire
    1. Get All Colocataires
        1. Endpoint : `/api/colocataire`
        2. Method: GET
        3. Status code: 200 (OK)
        4. Data: None
        5. Response: {...[colocataire]}

    2. Get Colocataire by User ID
        1. Endpoint : `/api/colocataire/user/<string:id>`
        2. Method: GET
        3. Status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
        4. Data: None
        5. Response: {...[colocataire]}

    3. Get Colocataire by Colocation ID
        1. Endpoint : `/api/colocataire/colocation/<string:id>`
        2. Method: GET
        3. Status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
        4. Data: None
        5. Response: {[colocataire]}

    4. Create Colocataire
        1. Endpoint : `/api/colocataire`
        2. Method: POST
        3. Status code: 201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
        4. Data: {
            userId: int, 
            colocationId: int  
        }
        5. Response: {"message"}

    5. Update Colocataire
        1. Endpoint : `/api/colocataire/<string:id>`
        2. Method: PUT
        3. Status code: 201 (CREATED)

    6. Delete Colocataire
        1. Endpoint : `/api/colocataire/<string:id>`
        2. Method: DELETE
        3. Status code: 204 (NO CONTENT)
        4. Data: None
        5. Response: None

    7. Update Colocataire
        1. Endpoint : `/api/Colocataire/<string:id>`
        2. Method: PUT
        3. Status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
        4. Data: None
        5. Response: {"message"}

6. Users
    1. Get All Users
        1. Endpoint : `/api/users`
        2. Method: GET
        3. Status code: 200 (OK)
        4. Data: None
        5. Response: {...[User]}

    2. Get User by UID
        1. Endpoint : `/api/users/<string:uid>`
        2. Method: GET
        3. Status code: 200 (OK) || 404 (NOT FOUND)
        4. Data: None
        5. Response: {[User]}

    3. Update User
        1. Endpoint : `/api/users/<string:uid>`
        2. Method: PUT
        3. Status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
        4. Data: {
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
        5. Response: {[User]}

    4. Delete User
        1. Endpoint : `/api/users/<int:uid>`
        2. Method: DELETE
        3. Status code: 204 (NO CONTENT)
        4. Data: None
        5. Response: None
