import React from'react';
import Home from './Pages/Home.js';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
     <link to="/"> Home</link> 
     <Link to="/about"> About Us</Link>  
     <Link to="/contact"> Contact Us</Link>  
     <Home /> 


      
    </div>
  );
}

export default App;
