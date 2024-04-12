import React from 'react'
import Pageloading from './Pageloading'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';


describe('<Pageloading />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
      <Pageloading />
     </BrowserRouter>
    )
  })
})