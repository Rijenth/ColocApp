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

## Testing Endpoint
endpoint:```  / ``` 

method:``` GET ```
status code:
```bash
 200 OK
``` 
data: 
```bash
None
```
response: 
```bash
{"message"}
```
**2. Authentication**

*Register*

endpoint:
```bash
 /api/auth/register
```
method:
```bash
 POST
```
status code:
```bash
 200 (OK) || 422 (UNPROCESSABLE ENTITY)
```
- data 
    - uid: ``` str ```
    - firstName: ``` str ```
    - lastName: ``` str ```
    - email: ``` str ```
    - password: ``` str ```
    - gender: ``` str ```
    - phone: ``` str ```
    - birthdate: ``` str ```
    - picture: ``` str ```
    - income: ``` int ```

response:
```bash
{"type", "token"}
``` 
*Login* 
endpoint:
```bash
 /api/auth/login
```
method:
```bash
 POST
```

status code: 
```bash
200 (OK) || 422 (UNPROCESSABLE ENTITY)
```
- data:
  - email:``` str ```
  - password: ``` str ```

response: 
```bash
{"type", "token"}
```

**3. Colocation**
*Get All Colocations* 
endpoint:
```bash
 /api/colocation
```
method:
```bash
 GET
```

status code: 
```bash
200 (OK) 
```
- data:
  - none

response: 
```bash
{...[colocation]}
```

*Get Colocation by ID* 
endpoint:
```bash
 /api/colocation/<string:id>
```
method:
```bash
 GET
```

status code: 
```bash
200 (OK) || 404 (NOT FOUND) 
```
- data:
  - uid: ``` str ```

response: 
```bash
{[colocation]}
```

*Create Colocation* 
endpoint:
```bash
  /api/colocation
```
method:
```bash
 POST
```

status code: 
```bash
201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
```
- data:
    - name: ```str````
    - code: ```int 4 ```
    - rentDue: ``` int ```  
response: 
```bash
{"message"}
```

*Update Colocation* 
endpoint:
```bash
 /api/colocation/<string:id>
```
method:
```bash
 PUT
```

status code: 
```bash
201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
```
- data:
    - name: ```str```
    - rentDue: ```int ```
    - rentPaid: ``` int ```
  
response: 
```bash
{"message"}
```

*Delete Colocation* 
endpoint:
```bash
 /api/colocation/<string:id>
```
method:
```bash
 DELETE
```

status code: 
```bash
 204 (NO CONTENT)
```
- data:
    - none
  
response: 
```bash
None
```


**4. Expense**
*Get All Expenses*
endpoint:
```bash 
 /api/expense
```
method:
```bash
 GET
```
status code: 
```bash
 200 (OK)
```
- data: 
    - None
response: 
```bash
{...[Expense]}
```

*Get Expenses by Colocation ID*
endpoint:
```bash 
 /api/expense/colocation/<string:id>
```

method:
```bash
 GET
```

status code: 
```bash
200 (OK) || 404 (NOT FOUND) || 422 (UNPROCESSABLE ENTITY)
```

- data: 
    - None
response: 
```bash
{[Expense]}
```

*Get Expenses by User ID*
endpoint:
```bash 
 /api/expense/user/<string:id>
```

method:
```bash
 GET
```

status code: 
```bash
200 (OK) || 404 (NOT FOUND) || 422 (UNPROCESSABLE ENTITY)
```

- data: 
    - None
response: 
```bash
{[Expense]}
```

*Create Expense*
endpoint:
```bash 
 /api/expense
```

method:
```bash
 POST
```

status code: 
```bash
201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
```

- data: 
    - amount: ```int```
    - colocataireId: ```int```
    - paidFor: ```str(['loyer', 'electricite', 'eau', 'nourriture', 'autre'])```
    - description: ```str```
    - colocation.id: ```int```
response: 
```bash
{"message"}
```

*Update Expense*
endpoint:
```bash 
 /api/expense/<string:id>
```

method:
```bash
 PUT
```

status code: 
```bash
204 (NO CONTENT) || 422 (UNPROCESSABLE ENTITY)
```

- data: 
    - amount: ```int```
    - colocataireId: ```int```
    - paidFor: ```str(['loyer', 'electricite', 'eau', 'nourriture', 'autre'])```
    - description: ```str```
    - colocation.id: ```int```
response: 
```bash
{"message"}
```

*Delete Expense*
endpoint:
```bash 
 /api/expense/<string:id>
```

method:
```bash
 method: DELETE

```

status code: 
```bash
204 (NO CONTENT)
```

- data: 
    - None
response: 
```bash
None
```

**5. Colocataire**
*Get All Colocataires*
endpoint:
```bash 
 /api/colocataire
```

method:
```bash
 method: GET
```

status code: 
```bash
200 (OK)
```

- data: 
    - None
response: 
```bash
 {...[colocataire]}
```

*Get Colocataire by User ID*
endpoint:
```bash 
/api/colocataire/user/<string:id>
```

method:
```bash
 method: GET
```

status code: 
```bash
200 (OK) || 422 (UNPROCESSABLE ENTITY)
```

- data: 
    - None
response: 
```bash
 {...[colocataire]}
```


*Get Colocataire by Colocation ID*
endpoint:
```bash 
/api/colocataire/colocation/<string:id>
```

method:
```bash
 method: GET
```

status code: 
```bash
200 (OK) || 422 (UNPROCESSABLE ENTITY)
```

- data: 
    - None
response: 
```bash
 {...[colocataire]}
```

*Create Colocataire*
endpoint:
```bash 
/api/colocataire
```

method:
```bash
 method: POST
```

status code: 
```bash
201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
```

- data: 
    - userId: ````int````
    - colocationId: ````int````
response: 
```bash
 {"message"}
```

*Update Colocataire*
endpoint:
```bash 
/api/colocataire/<string:id>
```

method:
```bash
 method: PUT
```

status code: 
```bash
201 (CREATED)
```

- data: 
    - userId: ````int````
    - colocationId: ````int````
response: 
```bash
 None
```

*Delete Colocataire*
endpoint:
```bash 
/api/colocataire/<string:id>
```

method:
```bash
 method: DELETE
```

status code: 
```bash
204 (NO CONTENT)
```

- data: 
    - None
response: 
```bash
 None
```

**6. Users**
*Get All Users*
endpoint:
```bash 
/api/users
```

method:
```bash
GET
```

status code: 
```bash
200 (OK)
```

- data: 
    - None
response: 
```bash
{...[User]}
```

*Get User by ID*
endpoint:
```bash 
/api/users/<int:id>
```

method:
```bash
GET
```

status code: 
```bash
200 (OK) || 404 (NOT FOUND)
```

- data: 
    - None
response: 
```bash
{...[User]}
```

*Update User*
endpoint:
```bash 
/api/users/<int:id>
```

method:
```bash
GET
```

status code: 
```bash
201 (CREATED) || 422 (UNPROCESSABLE ENTITY)
```

- data: 
    - firstName: ````str````,
    - lastName: ````str````,
    - email: ````str````,
    - password: ````str````,
    - gender: ````str````,
    - phone: ````str````,
    - birthdate: ````str````,
    - picture: ````str````,
    - income: ````int````

response: 
```bash
{[User]}
```

*Delete User*
endpoint:
```bash 
/api/users/<int:id>
```

method:
```bash
DELETE
```

status code: 
```bash
204 (NO CONTENT)
```

- data: 
    - None

response: 
```bash
None
```

