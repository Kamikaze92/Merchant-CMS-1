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




### JSON formatted response

&nbsp;

### POST /register
> Create users merchant


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
  "message": "Name is required"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Mobile phone is required"
}
OR
{
  "message": "Maximum mobile number is 15"
}
OR
{
  "message": "Invalid email format"
}

```

&nbsp;

### POST /login
> Login user


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
        
  "email": "String",
  "password": "String"
}
```
**Response (200 - OK)**
```json
{
  "access_token": "String"
}
```
**Response (401 - Unauthorized)**
```json
{
  "message": "Error invalid username or email or password"
}

```

### POST /otp-verification/:id/:token
> Create OTP

**Request Headers**
```
not needed
```
**Request Params**
```json
{
  "id": "integer (required)",
  "token": "string (required)"
}
```
**Request Body**
```json
{    
  "otp": "String"
}
```
**Response (200 - OK)**
```json
{
  "message": "Registration success! Please check your email by 3x24 for verification process."
}
```
**Response (400 - Bad Request)**
```json
{
  "message": "OTP is not valid"
}
OR
{
  "message": "Invalid email format"
}

```

### POST /resend-otp/:id/:token
> Resend OTP

**Request Headers**
```
not needed
```
**Request Params**
```json
{
  "id": "integer (required)",
  "token": "string (required)"
}
```
**Request Body**

```
not needed
```

**Response (200 - OK)**
```json
{
  "message": "OTP was sent to <user.email>.",
  "id": "integer",
  "token": "string",
}
```
**Response (400 - Bad Request)**
```json
{
  "message": "OTP was not sent successfully"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "User is not found"
}
```

### POST /forgot-password/:id/:token
> Forgot Password

**Request Headers**
```
not needed
```
**Request Params**
```json
{
  "id": "integer (required)",
  "token": "string (required)"
}
```
**Request Body**
```json
{    
  "email": "String"
}
```
**Response (201 - Created)**
```json
{
  "message": "A link has been sent to your email"
}
```
**Response (400 - Bad Request)**
```json
{
  "message": "OTP was not sent successfully"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "Email is not found"
}
```

### PATCH /reset-password/:id/:token
> Resend OTP

**Request Headers**
```
not needed
```
**Request Params**
```json
{
  "id": "integer (required)",
  "token": "string (required)"
}
```
**Request Body**

```json
{
  "password": "string",
  "password2": "string"
}
```

**Response (201 - Created)**
```json
{
  "message": "Your password has been changed, please attempt login"
}
```
**Response (401 - Unauthorized)**
```json
{
  "message": "Password not match"
}
```

### GET /merchants
> Get all merchants

**Request Headers**
```json
{
  "access_token": "string"
}
```
**Request Params**
```
not needed
```

**Request User**
```json
"Verifier": "string"
```

**Request Body**

```
not needed
```

**Response (200 - Ok)**
```json
[
    {
        "id": "Integer",
        "full_name": "String",
        "email": "String",
        "verified_at": "String",
        "phone_number": "String",
        "approved_by": "String",
        "approved_at": "String",
        "is_rejected": "Boolean",
        "rejected_reason": "String",
        "verifier_id": "Integer",
        "created_at": "String",
        "updated_at": "String",
        "deleted_at": "String",
        "Merchant": {
            "id": "Integer",
            "user_id": "Integer",
            "institution": "String",
            "address": "String",
            "postal_code": "String",
            "province_id": "Integer",
            "city_id": "Integer",
            "place_name": "String",
            "category_id": "Integer",
            "tenant_category_id": "Integer",
            "parent_id": "Integer",
            "created_at": "String",
            "updated_at": "String",
            "deleted_at": "String",
            "Category": {
                "id": "Integer",
                "name": "String",
                "description": "String",
                "is_tenant_category": "Boolean",
                "created_by": "String",
                "parent_id": "Integer",
                "created_at": "String",
                "updated_at": "String",
                "deleted_at": "String"
            }
        }
    },
]
```
**Response (403 - Forbidden)**
```json
{
  "message": "You are not allowed"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "User is not found"
}
```


