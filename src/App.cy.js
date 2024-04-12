import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

describe('<App />', () => {
  it("renders", () => {
    
    cy.mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
})
