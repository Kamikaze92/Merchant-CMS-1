# Merchant-CMS

to run the app use:
> npm run dev

| endpoint                 | sub-enpoin         | Operation
| ------------------------ | ------------------ | --------------------------- |
| /merchants               | /                  | POST, GET                   |
| /merchants               | /:id               | GET, PUT, PATCH, DELETE     |
| /verificators            | /                  | POST, GET                   |
| /verificators            | /:id               | GET, PUT, PATCH, DELETE     |
| /users                   | /                  | POST, GET                   |
| /users                   | /:id               | GET, PUT, PATCH, DELETE     |
| /user-groups             | /                  | POST, GET                   |
| /user-groups             | /:id               | GET, PUT, PATCH, DELETE     |
| /categories              | /                  | POST, GET                   |
| /categories              | /:id               | GET, PUT, PATCH, DELETE     |
| /authentications         | /login             | POST                        |
| /authentications         | /register          | POST                        |
| /authentications         | /forgot-password   | POST, GET                   |
| /check-merchant-status   | /:id               | GET                         |
| /resend-otp              | /:token            | POST                        |