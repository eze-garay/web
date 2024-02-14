
import React from 'react';
import './cardHome.css';
import imagen1 from './assests/Explorer 240.png'
import imagen2 from './assests/Explorer 500.png'
import imagen3 from './assests/Explorer 1000.png'
import imagen4 from './assests/Solarsaga 100.png'
import imagen5 from './assests/Generador solar 240.png'
import imagen6 from './assests/Generador solar 500.png'
import imagen7 from './assests/Generador solar 1000.png'
import imagen8 from './assests/Generador solar 1000 2 paneles solares.png'


const CardHome = () => {
  return (
    <div className='containerHomeCard' >
      <div id="carouselExampleProductHome" className="carousel slide">
        <div className="carousel-inner border-0" >
          <div className="carousel-item active border-0">
            <div className=" w-100 containerCards border-0">
              <div className= 'card cardHome border-0' >
                <img src={imagen3} className="card-img-top img-fluid cardImgHome" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Explorer 240</p>
                </div>
              </div>
              <div className= 'card cardHome border-0' >
                <img src={imagen2} className="card-img-top img-fluid cardImgHome" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Explorer 500</p>
                </div>
              </div>
              <div className= 'card cardHome border-0'>
                <img src={imagen1} className="card-img-top img-fluid cardImgHome" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Explorer 1000</p>
                </div>
              </div>
              <div className= 'card cardHome border-0' >
                <img src={imagen4} className="card-img-top img-fluid cardImgHome" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Solarsaga 100</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active border-0 ">
          <div className=" w-100 containerCards">
          <div className= 'card cardHome border-0'>
                <img src={imagen6} className="card-img-top img-fluid cardImgHome" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Generador solar 240</p>
                </div>
              </div>
              <div className= 'card cardHome border-0' >
                <img src={imagen5} className="card-img-top img-fluid cardImgHome" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Generador solar 500</p>
                </div>
              </div>
              <div className= 'card cardHome border-0' >
                <img src={imagen7} className="card-img-top img-fluid cardImgHome" alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Generador solar 1000</p>
                </div>
              </div>
              <div className= 'card cardHome border-0'>
                <img src={imagen8} className="card-img-top img-fluid cardImgHome " alt="..." />
                <div className="card-body cardBodyHome">
                  <p className="card-text cardTextHome">Generador solar 1000 2</p>
                </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleProductHome" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleProductHome" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default CardHome;
