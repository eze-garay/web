// cardHome.js
import React from 'react';
import './cardHome.css';
import imagen from './assests/imagen1.jpg';

const CardHome = () => {
  return (
    <div className='containerHomeCard'>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className=" w-100 containerCards border-0">
              <div className="card cardHome border-0" >
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">100W</p>
                </div>
              </div>
              <div className="card cardHome border-0" >
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">100W</p>
                </div>
              </div>
              <div className="card cardHome border-0" >
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">100W</p>
                </div>
              </div>
              <div className="card cardHome border-0" >
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">100W</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active ">
          <div className=" w-100 containerCards">
              <div className="card cardHome border-0" >
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">100W</p>
                </div>
              </div>
              <div className="card cardHome border-0" >
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">100W</p>
                </div>
              </div>
              <div className="card cardHome border-0" >
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">100W</p>
                </div>
              </div>
              <div className="card cardHome border-0" >
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome ">100W</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CardHome;
