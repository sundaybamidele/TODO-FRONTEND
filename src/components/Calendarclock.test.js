import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendarclock from './Calendarclock';

test('renders calendar and clock', () => {
  render(<Calendarclock />);

  // Assert that the calendar component is rendered
  const calendarElement = screen.getByRole('textbox', { name: /date/i });
  expect(calendarElement).toBeInTheDocument();

  // Assert that the clock component is rendered
  const clockElement = screen.getByRole('timer', { name: /time/i });
  expect(clockElement).toBeInTheDocument();
});

test('selects a date', async () => {
  render(<Calendarclock />);

  // Simulate selecting a date
  const newDate = new Date('2022-04-20');
  const calendarElement = screen.getByRole('textbox', { name: /date/i });
  await screen.findByText('20'); // Wait for the current month to be displayed
  calendarElement.focus(); // Focus on the calendar input
  calendarElement.setSelectionRange(0, calendarElement.value.length); // Select the current date
  userEvent.type(calendarElement, newDate.toLocaleDateString()); // Type the new date
  fireEvent.keyDown(calendarElement, { key: 'Enter', code: 'Enter' }); // Press Enter to submit the date

  // Assert that the selected date is displayed
  const selectedDateElement = screen.getByText('20');
  expect(selectedDateElement).toBeInTheDocument();
});
