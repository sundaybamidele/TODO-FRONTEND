
import { BrowserRouter, Route } from'react-router-dom'; 
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Contact from '../Pages/Contact.js';

function MyRouter(){

    return (
        <BrowserRouter>  
                  
                <Route path="/" component={Home} />
                <Route path="/about-us" component={About} />
                <Route path="/contact-us" component={Contact} />
            
        </BrowserRouter>
        

    )               
}
export default MyRouter;