========================!!
### GET /users
> Get all users

**Request Headers**
```json
{
  "access_token": "string"
}
```
**Request Query**
```js

"page": "Integer"
"size": "Integer"
"search": "String"
"filter": "String"

```

**Request Body**

```
not needed
```

**Response (200 - Ok)**
```json
[
   
]
```

**Response (404 - Not Found)**
```json
{
  "message": "User is not found"
}
```
=========================!!

========================!!
### GET /users/:id
> Get all users

**Request Headers**
```json
{
  "access_token": "string"
}
```
**Request Params**
```js
{
  "id": "integer (required)"
}
```

**Request Body**

```
not needed
```

**Response (200 - Ok)**
```json
{
   
   
}
```

**Response (404 - Not Found)**
```json
{
  "message": "User is not found"
}
```
=========================!!



### POST /users
> Create user

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Body**

```json
{
  "user_type": "String",
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

**Response (201 - Ok)**
```json
{
  "message": "success create new user" 
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Name is required"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Mobile phone is required"
}
OR
{
  "message": "Maximum mobile number is 15"
}
OR
{
  "message": "Invalid email format"
}

```

### GET /merchants/active
> Get all active merchants

**Request Headers**
```json
{
  "access_token": "string"
}
```
**Request Params**
```
not needed
```

**Request User**
```json
"Verifier": "string"
```

**Request Body**

```
not needed
```

**Response (200 - Ok)**
```json
[
    {
        "id": "Integer",
        "full_name": "String",
        "email": "String",
        "verified_at": "String",
        "phone_number": "String",
        "approved_by": "String",
        "approved_at": "String",
        "is_rejected": "Boolean",
        "rejected_reason": "String",
        "verifier_id": "Integer",
        "created_at": "String",
        "updated_at": "String",
        "deleted_at": "String",
        "Merchant": {
            "id": "Integer",
            "user_id": "Integer",
            "institution": "String",
            "address": "String",
            "postal_code": "String",
            "province_id": "Integer",
            "city_id": "Integer",
            "place_name": "String",
            "category_id": "Integer",
            "tenant_category_id": "Integer",
            "parent_id": "Integer",
            "created_at": "String",
            "updated_at": "String",
            "deleted_at": "String",
            "Category": {
                "id": "Integer",
                "name": "String",
                "description": "String",
                "is_tenant_category": "Boolean",
                "created_by": "String",
                "parent_id": "Integer",
                "created_at": "String",
                "updated_at": "String",
                "deleted_at": "String"
            }
        }
    },
]
```
**Response (403 - Forbidden)**
```json
{
  "message": "You are not allowed"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "User is not found"
}
```

### GET /verifiers
> Get all verifiers

**Request Headers**
```json
{
  "access_token": "string"
}
```
**Request Params**
```
not needed
```

**Request User**
```json
"Verifier": "string"
```

**Request Body**

```
not needed
```

**Response (200 - Ok)**
```json
[
    {
        "id": "Integer",
        "full_name": "String",
        "email": "String",
        "verified_at": "String",
        "phone_number": "String",
        "approved_by": "String",
        "approved_at": "String",
        "is_rejected": "String",
        "rejected_reason": "String",
        "verifier_id": "Integer",
        "created_at": "String",
        "updated_at": "String",
        "deleted_at": "String",
        "Verifier": {
            "id": "Integer",
            "institution": "String",
            "province_id": "Integer",
            "city_id": "Integer",
            "created_at": "String",
            "updated_at": "String",
            "deleted_at": "String"
        }
    },
]
```
**Response (403 - Forbidden)**
```json
{
  "message": "You are not allowed"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "User is not found"
}
```

### PUT /users/:id
> Put user by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
}
```

**Request Body**

```json
{
  "full_name": "String",
  "phone_number": "String",
}
```

**Response (200 - Ok)**
```json
{
  "message": "Success update the user"
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Name is required"
}
OR
{
  "message": "Mobile phone is required"
}
OR
{
  "message": "Maximum mobile number is 15"
}
OR
{
  "message": "Failed to create history"
}

```

