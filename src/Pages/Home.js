import { useState } from "react";
import Calendar from "react-calendar";
import Slider from "../components/Slider";


function Home() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="container mt-5">
      <h1>You are to my App Home Page</h1>
      <div className="container mt-5">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div><Slider/></div>
    </div>
  );
}
export default Home;
