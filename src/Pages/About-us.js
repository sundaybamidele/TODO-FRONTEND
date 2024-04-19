import CarouselComponent from "../components/CarouselComponent"; // Assuming correct relative path to CarouselComponent component
import Calendarclock from "../components/Calendarclock";

function About() {
  return (
    <div className="container mt-5">
      <center>
        <h1>About the App</h1>
      </center>
      <br />
      <div className="container mt-5">
        {/*  <Calendar onChange={onChange} value={value} />*/}
      </div>
      {/* Including Slider component */}
      <div className="container mt-5"></div>
      {/* Including CarouselComponent component */}
      <div className="container mt-5">
        <CarouselComponent />
        <br />
        <div className="container mt-5">
          <h3><center></center>
            This app was developed under the supersion of Dr. Alix Bergeret.
           <br/> Lecturer in Computer Science, School of Computing and Mathematical
            Sciences, University of Wolverhampton. Email: alix.bergeret@wlv.ac.uk
            Office: MI115<br /><center/>
            <br /></h3>
            <h5>Course Title:       Web Technologies<br />
            Course Code:            7CC005<br />
            Year:                   2023-2024  
            </h5>        
        </div>
        <Calendarclock />
      </div>
    </div>
  );
}
export default About;
