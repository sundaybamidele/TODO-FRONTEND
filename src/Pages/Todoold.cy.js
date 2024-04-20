import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import Todo from './Todo'
import "bootstrap/dist/css/bootstrap.min.css";



// cypress/integration/todo_spec.js


// cypress/integration/todo_spec.js

describe('Todo Component Tests', () => {
  it('should fetch and display todos from the API', () => {
    // Visit the page containing the Todo component
    cy.visit('/todo'); // Adjust the URL if necessary

    // Intercept the API request and provide mock data
    cy.intercept('GET', 'http://127.0.0.1:8000/api/todo', { fixture: 'todos.json' }).as('getTodos');

    // Check if the todo list is initially empty
    cy.get('.table tbody tr').should('not.exist');

    // Wait for the API call to complete and the data to be rendered
    cy.wait('@getTodos');

    // Check if todos are rendered correctly
    cy.get('.table tbody tr').should('have.length', 3); // Assuming there are 3 todos in the fixture data
  });

  // Add more test cases as needed...
});






















describe('<Todo />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
      <Todo />
    </BrowserRouter>
    )
  })
})