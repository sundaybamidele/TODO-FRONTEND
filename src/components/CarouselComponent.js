import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (  
    <Slider {...settings}>
      <div>
      <img src={process.env.PUBLIC_URL + '/images/slide1.jpeg'} alt="sl1" />
      </div>
      <div>
         <img src={process.env.PUBLIC_URL + '/images/slide2.jpeg'} alt="sl2" />
      </div>
      <div> 
         <img src={process.env.PUBLIC_URL + '/images/slide3.jpeg'} alt="sl3" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
}

export default CarouselComponent;