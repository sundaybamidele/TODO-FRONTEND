import Home from '../Pages/Home.js';
import About from '../Pages/About-us.js';
import Contact from '../Pages/Contact-us.js';
import {Routes, Route } from'react-router-dom'; 


function MyRouter(){

    return (        
        <Routes>
                <Route path="/" component={<Home />} />
                <Route path="/about-us" component={About} />
                <Route path="/contact-us" component={Contact} />
        </Routes> 
    )               
}
export default MyRouter;