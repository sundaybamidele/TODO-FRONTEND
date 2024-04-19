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
});
