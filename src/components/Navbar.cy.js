import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom';

describe('<Navbar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
     <Navbar />
    </BrowserRouter>
    )
  })
})