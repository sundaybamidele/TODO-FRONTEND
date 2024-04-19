import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import TodoCreate from './TodoCreate'
import "bootstrap/dist/css/bootstrap.min.css";

describe('TodoCreate Integration Test', () => {
  it('should submit the form with valid data', () => {
    cy.intercept('POST', 'http://127.0.0.1:8000/api/todo', { statusCode: 200, body: { message: 'Todo created successfully' } }).as('postTodo');

    cy.visit('/'); // Assuming the component is rendered within the application

    // Interact with the TodoCreate component
    cy.get('input[name="title"]').type('Test Todo Title');
    cy.get('input[name="description"]').type('Test Todo Description');
    cy.get('input[name="status"]').type('1'); // Assuming you have predefined status values
    cy.get('button').contains('Submit Task').click();

    // Assert that the form submission was successful and the user is navigated to the todo page
    cy.url().should('include', '/todo');
    cy.contains('Todo created successfully').should('be.visible');
  });

  // Add more integration tests as needed
});
