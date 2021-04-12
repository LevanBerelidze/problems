**Problem 2**

- In this problem, your task is to provide an implementation for `AccountService.changeBalance` method
  (in file "src/account.service.ts")

- `changeBalance` method must update the `balance` column of a row of the user by `amount` parameter. However, the update must occur only if the resulting balance is non-negative

- If no update occurs, throw an error
- You can only modify `AccountService.changeBalance` method and use only one call to the database in the solution

<br>

_Before you start solving:_

- Create a MySql database, named `test_db`

- Run commands from `user_balance.sql` (https://github.com/LevanBerelidze/problems/blob/main/problem-2/user_balance.sql)

<br>

_You can solve the problem:_

- Either directly in the database command-line and then paste the command to Codesandbox file

**OR**

- Download the project on your computer

<br>

_To test your solution (if you downloaded the project):_

- Call `(POST) /accounts/:userId/balance?delta=:amount endpoint`

**OR**

- Use a simple HTML page that is rendered when visiting http://localhost:3000/accounts page

<br>

Sandbox link: https://codesandbox.io/s/tender-boyd-e8qht?file=/problem-2-starter/src/account.service.ts
