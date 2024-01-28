
import React from 'react';
import './cardHome2.css'
import imagen2 from './assests/imagen1.jpg';
import imagen3 from './assests/imagen3.jpg'

const cardhome2 = () => {
  return (

    <div className='containerCards2'>
        <div id="carouselExample2" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
                  <div className='containerCards2'>
                          <div className="card border-0 cardHome2" >
                      <img src={imagen2} className="card-img-top cardImgHome2 img-fluid" alt="..."/>
                      <div className="card-body">
                          <p className="card-text cardText2">Combo</p>
                          <p className="card-text cardTextTitle2">Combo 1</p>
                      </div>
                      </div>
                      <div className="card border-0 cardHome2" >
                      <img src={imagen2} className="card-img-top cardImgHome2 img-fluid" alt="..."/>
                      <div className="card-body">
                          <p className="card-text cardText2">Combo</p>
                          <p className="card-text cardTextTitle2">Combo 2</p>
                      </div>
                      </div>
                      <div className="card border-0 cardHome2" >
                      <img src={imagen2} className="card-img-top cardImgHome2 img-fluid" alt="..."/>
                      <div className="card-body">
                          <p className="card-text cardText2">Combo</p>
                          <p className="card-text cardTextTitle2">Combo 3</p>
                      </div>
                      </div>
                  </div>
          </div>
          <div className="carousel-item ">
                  <div className='containerCards2'>
                              <div className="card border-0 cardHome2" >
                          <img src={imagen3} className="card-img-top cardImgHome2 img-fluid" alt="..."/>
                          <div className="card-body">
                              <p className="card-text cardText2 ">Combo</p>
                              <p className="card-text cardTextTitle2">Combo 4</p>
                          </div>
                          </div>
                          <div className="card border-0 cardHome2" >
                          <img src={imagen3} className="card-img-top cardImgHome2 img-fluid" alt="..."/>
                          <div className="card-body">
                              <p className="card-text cardText2">Combo</p>
                              <p className="card-text cardTextTitle2">Combo 5</p>
                          </div>
                          </div>
                          <div className="card border-0 cardHome2" >
                          <img src={imagen3} className="card-img-top cardImgHome2 img-fluid" alt="..."/>
                          <div className="card-body">
                              <p className="card-text cardText2">Combo</p>
                              <p className="card-text cardTextTitle2">Combo 6</p>
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
