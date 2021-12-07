# Merchant-CMS

to run the app use:
> npm run dev


How to pull updated org main branch:
> - add new remote origin : `git remote add main-org https://github.com/PeduliLindungi-Merchant-CMS/Merchant-CMS.git`
> - to pull new updated code : `git pull main-org main`

How to merge and pull request your code:
> - git add `<filename-with-full-path>`
> - git commit -m `<your-messages>`
> - git push origin `<main>` or `<your-work-branch>`
> - create PR on github Organization
> - done.


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