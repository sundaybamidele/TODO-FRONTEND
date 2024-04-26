import CarouselComponent from "../components/CarouselComponent"; // Assuming correct relative path to CarouselComponent component
import Calendarclock from "../components/Calendarclock";


function Contact(){
   
    return (
        <div className="container mt-5">
      <center><h1>My Contact</h1></center><br/>
      
     
      <div className="container mt-5">
        <CarouselComponent /><br/>
        
        <div className="container mt-5">
          <center>
           
           <h3  data-testid5="contact">My name is Bamidele Joseph Sunday with Student Number 2304954. <br/>
           Learning Web Application is fun and interesting.</h3><br/>
            </center>       
        </div>

        <div>
        <center><img src={process.env.PUBLIC_URL + "/myimage.jpg"} alt="myimage" /></center>
      </div>

        <Calendarclock />
      </div>
    </div>
    )       
  
}
export default Contact;