**Response (404 - Not Found)**
```json
{
  "message": "User is not found"
}
```

### PATCH /users/:id
> PATCH user by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
}
```

**Request Body**

```json
{
  "full_name": "String",
  "phone_number": "String",
}
```

**Response (200 - Ok)**
```json
{
  "message": "Success update the user" 
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Name is required"
}
OR
{
  "message": "Mobile phone is required"
}
OR
{
  "message": "Maximum mobile number is 15"
}
OR
{
  "message": "Failed to create history"
}

```

**Response (404 - Not Found)**
```json
{
  "message": "User is not found"
}
```


### DELETE /users/:id
> Delete user by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
}
```

**Request Body**

```json
not needed
```

**Response (200 - Ok)**
```json
{
  "message": "Success delete the User"
}
```

**Response (400 - Bad Request)**
```json

{
  "message": "Failed to create history"
}

```

**Response (404 - Not Found)**
```json
{
  "message": "User is not found"
}
```


### POST /activation/:id
> Send activation link by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
}
```

**Request Body**

```
not needed
```

**Response (200 - Ok)**
```json
{
  "message": "Activation link has been sent to your email"
}
```


**Response (400 - Bad Request)**
```json
{
  "message": "OTP was not sent successfully"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "User is not found"
}
```

### PATCH /approve-user/:id/:token
> Send activation link by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)",
  "token": "string (required)"
}
```

**Request Body**

```
not needed
```

**Response (200 - Ok)**
```json
{
  "message": "User has been approved.",
  "id": "Integer"
}
```


### PATCH /create-password/:id
> Patch create password

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
}
```

**Request Body**

```
not needed
```

**Response (200 - Ok)**
```json
{
  "message": "Password registered. You can login now.",
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Password not match"
}
```


### POST /user-groups
> Create user group

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Body**
```json
{
  "role_id": "integer (required)"
  "privilege_id": "integer (required)"
}
```


**Response (201 - Ok)**
```json
{
  "message": "User Group has been added",
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Failed to create history"
}

```

**Response (404 - Not Found)**
```json
{
  "message": "Role is not found"
}
OR
{
   "message": "Privilege is not found"
}
```

===================!!
### GET /user-groups
> Get all user group

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Body**
```
not needed
```


**Response (200 - Ok)**
```json
{

}
```

**Response (404 - Not Found)**
```json
{
  "message": "User Group is not found"
}
```
===================!!


===================!!
### GET /user-groups/:id
> Get user group by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
 }
```


**Request Body**
```
not needed
```


**Response (200 - Ok)**
```json
{

}
```

**Response (404 - Not Found)**
```json
{
  "message": "User Group is not found"
}
```


### PUT /user-groups/:id
> Put user group by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
 }
```


**Request Body**
```
not needed
```


**Response (200 - Ok)**
```json
{
  "message": "Everything is already uptodated"
}
OR
{
  "message": "User Group with id <id> has been updated"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "User Group is not found"
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Failed to create history"
}

```

### DELETE /user-groups/:id
> Delete user group by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```js
{
  "id": "integer (required)"
}
```


**Request Body**
```
not needed
```


**Response (200 - Ok)**
```json
{
  "message": "User Group with id <id> has been deleted"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "User Group is not found"
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Failed to create history"
}

```

### POST /roles
> Create role

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```
not needed
```


**Request Body**
```js
{
  "name": "String"
  "description": "String"
}
```

**Response (200 - Ok)**
```json
{
  "id": "Integer",
  "name": "String",
  "description": "String",
}
```

**Response (404 - Not Found)**
```json
{
  "message": "User Group is not found"
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Failed to create history"
}
OR
{
  "message": "Role name must be unique"
}
OR
{
  "message": "Role name can't be empty"
}
OR
{
  "message": "Role description can't be empty"
}

```


======================!!
### GET /roles
> Get all roles

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```
not needed
```


**Request Body**
```
not needed
```

**Response (200 - Ok)**
```


```

**Response (404 - Not Found)**
```json
{
  "message": "Role is not found"
}
```
======================!!

======================!!

### GET /roles/:id
> Get role by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
}
```

