define({ "api": [  {    "type": "post",    "url": "https://replate-lambda.herokuapp.com/auth/login",    "title": "User Login",    "group": "Authentication",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "200 OK\n{\n \"message\": \"Welcome, Mr Super Cool!\",\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6InN1cGVyY29vbHVzZXIiLCJ1c2VyVHlwZSI6InZvbHVudGVlciIsImlhdCI6MTU1ODQ3NzE3NCwiZXhwIjoxNTU4NDgwNzc0fQ.E66jW9zo9-NYrUJO2GZ8MBjDodINBraIkhj3jyhypOs\"\n}",          "type": "Array"        }      ]    },    "version": "0.0.0",    "filename": "api/api-routes.js",    "groupTitle": "Authentication",    "name": "PostHttpsReplateLambdaHerokuappComAuthLogin"  },  {    "type": "post",    "url": "https://replate-lambda.herokuapp.com/auth/register",    "title": "New User Registration",    "group": "Authentication",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "integer",            "optional": false,            "field": "id",            "description": "<p>Automatically Increments</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "username",            "description": "<p>User must create username on account creation.  Required.</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "password",            "description": "<p>User must create password on account creation.  Returns hashed.  Required.</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "business_name",            "description": "<p>User can provide Business Name on account creation, if they're a business.  Not Required since volunteers will not have a business name.</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "contact_name",            "description": "<p>User must provide a contact name on account creation.  Required.</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "address",            "description": "<p>User can provide an address on account creation, if they're a business.  Not Required since volunteers will not need to provide an address.</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "phone",            "description": "<p>User must provide a phone number on account creation.  Required.</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "jsonwebtoken",            "description": "<p>Will be returned by backend upon account creation.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": " 201 Created\n{\n \"id\": 4,\n \"username\": \"supercooluser\",\n \"password\": \"$2a$11$ilL/S6eCqUv8W.hGds.TVuMvph/gH7WuXjxjgz5ZRQTxCSyvidtDS\",\n \"business_name\": null,\n \"contact_name\": \"Mr Super Cool\",\n \"address\": null,\n \"email\": \"scu@test.com\",\n \"phone\": \"505-888-4345\",\n \"user_type\": \"volunteer\",\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN1cGVyY29vbHVzZXIiLCJ1c2VyVHlwZSI6InZvbHVudGVlciIsImlhdCI6MTU1ODQ3NjQxNCwiZXhwIjoxNTU4NDgwMDE0fQ.wsQs7k_aHPzQJwbTzS4BfkEgBvvl6Yq1lF5uzgsJrds\"\n}",          "type": "Array"        }      ]    },    "version": "0.0.0",    "filename": "api/api-routes.js",    "groupTitle": "Authentication",    "name": "PostHttpsReplateLambdaHerokuappComAuthRegister"  },  {    "type": "get",    "url": "https://replate-lambda.herokuapp.com/requests",    "title": "GET > all Requests, restricted",    "group": "Requests",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "Requests",            "description": "<p>List of Requests</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": " 200 OK\n{\n  \"id\": 1,\n  \"request_title\": \"Soup and sandwiches, pasta, and salad.\",\n  \"request_desc\": \"Extra tomato soup, vegetable beef soup.  Various sandwiches.  Extra fettucini/alfredo and spaghetti\",\n  \"volunteer_assigned\": \"\",\n  \"business_requesting\": \"2\",\n  \"completed\": 1,\n  \"request_expires_date\": \"2019-05-21\",\n  \"request_expires_time\": \"19:45:00\"\n},\n{\n  \"id\": 3,\n  \"request_title\": \"A lot of stuff from dinner service\",\n  \"request_desc\": \"different ingredients and stuff from dinner\",\n  \"volunteer_assigned\": \"2\",\n  \"business_requesting\": \"3\",\n  \"completed\": 1,\n  \"request_expires_date\": \"2019-05-21\",\n  \"request_expires_time\": \"22:30:00\"\n}",          "type": "Array"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "401",            "description": "<p>User Not Authorized to Get Requests</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "401 Not Authorized\n{\n  \"message\": \"Please log in to continue\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/api-routes.js",    "groupTitle": "Requests",    "name": "GetHttpsReplateLambdaHerokuappComRequests"  },  {    "type": "get",    "url": "https://replate-lambda.herokuapp.com/requests/3",    "title": "Requests by ID, restricted",    "group": "Requests",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "integer",            "optional": false,            "field": "id",            "description": "<p>Automatically Increments</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "request_title",            "description": "<p>Title of request, submitted by business.  Field required.</p>"          },          {            "group": "Success 200",            "type": "string",            "optional": false,            "field": "request_desc",            "description": "<p>Description of request, submitted by business.  Field required.</p>"          },          {            "group": "Success 200",            "type": "boolean",            "optional": false,            "field": "completed",            "description": "<p>Indicates if request has been completed by assigned volunteer.  Required.</p>"          },          {            "group": "Success 200",            "type": "date",            "optional": false,            "field": "request_expires_date",            "description": "<p>Allows business to indicate date request will expire.</p>"          },          {            "group": "Success 200",            "type": "time",            "optional": false,            "field": "request_expires_time",            "description": "<p>Allows business to indicate time request will expire.</p>"          },          {            "group": "Success 200",            "type": "integer",            "optional": false,            "field": "volunteer_assigned",            "description": "<p>Indicates which volunteer is assigned, by ID, if a volunteer has claimed the request.</p>"          },          {            "group": "Success 200",            "type": "integer",            "optional": false,            "field": "business_requesting",            "description": "<p>Indicates which business has submitted request, by ID.  Required.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "  200 OK\n{\n \"id\": 3,\n \"request_title\": \"A lot of stuff from dinner service\",\n \"request_desc\": \"different ingredients and stuff from dinner\",\n \"completed\": 1,\n \"request_expires_date\": \"2019-05-21\",\n\"request_expires_time\": \"22:30:00\",\n\"volunteer_assigned\": \"2\",\n\"business_requesting\": \"3\"\n}",          "type": "Object"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "401",            "description": "<p>User Not Authorized to Get Request</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "401 Not Authorized\n{\n  \"message\": \"Please log in to continue\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/api-routes.js",    "groupTitle": "Requests",    "name": "GetHttpsReplateLambdaHerokuappComRequests3"  },  {    "type": "get",    "url": "https://replate-lambda.herokuapp.com/users",    "title": "GET > all Users, restricted",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "Users",            "description": "<p>List of Users</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": " 200 OK\n{\n  \"id\": 1,\n  \"username\": \"abqdennys\",\n  \"password\": \"test\",\n  \"business_name\": \"Dennys\",\n  \"contact_name\": \"Penny\",\n  \"email\": \"abq_dennys@test.com\",\n  \"phone\": \"505-123-4567\",\n  \"address\": \"123 Adobe Lane NW, Albuquerque, NM 87114\",\n  \"user_type\": \"business\"\n},\n{\n  \"id\": 3,\n  \"username\": \"newvolunteer\",\n  \"password\": \"$2a$11$SA94u9pLFUzinyHvKxWHY.5JzSOe8WFl3WW6apSwf6lRYnGz5DU2S\",\n  \"business_name\": null,\n  \"contact_name\": \"Awesome Volunteer\",\n  \"email\": \"av@test.com\",\n  \"phone\": \"505-323-4345\",\n  \"address\": null,\n  \"user_type\": \"volunteer\"\n}",          "type": "Array"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "401",            "description": "<p>User Not Authorized to Get Users</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "401 Not Authorized\n{\n  \"message\": \"Please log in to continue\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/api-routes.js",    "groupTitle": "Users",    "name": "GetHttpsReplateLambdaHerokuappComUsers"  },  {    "type": "get",    "url": "https://replate-lambda.herokuapp.com/users/3",    "title": "GET > Users by ID, restricted",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "Requests",            "description": "<p>Returns Users by ID</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "  200 OK\n{\n\"id\": 1,\n \"username\": \"abqdennys\",\n \"password\": \"test\",\n \"business_name\": \"Dennys\",\n \"contact_name\": \"Penny\",\n \"address\": \"123 Adobe Lane NW, Albuquerque, NM 87114\",\n \"email\": \"abq_dennys@test.com\",\n \"phone\": \"505-123-4567\",\n \"user_type\": \"business\"\n}",          "type": "Array"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "401",            "description": "<p>User Not Authorized to Get User</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "401 Not Authorized\n{\n  \"message\": \"Please log in to continue\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/api-routes.js",    "groupTitle": "Users",    "name": "GetHttpsReplateLambdaHerokuappComUsers3"  }] });
