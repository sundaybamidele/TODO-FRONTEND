
import {Routers, Route } from'react-router-dom'; 
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Contact from '../Pages/Contact.js';


function MyRouter(){

    return (        
        <Routers>
                <Route path="/" component={<Home />} />
                <Route path="/about-us" component={About} />
                <Route path="/contact-us" component={Contact} />
        </Routers> 
    )               
}
export default MyRouter;