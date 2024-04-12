import React from'react';
import { BrowserRouter } from'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'bootstrap';


function Slider() {
    return (

<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="slide1.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="slide1.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="slide1.jpeg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span clas="visually-hidden">Next</span>
  </button>
</div>);
}
export default Slider;