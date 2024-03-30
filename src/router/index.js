import Home from '../Pages/Home.js';
import About from '../Pages/About-us.js';
import Contact from '../Pages/Contact-us.js';
import {Routes, Route } from'react-router-dom'; 


function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
}

export default MyRouter;