**Request Body**
```
not needed
```

**Response (200 - Ok)**
```


```

**Response (404 - Not Found)**
```json
{
  "message": "Role is not found"
}
```

======================!!

### PUT /roles/:id
> Put role by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
}
```

**Request Body**
```json
{
  "name": "String",
  "description": "String"
}

```

**Response (200 - Ok)**
```json
{
  "message": "Everything is already uptodated"
}
OR
{
  "message": "Role with id <id> has been updated"
}

```

**Response (404 - Not Found)**
```json
{
  "message": "Role is not found"
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Failed to create history"
}
```


### DELETE /roles/:id
> Delete role by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
}
```

**Request Body**
```
not needed

```

**Response (200 - Ok)**
```json
{
  "message": "Role with id <id> has been deleted"
}

```

**Response (404 - Not Found)**
```json
{
  "message": "Role is not found"
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Failed to create history"
}
```


### POST /privileges
> Create privileges

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```
not needed
```

**Request Body**
```json

{
  "name": "String"
}

```

**Response (201 - Created)**
```json
{
  "id": "Integer",
  "name": "String"
}

```

**Response (400 - Bad Request)**
```json
{
  "message": "Failed to create history"
}
OR
{
  "message": "Privilege name must be unique"
}
OR
{
  "message": "Privilege name can't be empty"
}
```

==========================!!
### GET /privileges
> Get all privileges

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```
not needed
```

**Request Body**
```
not needed

```

**Response (200 - Ok)**
```json
[

]

```
==========================!!

==========================!!

### GET /privileges/:id
> Get privileges by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
}
```

**Request Body**
```
not needed

```

**Response (200 - Ok)**
```
{

}

```

**Response (404 - Not Found)**
```json
{
  "message": "Privilege is not found"
}
```
==========================!!

### DELETE /privileges/:id
> Delete privilege by id

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```json
{
  "id": "integer (required)"
 }
```


**Request Body**
```
not needed
```


**Response (200 - Ok)**
```json
{
  "message": "Privilege has been deleted"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "Privilege is not found"
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Failed to create history"
}

```


### GET /provinces
> GET all provinces

**Request Headers**
```
not needed
```

**Request Params**
```
not needed
```


**Request Body**
```
not needed
```


**Response (200 - Ok)**
```json
[
  {
        "id": "Integer",
        "name": "String",
        "created_at": "String",
        "updated_at": "String",
        "deleted_at": "String",
        "Cities": [
            {
                "id": "Integer",
                "name": "String",
                "province_id": "Integer",
                "created_at": "String",
                "updated_at": "String",
                "deleted_at": "Integer"
            },
        ]
  }
]
```


### GET /histories
> Get all histories

**Request Headers**
```json
{
  "access_token": "string"
}
```

**Request Params**
```
not needed
```


**Request Body**
```
not needed
```


**Response (200 - Ok)**
```json
[
    {
        "id": "Integer",
        "entity_name": "String",
        "description": "String",
        "entity_id": "Integer",
        "user_id": "Integer",
        "createdAt": "String",
        "updatedAt": "String"
    }
]
```


### GET /categories
> Get all categories non tenant

**Request Headers**
```
not needed
```

**Request Params**
```
not needed
```


**Request Body**
```
not needed
```


**Response (200 - Ok)**
```json
[
    {
        "id": "Integer",
        "name": "String",
        "description": "String",
        "is_tenant_category": "Boolean",
        "created_by": "String",
        "parent_id": "Integer",
        "created_at": "String",
        "updated_at": "String",
        "deleted_at": "String",
        "sub_category": [
            {
                "id": "Integer",
                "name": "String",
                "description": "String",
                "is_tenant_category": "Boolean",
                "created_by": "String",
                "parent_id": "Integer",
                "created_at": "String",
                "updated_at": "String",
                "deleted_at": "String"
            },
        ]
    }
]
```

### POST /categories
> Post category non tenant

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
  "name": "String",
  "description": "String"
}
```


