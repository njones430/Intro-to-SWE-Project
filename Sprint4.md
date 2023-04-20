Sprint 4
-

Work that we've completed for Sprint 4:

- Implemented new Rest-style API for data
- Recreated API documentation for new API
- Added functionality for "log-out" button
- Retooled navigation for website (back/forward buttons)
- Finalized Google account login functionality

Frontend/Cypress Unit Tests:

- Test to check if email is used as a proper key to access information upon login
- Test to ensure that users can logout and login as a different user

Backend Unit Tests:

- 

Backend Documentation:

Overview
-
- The API that we have chosen to use in our backend for the Student Saver project is a custom Rest-style API that our team made for this project. This API grants our backend access to a number of different functions that will allow students to use our project to effectively budget their various financial commitments and responsibiliities. In this documentation, we will elaborate on the inner workings of a budget in this API and the functions that allow the backend to serve a student's financial needs.

The Budget
-
In this project's API, a budget is a configurable object that tracks various pieces of information regarding the money a user is spending on a certain product.

JSON representation:
{
  type Budget struct {
	Name         string `json:"name"`
	Tuition      string `json:"address"`
	Rent         string `json:"rent"`
	Textbookcost string `json:"textbookcost"`
	Payrate      string `json:"payrate"`
	Grant        string `json:"grant"`
  }
}

The budget has several variables within its scope to track said informtaion:
- Name: a string that contains the internal name of the budget
- Tuition: a string that contains the amount of the budget that the student has dedicated to paying for tuition.
- Rent: a string that contains the amount of the budget that the student has dedicated to paying for rent.
- Textbookcost: a string that contains the amount of the budget that the student has dedicated to paying for textbooks.
- Payrate: a string that contains the amount of money that the student is being paid for their job if they have one.
- Grant: a string that contains the amount of money that they are being paid via a scholarship or.
    
Functions
-
The API contains four distinct functions: create, delete, get, and edit. Each of these functions has an outlined JSON representation and internal variables which are elaborated on below.

- create: creates a new budget 
  - Path parameters: parent (a string that contains the name of the account that the budget is created in)

  JSON representation:
  {
  "category": {
    "name": "string"
  },
  "name": "budget",
  "tags": [
    {
      "name": "string"
    }
  ],
}
  }
    - name: the name of the new budget being created
  
  get function codes:
- Error code 405: "Invalid input"

- delete: deletes an existing budget

  JSON representation: request body is empty, response body contains the budget being returned
  
  delete function codes:
- Error code 404: "Budget not found"
  
- get: returns an existing budget
  - Path parameters: parent (a string that contains the name of the account that the budget is deleted in)

  JSON representation: 
  [
  {
    "category": {
      "name": "string"
    },
    "name": "budget",
    "tags": [
      {
        "name": "string"
      }
    ],
  }
 ]
   - name: a string containing the name of the budget that needs to be returned.
 
 get function codes:
- Code 200: Successful operation
- Error code 404: "Budget not found"
  
- edit: updates the budget and returns it after the changes are made
  
  JSON representation:
{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "budget,
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
}
- name: a string that specifies which budget needs to be updated

  get function codes:
- Error code 404: "Budget not found"
- Error code 405: "Validation not found"

**Project API documentation was created with SwaggerHub's OPENAPI official documentation as a resource (apps.swaggerhub.com)


