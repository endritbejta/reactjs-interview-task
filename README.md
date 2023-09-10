# Flex Business Solutions Tech Test - Notes app

In Flex Business Solutions, we aim to provide excellence and efficiency on all our lines of code in order to support the day-to-day activities of the company using our software solutions. In this task, you will be provided with a simple design of an app, fetching a list of products from an external source and allowing the user to search or filter among the list.

### Tech Test Overview

We have provided below the Figma link of this task. On the main page,

[FIGMA] [https://www.figma.com/file/T6hUVUDh5ihoYwQILcJDcf/React-Home-Test?type=design&node-id=0%3A1&mode=design&t=lOTjaPb3chxGqXkY-1]

We love to see:

- Functional code
- Good design
- Unit testing

### Notes

All of you work should take place inside this repository.

You are free to use any packages that would help with this task

You do not need to add additional security measures as part of this exercise.
We're interested in how you break down the work and build your solution in a clean, easy-to-use, reusable and testable manner.

## Deliverables

You must follow the Figma design and need to add the functionality of:
a) Create new notes
c) Show all notes
b) Search notes

**Create a folder inside the repository and include finished screenshots of the app.**
**Please make sure to update the readme with**:

- How to run your app with all the necessary details

**_HOW TO RUN APP_**

**Check for npm Installation:**
Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your machine.
If npm is not installed, you can download and install it by following the instructions on the official Node.js website: https://nodejs.org/

**Install Dependencies:**
Navigate to the project directory in your terminal and run the following command to install the dependencies listed in your package.json file:
npm install

**Run the App:**
To start your React app, run the following command:
npm start
This will start a development server and open your app in a web browser. By default, the app should be accessible at http://localhost:3000.

**View the App:**
Open your web browser and go to http://localhost:3000 (or the appropriate URL if it's different from the default).

**Stopping the Development Server:**
To stop the development server and terminate the app, you can press Ctrl + C in your terminal.

- Relating to the task please add answers to the following questions;

  1. How might you make this app more secure?

  - Authentication and Authorization:
    Implement user authentication to ensure that only authorized users can access and modify their notes.
    Define access controls and roles to restrict certain actions to specific users or roles. For example, only allow note deletion by the note owner.
  - HTTPS:
    Serve your app over HTTPS to encrypt data transmitted between the client and server, protecting it from eavesdropping and man-in-the-middle attacks.
  - Input Validation:
    Implement client-side input validation to catch and handle common errors before sending data to the server.

  2. How would you make this solution scale to millions of records?

  - Database and Backend (Future Considerations):

    Although we're currently using dummy data, it's important to acknowledge that scaling to millions of records usually involves backend and database optimizations.
    In the future, transitioning to a real backend with a proper database setup will be necessary to handle large datasets effectively. We can consider implementing features like pagination, filtering, and indexing on the server-side to efficiently query and serve data.
