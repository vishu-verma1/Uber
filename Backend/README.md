# User Registration Endpoint

## Endpoint
`POST /register`

## Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

## Request Body
The request body should be a JSON object containing the following fields:

- `fullname.firstname` (string): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string): The email address of the user. Must be a valid email format.
- `password` (string): The password for the user account. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code:** 201 Created
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      // ...other user fields...
    }
  }
  ```

### Validation Errors
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```
# User Login Endpoint

## Endpoint
`POST /login`

## Description
This endpoint is used to log in an existing user. It requires the user's email and password.

## Request Body
The request body should be a JSON object containing the following fields:

- `email` (string): The email address of the user. Must be a valid email format.
- `password` (string): The password for the user account. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      // ...other user fields...
    }
  }
  ```

### Validation Errors
- **Status Code:** 400 Bad Request
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

### Authentication Errors
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Invalid email and password"
  }
  ```



# User Logout Endpoint

## Endpoint
`GET /logout`

## Description
This endpoint is used to log out the currently authenticated user.

## Responses

### Success
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "message": "Logged Out"
  }
  ```

### Authentication Errors
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```


# User Profile Endpoint

## Endpoint
`GET /profile`

## Description
This endpoint is used to get the profile of the currently authenticated user.

## Responses

### Success
- **Status Code:** 200 OK
- **Response Body:**
  ```json
  {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    // ...other user fields...
  }
  ```

### Authentication Errors
- **Status Code:** 401 Unauthorized
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```
