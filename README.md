# Project Manager!

# Description

This is the project made for the second independent project for Moringa School done

It has an user-project domain with this ERD:



The app is set to meet the following deliverables:

- Users should be able to register / login to the application.

- A user should be able to create a project and add details about it.

- A user should be able to add other users as members of the project.

- Members of a project should be able to update the status of the project.

- A user should  be able to view all the projects.

- A user should be able delete a project.

- A user should be able to view all the status updates of the project.

- In order to use the application, the user must be logged in.

## Project Setup

In order for you to use the content on this repo ensure you have the following:

- A computer that runs on Linux
- Ruby installed
- Any text editor such as VSCode installed

## Instructions

- Open a terminal on your computer
- Clone the repo by using the following:

        git clone https://github.com/ianrich69420/phase-3-independent-project.git

- Clone the Sinatra Backend by using the following:

        git clone https://github.com/ianrich69420/phase-3-sinatra-react-project.git

- After the repositories have been cloned succesfully change directory to the backend repository folder:

        cd phase-3-sinatra-react-project

- Open it in a text editor of your choice, however I personally prefer using VSCode so in order to open the folder in VSCode do the following:

        code .

You can use the following steps to run the app:

- Install required dependencies

        bundle install  

- Test out the domain by:

- Migrating the tables to a development database

        bundle exec rake db:migrate

- Run the server

        bundle exec rake server

- Open a new terminal and Change to previous directory

        cd ..

- Change directory to the frontend repository folder

        cd phase-3-independent-project

- Install required dependencies

        npm install

- Run the app

        npm start

## Author
This project was contributed to by:
- [Ian Richard Orieko](https://github.com/ianrich69420/)
