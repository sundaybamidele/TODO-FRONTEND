import React from 'react'
import TodoEdit from './TodoEdit'
import Pageloading from "../components/Pageloading";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';

describe('<TodoEdit />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
      <TodoEdit />
      
    </BrowserRouter>
    )
  })
})