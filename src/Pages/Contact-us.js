import CarouselComponent from "../components/CarouselComponent"; // Assuming correct relative path to CarouselComponent component
import Calendarclock from "../components/Calendarclock";
import Pageloading from "../components/Pageloading";

function Contact(){
   
    return (
        <div className="container mt-5">
      <center><h1>My Contact</h1></center><br/>
      
     
      <div className="container mt-5">
        <CarouselComponent /><br/><br/>
        <br />
        <div className="container mt-5">
          <center>
            <Pageloading/> 
           <h3  data-testid5="contact">My name is Bamidele Joseph Sunday with Student Number 2304954. Learning Web Application is fun and interesting.</h3><br/>
            </center>       
        </div>



        <Calendarclock />
      </div>
    </div>
    )       
    

}
export default Contact;