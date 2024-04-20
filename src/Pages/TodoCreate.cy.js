import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import TodoCreate from './TodoCreate'
import "bootstrap/dist/css/bootstrap.min.css";

describe("<TodoCreate />", () => {
  import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import TodoCreate from './TodoCreate'
import "bootstrap/dist/css/bootstrap.min.css";

describe("<TodoCreate />", () => {
  it("renders", () => {
    cy.mount(
      <BrowserRouter>
        <TodoCreate />
      </BrowserRouter>
    );
  });
  describe('TodoCreate Integration Test', () => {
    it('should submit the form with valid data', () => {
      cy.intercept('POST', 'http://127.0.0.1:8000/api/todo', { statusCode: 200, body: { message: 'Todo created successfully' } }).as('postTodo');
  
      cy.visit('/todo/create');
      cy.get('input[name="title"]').type('Buy groceries');
      cy.get('textarea[name="description"]').type('Milk, eggs, bread');
      cy.get('button[type="submit"]').click();
      cy.wait('@postTodo').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.body.message).to.eq('Todo created successfully');
      });
    });
  }
});