import React, { useState } from 'react';

import Calendar from 'react-calendar'; // Importing the react-calendar component
import 'react-calendar/dist/Calendar.css'; // Importing default calendar styles
import Clock from 'react-clock'; // Importing the react-clock component
import 'react-clock/dist/Clock.css'; // Importing default clock styles

function Calendarclock() {
  
  const [date, setDate] = useState(new Date()); // State to manage the selected date
  const [currentTime, setCurrentTime] = useState(new Date()); // State to manage the current time

 

 

  const handleDateChange = (date) => {
    setDate(date); // Update the selected date when the user selects a new date
  };

  // Function to update current time every second
  useState(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Calendar and Clock</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '20px', maxWidth: '400px' }}> {/* Adjust the width as needed */}
          <Calendar value={date} onChange={handleDateChange} /> {/* Displaying the calendar component */}
        </div>
        <div style={{ textAlign: 'center', maxWidth: '400px'}}>
          <Clock value={currentTime} /> {/* Displaying the clock component */}
        </div>
      </div>   
    </div>
  );
}

export default Calendarclock;
