import React from 'react'
import Calendarclock from './Calendarclock'

describe('<Calendarclock />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Calendarclock />)
  })
})