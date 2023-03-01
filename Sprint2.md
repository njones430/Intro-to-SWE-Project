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
The budget has several variables within its scope to track said informtaion:
- name: a string that contains the internal name of the budget
- displayName: a string that contains the UI display name of the budget
- budgetFilter
-   
- amount: an object that contains the amount of money allocated to the budget
- thresholdRules[]
- allUpdatesRule
- etag

Functions
-



