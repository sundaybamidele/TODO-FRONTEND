import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Calendarclock from './Calendarclock';

describe('<Navbar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
     <Calendarclock />
    </BrowserRouter>
    )
  })
})