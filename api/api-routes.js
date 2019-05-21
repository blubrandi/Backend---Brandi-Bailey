/**
 * @api {post} https://replate-lambda.herokuapp.com/auth/register
 * New User Registration
 * @apiGroup Authentication
 * @apiSuccess {integer} id Automatically Increments
 * @apiSuccess {string} username User must provide username on account creation.  Required.
 * @apiSuccess {string} password User must provide password on account creation.  Returns hashed.  Required.
 * @apiSuccess {string} business_name User can provide Business Name on account creation, if they're a business.  Not Required since volunteers will not have a business name.
 * @apiSuccess {string} contact_name User must provide a contact name on account creation.  Required.
 * @apiSuccess {string} address User can provide an address on account creation, if they're a business.  Not Required since volunteers will not need to provide an address.
 * @apiSuccess {string} phone User must provide a phone number on account creation.  Required.
 * @apiSuccess {string} jsonwebtoken Will be returned by backend upon account creation.
 * @apiSuccessExample {Array} Success-Response:
 *  201 Created
 * {
 *  "id": 4,
 *  "username": "supercooluser",
 *  "password": "$2a$11$ilL/S6eCqUv8W.hGds.TVuMvph/gH7WuXjxjgz5ZRQTxCSyvidtDS",
 *  "business_name": null,
 *  "contact_name": "Mr Super Cool",
 *  "address": null,
 *  "email": "scu@test.com",
 *  "phone": "505-888-4345",
 *  "user_type": "volunteer",
 *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN1cGVyY29vbHVzZXIiLCJ1c2VyVHlwZSI6InZvbHVudGVlciIsImlhdCI6MTU1ODQ3NjQxNCwiZXhwIjoxNTU4NDgwMDE0fQ.wsQs7k_aHPzQJwbTzS4BfkEgBvvl6Yq1lF5uzgsJrds"
 * }
 */

/**
* @api {post} https://replate-lambda.herokuapp.com/auth/login
* User Login
* @apiGroup Authentication
* @apiSuccess {string} username Must be provided upon user login.  Required.
* @apiSuccess {string} password Must be provided upon user login.  Required.
* @apiSuccess {string} message Greeting returned from backend upon successful login.  Welcome + contact_name.
* @apiSuccess {string} jsonwebtoken Will be returned by backend upon successful login.
* @apiSuccessExample {Array} Success-Response:
* 200 OK
* {
*  "message": "Welcome, Mr Super Cool!",
*  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6InN1cGVyY29vbHVzZXIiLCJ1c2VyVHlwZSI6InZvbHVudGVlciIsImlhdCI6MTU1ODQ3NzE3NCwiZXhwIjoxNTU4NDgwNzc0fQ.E66jW9zo9-NYrUJO2GZ8MBjDodINBraIkhj3jyhypOs"
* }
*/

/**
* @api {get} https://replate-lambda.herokuapp.com/requests
* Get All Requests, restricted
* @apiGroup Requests
* @apiSuccess {integer} id Automatically Increments
* @apiSuccess {string} request_title Title of request, submitted by business.  Field required.
* @apiSuccess {string} request_desc Description of request, submitted by business.  Field required.
* @apiSuccess {boolean} completed Indicates if request has been completed by assigned volunteer.  Required.
* @apiSuccess {date} request_expires_date Allows business to indicate date request will expire.
* @apiSuccess {time} request_expires_time Allows business to indicate time request will expire.
* @apiSuccess {integer} volunteer_assigned Indicates which volunteer is assigned, by ID, if a volunteer has claimed the request.
* @apiSuccess {integer} business_requesting Indicates which business has submitted request, by ID.  Required.
* @apiSuccessExample {Array} Success-Response:
*   200 OK
*  {
*    "id": 1,
*    "request_title": "Soup and sandwiches, pasta, and salad.",
*    "request_desc": "Extra tomato soup, vegetable beef soup.  Various sandwiches.  Extra fettucini/alfredo and spaghetti",
*    "volunteer_assigned": "",
*    "business_requesting": "2",
*    "completed": 1,
*    "request_expires_date": "2019-05-21",
*    "request_expires_time": "19:45:00"
*  },
*  {
*    "id": 3,
*    "request_title": "A lot of stuff from dinner service",
*    "request_desc": "different ingredients and stuff from dinner",
*    "volunteer_assigned": "2",
*    "business_requesting": "3",
*    "completed": 1,
*    "request_expires_date": "2019-05-21",
*    "request_expires_time": "22:30:00"
*  }
* @apiError 401 User Not Authorized to Get Requests
* @apiErrorExample Error-Response:
* 401 Not Authorized
* {
*   "message": "Please log in to continue"
* }
**/

