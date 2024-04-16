import CarouselComponent from "../components/CarouselComponent"; // Assuming correct relative path to CarouselComponent component
import Calendarclock from "../components/Calendarclock";

function Home() {
  //const [value, onChange] = useState(new Date());

  return (
    <div className="container mt-5">
      <center><h1>You are welcome to my App Home Page</h1></center><br/>
      <div className="container mt-5">
      { /*  <Calendar onChange={onChange} value={value} />*/}
      </div>
      {/* Including Slider component */}
      <div className="container mt-5">
  
      </div>
      {/* Including CarouselComponent component */}
      <div className="container mt-5">
        <CarouselComponent /><br/><br/><br/><br/><br/>
        <Calendarclock />
      </div>
    </div>
  );
}

export default Home;
