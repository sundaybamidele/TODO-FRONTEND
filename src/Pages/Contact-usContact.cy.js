import React from 'react'
import Contact from './Contact-us'

describe('<Contact />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Contact />)
  })
})