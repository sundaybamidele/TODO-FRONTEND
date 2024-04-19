import React from 'react';
import { mount } from '@cypress/react'; // Import mount from @cypress/react
import Calendarclock from './Calendarclock';

describe('<Calendarclock />', () => {
  it('renders', () => {
    // Mount the Calendarclock component
    mount(<Calendarclock />);

    // Verify that the component is rendered
    cy.get('.react-calendar').should('be.visible'); // Assuming the calendar component has the class 'react-calendar'
    cy.get('.react-clock').should('be.visible'); // Assuming the clock component has the class 'react-clock'
  });

  it('selects a date', () => {
    // Mount the Calendarclock component
    mount(<Calendarclock />);

    // Simulate selecting a date
    cy.get('.react-calendar__tile--now').click(); // Click on today's date

    // Assert that the selected date is displayed in the calendar input
    cy.get('.react-calendar__tile--active').contains('Today');
  });
});
