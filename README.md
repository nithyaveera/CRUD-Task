# Employee Directory App

`Front-end Deployed URL` => https://employee-directory-app-task.netlify.app/

Welcome to the Employee Directory App! This application allows you to manage employee details using `CRUD `operations.

## Features

- Display a list of employees from a mock API.
- Navigate between the Employee Directory and Create Employee pages.
- Create new employee records with a dedicated form.
- Edit existing employee details with a form pre-populated with current data.
- Delete employee records.

## Usage

+ Employee Directory:
  - Click on the "Employee Directory" button in the navigation to view a list of employees.
  - Edit or delete employee details by clicking on the corresponding buttons.
  
+ Create Employee:
  - Click on the "Create" button in the Employee Directory to navigate to the Create Employee page.
  - Fill out the form to add a new employee.

## Technologies Used

+ React
+ Axios (for API calls)
+ Mock API (for simulating backend operations)
+ react-router-dom
  
## API Endpoints

 - GET /employees: Retrieve the list of employees.
 - POST /employees: Add a new employee.
 - PUT /employees/:id: Update employee details.
 - DELETE /employees/:id: Delete an employee.
