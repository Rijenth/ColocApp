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

1. Testing Endpoint
endpoint: /
method: GET
status code: 200 OK
data: None
response: {"message"}
2. Authentication
Register
endpoint: /api/auth/register
method: POST
status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
data:
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
response: {"type", "token"}
Login
endpoint: /api/auth/login
method: POST
status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
data:
email: str
password: str
response: {"type", "token"}
3. Colocation
Get All Colocations
endpoint: /api/colocation
method: GET
status code: 200 (OK)
data: None
response: {...[colocation]}
Get Colocation by ID
endpoint: /api/colocation/<string:id>
method: GET
status code: 200 (OK) || 404 (NOT FOUND)
data:
uid: str
response: {[colocation]}
Create Colocation
endpoint: /api/colocation
method: POST
status code: 201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
data:
name: str
rentDue: int
rentPaid: int
response: {"message"}
Update Colocation
endpoint: /api/colocation/<string:id>
method: PUT
status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
data:
name: str
rentDue: int
rentPaid: int
response: {"message"}
Delete Colocation
endpoint: /api/colocation/<string:id>
method: DELETE
status code: 204 (NO CONTENT)
data: None
response: None
4. Expense
Get All Expenses
endpoint: /api/expense
method: GET
status code: 200 (OK)
data: None
response: {...[Expense]}
Get Expenses by Colocation ID
endpoint: /api/expense/colocation/<string:id>
method: GET
status code: 200 (OK) || 404 (NOT FOUND) || 422 (UNPROCESSABLE ENTITY)
data: None
response: {[Expense]}
Get Expenses by User ID
endpoint: /api/expense/user/<string:id>
method: GET
status code: 200 (OK) || 404 (NOT FOUND) || 422 (UNPROCESSABLE ENTITY)
data: None
response: {[Expense]}
Create Expense
endpoint: /api/expense
method: POST
status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
data:
amount: int
colocataireId: int
paidFor: enumerate(['loyer', 'electricite', 'eau', 'nourriture', 'autre'])
description: str
colocation.id: int
response: {"message"}
Update Expense
endpoint: /api/expense/<string:id>
method: PUT
status code: 204 (NO CONTENT)) || 422 (UNPROCESSABLE ENTITY)
data: None
response: None
Delete Expense
endpoint: /api/expense/<string:id>
method: DELETE
status code: 204 (NO CONTENT)
data: None
response: None
5. Colocataire
Get All Colocataires
endpoint: /api/colocataire
method: GET
status code: 200 (OK)
data: None
response: {...[colocataire]}
Get Colocataire by User ID
endpoint: /api/colocataire/user/<string:id>
method: GET
status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
data: None
response: {...[colocataire]}
Get Colocataire by Colocation ID
endpoint: /api/colocataire/colocation/<string:id>
method: GET
status code: 200 (OK) || 422 (UNPROCESSABLE ENTITY)
data: None
response: {[colocataire]}
Create Colocataire
endpoint: /api/colocataire
method: POST
status code: 201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
data:
userId: int
colocationId: int
response: {"message"}
Update Colocataire
endpoint: /api/colocataire/<string:id>
method: PUT
status code: 201 (CREATED))
Delete Colocataire
endpoint: /api/colocataire/<string:id>
method: DELETE
status code: 204 (NO CONTENT)
data: None
response: None
Update Colocataire
endpoint: /api/Colocataire/<string:id>
method: PUT
status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
data: None
response: {"message"}
6. Users
Get All Users
endpoint: /api/users
method: GET
status code: 200 (OK)
data: None
response: {...[User]}
Get User by ID
endpoint: /api/users/<int:id>
method: GET
status code: 200 (OK) || 404 (NOT FOUND)
data: None
response: {[User]}
Update User
endpoint: /api/users/<string:id>
method: PUT
status code: 201 (CREATED)) || 422 (UNPROCESSABLE ENTITY)
data:
firstName: str,
lastName: str,
email: str,
password: str,
gender: str,
phone: str,
birthdate: str,
picture: str,
income: int
response: {[User]}
Delete User
endpoint: /api/users/<int:id>
method: DELETE
status code: 204 (NO CONTENT)
data: None
response: None
