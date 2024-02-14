
import React from 'react';
import './cardHome2.css'
import imagen1 from './assests/Generador solar 240.png'
import imagen2 from './assests/Generador solar 500.png'
import imagen3 from './assests/Generador solar 1000.png'
import imagen4 from './assests/Solarsaga 100.png'
import imagen5 from './assests/Generador solar 1000 2 paneles solares.png'


const cardhome2 = () => {
  return (

    <div className='containerCards2'>
        <div id="carouselExample2" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className='containerCards2'>
                          <div className="card border-0 cardHome2" >
                      <img src={imagen2} className="card-img-top cardImgHome2" alt="..."/>
                      <div className="card-body">
                          <p className="card-text cardText2">Combo</p>
                          <p className="card-text cardTextTitle2">Generador solar 240</p>
                      </div>
                      </div>
                      <div className="card border-0 cardHome2" >
                      <img src={imagen1} className="card-img-top cardImgHome2" alt="..."/>
                      <div className="card-body">
                          <p className="card-text cardText2">Combo</p>
                          <p className="card-text cardTextTitle2">Generador solar 500</p>
                      </div>
                      </div>
                      <div className="card border-0 cardHome2" >
                      <img src={imagen3} className="card-img-top cardImgHome2" alt="..."/>
                      <div className="card-body">
                          <p className="card-text cardText2">Combo</p>
                          <p className="card-text cardTextTitle2">Generador solar 1000</p>
                      </div>
                      </div>
          </div>
          </div>
          <div className="carousel-item ">
          <div className='containerCards2'>
                              <div className="card border-0 cardHome2" >
                          <img src={imagen4} className="card-img-top cardImgHome2" alt="..."/>
                          <div className="card-body">
                              <p className="card-text cardText2 ">Panel solar</p>
                              <p className="card-text cardTextTitle2">Solarsaga 100</p>
                          </div>
                          </div>
                          <div className="card border-0 cardHome2" >
                          <img src={imagen5} className="card-img-top cardImgHome2" alt="..."/>
                          <div className="card-body">
                              <p className="card-text cardText2">Combo</p>
                              <p className="card-text cardTextTitle2">Generador solar 1000 2</p>
                          </div>
                          </div>

          </div>
          </div>
        </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>


  );
};

export default cardhome2 ;