**Response (200 - Ok)**
```json
{
  "name": "String",
  "description": "String",
  "created_by": "String",
  "is_tenant_category": "Boolean",
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Description is required",
}
OR
{
  "message": "Name is required"
}
```


### PUT /categories/:id
> Put category non tenant by id

**Request Headers**
```
not needed
```

**Request Params**
```json
{
  "id": "integer (required)"
}
```


**Request Body**
```json
{
  "name": "String",
  "description": "String"
}
```


**Response (200 - Ok)**
```json
{
  "name": "String",
  "description": "String",
  "created_by": "String",
  "is_tenant_category": "Boolean",
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Description is required",
}
OR
{
  "message": "Name is required"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "Category is not found",
}

```



### GET /categories/tenant
> Get all categories tenant

**Request Headers**
```
not needed
```

**Request Params**
```
not needed
```


**Request Body**
```
not needed
```


**Response (200 - Ok)**
```json
[
    {
        "id": "String",
        "name": "String",
        "description": "String",
        "is_tenant_category": "Boolean",
        "created_by": "String",
        "parent_id": "Integer",
        "created_at": "String",
        "updated_at": "String",
        "deleted_at": "String"
    },
]
```


### POST /categories/tenant
> Post category tenant

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
  "name": "String"
}
```

**Response (201 - Ok)**
```json
{
  "name": "String",
  "is_tenant_category": true,
  "created_by": "String",
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Name is required"
}
```



### PUT /categories/tenant:id
> Put category tenant by id

**Request Headers**
```
not needed
```

**Request Params**
```json
{
  "id": "integer (required)",
}
```


**Request Body**
```json
{
   "name": "String",
}
```


**Response (200 - Ok)**
```json
{
  "name": "String",
  "is_tenant_category": true,
  "created_by": "String",
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Name is required"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "Category is not found"
}
```


### POST /categories/sub/:category_id
> Create sub category by id

**Request Headers**
```
not needed
```

**Request Params**
```json
{
  "category_id": "integer (required)",
}
```


**Request Body**
```json
{
   "name": "String",
}
```


**Response (201 - Ok)**
```json
{
  "name": "String",
  "created_by": "String",
  "parent_id": "Integer",
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Name is required"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "Category is not found"
}
```



### PUT /categories/sub/:id
> Put sub category by id

**Request Headers**
```
not needed
```

**Request Params**
```json
{
  "id": "integer (required)",
}
```


**Request Body**
```json
{
   "name": "String",
   "parent_id": "Integer",
}
```


**Response (200 - Ok)**
```json
{
  "name": "String",
  "created_by": "String",
  "parent_id": "Integer",
}
```

**Response (400 - Bad Request)**
```json
{
  "message": "Name is required"
}
```

**Response (404 - Not Found)**
```json
{
  "message": "Sub Category is not found"
}
OR
{
  "message": "Category is not found"
}
```

### GET /categories/:id
> Get category by id

**Request Headers**
```
not needed
```

**Request Params**
```json
{
  "id": "integer (required)",
}
```

**Request Body**
```
not needed
```

**Response (200 - Ok)**
```json
[
  {
    "id": "Integer",
    "name": "String",
    "description": "String",
    "is_tenant_category": "Boolean",
    "created_by": "String",
    "parent_id": "Integer",
    "created_at": "String",
    "updated_at": "String",
    "deleted_at": "String",
    "sub_category": [
        {
            "id": "Integer",
            "name": "String",
            "description": "String",
            "is_tenant_category": "Boolean",
            "created_by": "String",
            "parent_id": "Integer",
            "created_at": "String",
            "updated_at": "String",
            "deleted_at": "String"
        },
    ]
  }
]
```

**Response (404 - Not Found)**
```json
{
  "message": "Category is not found"
}
```


### DELETE /categories/:id
> Get category by id

**Request Headers**
```
not needed
```

**Request Params**
```json
{
  "id": "integer (required)",
}
```

**Request Body**
```
not needed
```

**Response (200 - Ok)**
```json
{
  "message": "Category with id <id> has been deleted"
}

```

**Response (404 - Not Found)**
```json
{
  "message": "Category is not found"
}
```















## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```