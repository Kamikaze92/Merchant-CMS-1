# Peduli Lindungi CMS Server
Peduli Lindungi is an application to manage your .... This app has : 
### RESTful endpoint for :

### auth
1. `POST /login`
2. `POST /register`
3. `PATCH /otp-verification/:id/:token`
4. `POST /resend-otp/:id/:token`
5. `POST /forgot-password/:id/:token`
6. `PATCH /reset-password/:id/:token`


### Merchant
1. `GET /users/merchants`


### User
1. `GET  /users`
2. `POST /users`
3. `GET /users/verifiers `
4. `GET /users/:id`
5. `PUT /users/:id`
6. `PATCH /users/:id`
7. `DELETE /users/:id`
8. `POST /users/activation/:id`
9. `PATCH /users/approve-user/:id/:token`
10. `PATCH /users/create-password/:id`

### User Group
1. `GET /user-groups`
2. `POST /user-groups`
3. `GET /user-groups/:id`
4. `PUT /user-groups`
5. `DELETE /user-groups`


### Role
1. `GET /roles`
2. `POST /roles`
3. `GET /roles/:id`
4. `PUT /roles/:id`
5. `DELETE /roles/:id`


### Privilege
1. `GET /privileges`
2. `POST /privileges`
3. `GET /privileges/:id`
4. `DELETE /privileges/:id`


### provinces
1. `GET /provinces`


### histories
1. `GET /histories`


### Category
1. `GET /categories`  
2. `POST /categories`
3. `PUT /categories/:id`

4. `GET /categories/tenant`
5. `GET /categories/tenant/:id`
6. `PUT /categories/tenant/:id`

7. `POST /categories/sub/:category_id`
8. `PUT /categories/sub/:id`
9. `GET /categories/:id`
10. `DELETE /categories/:id`


### Verificator
1. ``

### Sub Category
1.


### JSON formatted response

&nbsp;

### POST /register
> Create users


**Request Headers**
```
not needed
```
**Request Params**
```
not needed
```
**Request Body**
```json
{
        "full_name": "String",
        "email": "String",
        "phone_number": "String",
        "category_id": "Integer",
        "tenant_category_id": "Integer",
        "parent_id": "Integer",
        "place_name": "String",
        "institution": "String",
        "address": "String",
        "postal_code": "Integer",
        "province_id": "Integer",
        "city_id": "Integer",
}
```
**Response (201 - Created)**
```json
{
    "message": "OTP was sent to <user email>",
    "id": "Integer",
    "token": "String"
}
```
**Response (400 - Bad Request)**
```json
{
    "key": "value",
}
```
**Response (400 - Bad Request)**
```json
{
    "key": "value",
}
```
**Response (400 - Bad Request)**
```json
{
    "key": "value",
}
```
**Response (400 - Bad Request)**
```json
{
    "key": "value",
}
```
**Response (400 - Bad Request)**
```json
{
    "key": "value",
}
```
**Response (500 Internal Server Error)**
```json
{
    "key": "value",
}
```

### POST /register
> Create users

**Request Headers**
```
not needed
```
**Request Params**
```
not needed
```
**Request Body**
```json
{
    "key_1": "value_1",
    "key_2": "value_2",
}
```
**Response (201 - Created)**
```json
{
    "key_1": "value_1",
    "key_2": "value_2",
}
```
**Response (400 - Bad Request)**
```json
{
    "key": "value",
}
```
**Response (400 - Bad Request)**
```json
{
    "key": "value",
}
```
**Response (400 - Bad Request)**
```json
{
    "key": "value",
}
```
**Response (400 - Bad Request)**
```json
{
    "key": "value",
}
```
**Response (400 - Bad Request)**
```json
{
    "key": "value",
}
```
**Response (500 Internal Server Error)**
```json
{
    "key": "value",
}
```