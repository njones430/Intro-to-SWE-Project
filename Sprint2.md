Sprint 2
-

Work that we've completed for Sprint 2:
- Creating a new budget
- Linked our React Login page with Google's SSO via Oauth 
- Implemented functionality between frontend and backend

Frontend Unit Tests:

Frontend Cypress Tests: 
- Tested if button contains desired text 
- Clicking a button twice
- Filling out a basic form (an email and password)

Backend Unit Tests:

Backend Documentation:

Overview
-
- The API that we have chosen to use in our backend for the Student Saver project is a Rest API from Google titled the Cloud Billing Budget API. This API grants our backend access to a number of different functions that will allow students to use our project to effectively budget their various financial commitments and responsibiliities. In this documentation, we will elaborate on the inner workings of a budget in this API and the functions that allow the backend to serve a student's financial needs.

The Budget
-
In this project's API, a budget is a configurable object that tracks various pieces of information regarding the money a user is spending on a certain product.

JSON representation:
{
  "name": string,
  "displayName": string,
  "budgetFilter": {
    object (Filter)
  },
  "amount": {
    object (BudgetAmount)
  },
  "thresholdRules": [
    {
      object (ThresholdRule)
    }
  ],
  "allUpdatesRule": {
    object (AllUpdatesRule)
  },
  "etag": string
}

The budget has several variables within its scope to track said informtaion:
- name: a string that contains the internal name of the budget
- displayName: a string that contains the UI display name of the budget
- budgetFilter: an object that specifies which limiters should be applied to the budget to calculate the desired budget amount (ex: projects, services, time periods)
    The budgetFilter contains variables that resemble the different limiters which are placed on the budget to calculate the desired amount:
    
    JSON representation:
    {
  "projects": [
    string
  ],
  "creditTypes": [
    string
  ],
  "creditTypesTreatment": enum (CreditTypesTreatment),
  "services": [
    string
  ],
  "subaccounts": [
    string
  ],
  "labels": {
    string: array,
    ...
  },

  // Union field usage_period can be only one of the following:
  "calendarPeriod": enum (CalendarPeriod),
  "customPeriod": {
    object (CustomPeriod)
  }
  // End of list of possible types for union field usage_period.
}
    - projects[]: a group of objects which represent the projects for which the budget is being allocated to
    - creditTypes[]: a group of objects that represent the list of credit types that are used to determine the spend for threshold calculations
    - creditTypesTreatment: the enum behavior for the credit types
    - services[]: a group of objects which represent the services for which the budget is being allocated to
    - subaccounts[]: a group of objects which represent the subaccounts for which the budget is being allocated to
    - labels: a key and value pair that ensures that only resources from this specific filter are applied to the budget
- amount: an object that contains the amount of money allocated to the budget
- thresholdRules[]: a group of objects that represent rules which, when broken, alert users that they have surpassed a limit the user has placed on the current budget
- allUpdatesRule: a object that represents rules which are applied to the notifications users recieve about their budget spending and limiters.
- etag: a string that verifies that the budget is unchanged for a read-write-modify operation; if the etag is empty, an update is initiated to overwrite other changes.

Functions
-



