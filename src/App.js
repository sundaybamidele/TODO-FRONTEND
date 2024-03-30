import React from'react';
import Home from './Pages/Home.js';
import { Link } from 'react-router-dom';
import MyRouter from './router/index.js';

function App() {
  return (
    <div>
     <Link to="/"> Home</Link> 
     <Link to="/about"> About Us</Link>  
     <Link to="/contact"> Contact Us</Link>  
     <Home />

     <MyRouter />
      
    </div>
  );
}

export default App;
