Sprint 4
-

Work that we've completed for Sprint 4:

- Implemented new Rest-style API for data
- Added functionality for "log-out" button
- Retooled navigation for website (back/forward buttons)

Sprint 4 Frontend Unit Tests:

Sprint 4 Backend Unit Tests:

Backend Documentation:

Overview
-
- The API that we have chosen to use in our backend for the Student Saver project is a custom Rest-style API that our team made for this project. This API grants our backend access to a number of different functions that will allow students to use our project to effectively budget their various financial commitments and responsibiliities. In this documentation, we will elaborate on the inner workings of a budget in this API and the functions that allow the backend to serve a student's financial needs.

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
    Along with other variables in the budget, the budgetFilter contains objects that resemble the different limiters which are placed on the budget to calculate the desired amount:
    
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
    - creditTypesTreatment: the enum behavior for the credit types that specifies how credits are applied when determining the spend for threshold calculations (Enums: CREDIT_TYPES_TREATMENT_UNSPECIFIED, INCLUDE_ALL_CREDITS, EXCLUDE_ALL_CREDITS, INCLUDE_SPECIFIED_CREDITS)
    - services[]: a group of objects which represent the services for which the budget is being allocated to
    - subaccounts[]: a group of objects which represent the subaccounts for which the budget is being allocated to
    - labels: a key and value pair that ensures that only resources from this specific filter are applied to the budget
    - calendarPeriod: the enum behavior that specifies the start of the time period over which the budget has existed (Enums: CALENDAR_PERIOD_UNSPECIFIED, MONTH, QUARTER, YEAR)
    - customPeriod: an object representing a custom time period over which the budget has existed
    
        JSON representation:
        {
          "startDate": {
          object (Date)
          },
          "endDate": {
          object (Date)
          }
        }     
        The startDate object represents the date on which the budget's time period begins, while the endDate object represents the date on which the budget's           time period ends.
- amount: an object that contains the amount of money allocated to the budget
    
    JSON representation:
    {

  // Union field budget_amount can be only one of the following:
  "specifiedAmount": {
    object (Money)
  },
  "lastPeriodAmount": {
    object (LastPeriodAmount)
  }
  // End of list of possible types for union field budget_amount.
}
    - specifiedAmount: an object that represents the specific amount of money allocated to the budget for total usage
    - lastPeriodAmount: an object thhat represents the specific amount of money allocated to the budget for total usage for the previous calendar period
    
- thresholdRules[]: a group of objects that represent rules which, when broken, alert users that they have surpassed a limit the user has placed on the current budget
    
    JSON representation:
    {
  "thresholdPercent": number,
  "spendBasis": enum (Basis)
    }
    - thresholdPercent: an object representing the budget spending percentage which should trigger an alert when surpassed
    - spendBasis: the enum behavior representing the basis used to determine if the total amount of spending has passed the threshold rule (Enums: BASIS_UNSPECIFIED, CURRENT_SPEND, FORECASTED_SPEND)
   
- allUpdatesRule: a object that represents rules which are applied to the notifications users recieve about their budget spending and limiters.
    
    JSON representation:
    {
  "pubsubTopic": string,
  "schemaVersion": string,
  "monitoringNotificationChannels": [
    string
  ],
  "disableDefaultIamRecipients": boolean
    }
    - pubsubTopic: a string that contains the name of the Pub/Sub topic where budget-related messages will be sent
    - schemaVersion; a string that represents the schema version of the notification sent to a user about budget spending and limiters
    - monitoringNotificationChannels: a group of strings that represents the different selection of channels to send notifications to when a threshold is exceeded
    - disableDefaultIamRecipients: a boolean that disables default notifications sent to Billing Account Administrators and Billing Account Users (IAM) when set to true
    
- etag: a string that verifies that the budget is unchanged for a read-write-modify operation; if the etag is empty, an update is initiated to overwrite other changes.

Functions
-
The API contains five distinct functions: create, delete, get, list and patch. Each of these functions has an outlined JSON representation and internal variables which are elaborated on below.

- create: creates a new budget 
  - Path parameters: parent (a string that contains the name of the account that the budget is created in)

  JSON representation:
  {
  "budget": {
    object (Budget)
    }
  }
    - budget: the new budget being created

- delete: deletes an existing budget; returns successfully if the budget was already deleted
  - Path parameters: parent (a string that contains the name of the account that the budget is deleted in)

  JSON representation: request and response body are empty if deleted successfully
  
- get: returns an existing budget
  - Path parameters: parent (a string that contains the name of the account that the budget is deleted in)

  JSON representation: request body is empty, response body contains the budget being returned
  
- list: returns a list of budgets for a specific billing account
  - Path parameters: parent (a string that contains the name of the account that the list of budgets is derived from)
  - Query parameters: pageSize (an integer that contains the maximum number of budgets to return for each page), pageToken (a string which indicates whether the list is a continuation of the last call of the list function)
 
  JSON representation:
  {
  "budgets": [
    {
      object (Budget)
    }
  ],
  "nextPageToken": string
}
  - budgets[]: a group of objects representing the list of budgets which belong to the billing account being accessed
  - nextPageToken: a string that indicates whether the list is a continuation of a prexisting call of the list function
  
- patch: updates the budget and returns it after the changes are made
  - Path parameters: budget.name (a string that contains the name of the budget being updated)
  
  JSON representation:
  {
  "budget": {
    "name": string,
    "displayName": string,
    "budgetFilter": {
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
    },
    "amount": {

      // Union field budget_amount can be only one of the following:
      "specifiedAmount": {
        object (Money)
      },
      "lastPeriodAmount": {
        object (LastPeriodAmount)
      }
      // End of list of possible types for union field budget_amount.
    },
    "thresholdRules": [
      {
        "thresholdPercent": number,
        "spendBasis": enum (Basis)
      }
    ],
    "allUpdatesRule": {
      "pubsubTopic": string,
      "schemaVersion": string,
      "monitoringNotificationChannels": [
        string
      ],
      "disableDefaultIamRecipients": boolean
    },
    "etag": string
  },
  "updateMask": string
}
- updateMask: a string that specifies which variables in the budget need to be updated
- The other variables present in the scope of patch can be seen documented above in the "The Budget" section

**Project API documentation was created with Google's official documentation on the API as a resource (https://cloud.google.com/billing/docs/reference/budget/rest/)