/**
* @api {post} https://replate-lambda.herokuapp.com/requests
* Add Request, restricted
* @apiGroup Requests
* @apiSuccess {string} request_title Title of request, submitted by business.  Field required.
* @apiSuccess {string} request_desc Description of request, submitted by business.  Field required.
* @apiSuccess {boolean} completed Indicates if request has been completed by assigned volunteer.  Required.
* @apiSuccess {date} request_expires_date Allows business to indicate date request will expire.
* @apiSuccess {time} request_expires_time Allows business to indicate time request will expire.
* @apiSuccess {integer} volunteer_assigned Indicates which volunteer is assigned, by ID, if a volunteer has claimed the request.
* @apiSuccess {integer} business_requesting Indicates which business has submitted request, by ID.  Required.
* @apiSuccessExample {Array} Success-Response:
*   200 OK
*  {
*    "id": 1,
*    "request_title": "Soup and sandwiches, pasta, and salad.",
*    "request_desc": "Extra tomato soup, vegetable beef soup.  Various sandwiches.  Extra fettucini/alfredo and spaghetti",
*    "volunteer_assigned": "",
*    "business_requesting": "2",
*    "completed": 1,
*    "request_expires_date": "2019-05-21",
*    "request_expires_time": "19:45:00"
*  }
* @apiError 401 User Not Authorized to Get Requests
* @apiErrorExample Error-Response:
* 401 Not Authorized
* {
*   "message": "Please log in to continue"
* }
**/

/**
* @api {get} https://replate-lambda.herokuapp.com/requests/id
* Retrieve Request by ID, restricted
* @apiGroup Requests
* @apiSuccess {integer} id Automatically Increments
* @apiSuccess {string} request_title Title of request, submitted by business.  Field required.
* @apiSuccess {string} request_desc Description of request, submitted by business.  Field required.
* @apiSuccess {boolean} completed Indicates if request has been completed by assigned volunteer.  Required.
* @apiSuccess {date} request_expires_date Allows business to indicate date request will expire.
* @apiSuccess {time} request_expires_time Allows business to indicate time request will expire.
* @apiSuccess {integer} volunteer_assigned Indicates which volunteer is assigned, by ID, if a volunteer has claimed the request.
* @apiSuccess {integer} business_requesting Indicates which business has submitted request, by ID.  Required.
* @apiSuccessExample {Object} Success-Response:
*   200 OK
* {
*  "id": 3,
*  "request_title": "A lot of stuff from dinner service",
*  "request_desc": "different ingredients and stuff from dinner",
*  "completed": 1,
*  "request_expires_date": "2019-05-21",
* "request_expires_time": "22:30:00",
* "volunteer_assigned": "2",
* "business_requesting": "3"
}
* @apiError 401 User Not Authorized to Get Request
* @apiErrorExample Error-Response:
* 401 Not Authorized
* {
*   "message": "Please log in to continue"
* }
**/

/**
* @api {get} https://replate-lambda.herokuapp.com/users GET > all Users, restricted
* @apiGroup Users
* @apiSuccess {Array} Users List of Users
* @apiSuccessExample {Array} Success-Response:
*   200 OK
*  {
*    "id": 1,
*    "username": "abqdennys",
*    "password": "test",
*    "business_name": "Dennys",
*    "contact_name": "Penny",
*    "email": "abq_dennys@test.com",
*    "phone": "505-123-4567",
*    "address": "123 Adobe Lane NW, Albuquerque, NM 87114",
*    "user_type": "business"
*  },
*  {
*    "id": 3,
*    "username": "newvolunteer",
*    "password": "$2a$11$SA94u9pLFUzinyHvKxWHY.5JzSOe8WFl3WW6apSwf6lRYnGz5DU2S",
*    "business_name": null,
*    "contact_name": "Awesome Volunteer",
*    "email": "av@test.com",
*    "phone": "505-323-4345",
*    "address": null,
*    "user_type": "volunteer"
*  }
* @apiError 401 User Not Authorized to Get Users
* @apiErrorExample Error-Response:
* 401 Not Authorized
* {
*   "message": "Please log in to continue"
* }
**/

/**
* @api {get} https://replate-lambda.herokuapp.com/users/3 GET > Users by ID, restricted
* @apiGroup Users
* @apiSuccess {Array} Requests Returns Users by ID
* @apiSuccessExample {Array} Success-Response:
*   200 OK
* {
* "id": 1,
*  "username": "abqdennys",
*  "password": "test",
*  "business_name": "Dennys",
*  "contact_name": "Penny",
*  "address": "123 Adobe Lane NW, Albuquerque, NM 87114",
*  "email": "abq_dennys@test.com",
*  "phone": "505-123-4567",
*  "user_type": "business"
}
* @apiError 401 User Not Authorized to Get User
* @apiErrorExample Error-Response:
* 401 Not Authorized
* {
*   "message": "Please log in to continue"
* }
**/