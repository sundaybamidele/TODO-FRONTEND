import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import Todo from './Todo'
import "bootstrap/dist/css/bootstrap.min.css";

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