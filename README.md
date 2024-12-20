# Overview - F24-01Pet Shelter

This project is a Pet Shelter Management System built with a PostgreSQL database, Flask backend, and a React frontend. This application is containerized using Docker and is managed with `docker-compose`. Adminer is included for database management.

# Prerequisites
Ensure you have the following installed:
* Docker
* Docker Compose

# Setup and Running the Application
Ensure that you have the repository on your local machine, fully unzipped. You also must ensure the following ports are open and not being used by any other applications on your machine. The corresponding URLs allow you to access the each part of the application.

| Service          | URL                   | Port |
| ---------------- | --------------------- | ---- |
| PostgreSQL       | Internal Only         | 5433 |
| Flask (Backend)  | http://localhost:5001 | 5001 |
| React (Frontend) | http://localhost:3000 | 3000 |
| Adminer          | http://localhost:8081 | 8081 |

## Step 1: Build the Application
Run the following command to build and start all services:

```docker-compose up --build```

This command will pull the necessary Docker images (i.e PostgreSQL, Flask, etc.) and initialize the application. Once this runs, `Ctrl-C` to exit the build step.

## Step 2: Start the Application
Start the application:

```docker-compose up```

To access the website, go to http://localhost:3000. 

# Database Management

1. Open your browser and navigate to http://localhost:8081
2. Log in with the following:
   * System: PostgreSQL
   * Server: postgres
   * Username: `user`
   * Password: `password`
   * Database: `pet_shelter`

Now you should be able to view all tables in the database or add new data as you wish through the Adminer console.

# Teardown
If you need to restart the application from scratch you can run the following commands.
1. `docker-compose down`  - stops and removes containers
2. `docker volume rm fa24-01-pet-shelter_postgres_data` - deletes the PostgreSQL volume, deleting the entire database

You can follow the steps above to setup and run the application again at this point.

# Sample Logins

For the admin view on the webiste:
* username: `admin`
* password: `123`

For the user view:
* username: `johndoe@example.com`
* password: `password` 

If you would like to see other user views, please refer to the `02_dummy_data.sql` file under `init/sql_scripts` or via the Adminer console. There you can see the other email/usernames to login as a different user. All of the default passwords for these users are `password`.