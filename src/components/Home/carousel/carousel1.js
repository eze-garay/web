import React from 'react';
import imagen from './assest/banner.jpg';
import imagen2 from './assest/banner2.jpg';
import './Carousel.css'; 

const CarouselHome = () => {
  return (
    <div>
      <div id="carouselHome" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagen} className="carousel-image caruselImgenHome" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imagen2} className="carousel-image caruselImgenHome" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CarouselHome;
