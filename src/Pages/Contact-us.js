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
          <h3><center>
            <Pageloading/> 
            Please check back, my detail is on the way.....<br/>
            </center></h3>        
        </div>



        <Calendarclock />
      </div>
    </div>
    )       
    

}
export default Contact;