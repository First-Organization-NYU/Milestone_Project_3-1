require('dotenv').config()

export default {

    "development": {
      "username": "postgres",
      "password": "boilerplate",
      "database": "rest_rant_auth",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "test": {
        "username": "postgres",
        "password": "boilerplate",
        "database": "milestone_project_3_test",
        "host": "database-1.cl7hevxpskbr.us-east-1.rds.amazonaws.com",
        "dialect": "postgres"
    },
    "production": {
        "username": "postgres",
        "password": "boilerplate",
        "database": "milestone_project_3_production",
        "host": "database-1.cl7hevxpskbr.us-east-1.rds.amazonaws.com",
        "dialect": "postgres"
    }
  }