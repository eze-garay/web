
import './Home.css'
import Carousel1 from './carousel/carousel';
import React from 'react';
import CardHome from '../Card/cardHome.js'
import Cardhome2 from '../Card/cardHome2.js';
import imagen from './assests/novedad1.jpg'
import CarouselHome from './carousel/carousel1.js';
import Footer from '../Footer/Footer.js';


const HOME = () => {


  return (
  
    <div className='conteiner conteinerHome'>
      <header className='conteinerHeader'>
        <div className='conteinerhome'>
        <Carousel1/>
        </div>
        <div className='SliderProducts'>
        <h1 className='TexTitle'>NUESTROS PRODUCTOS</h1>
        <div className='SliderCards'>
        <CardHome/>
        </div>
        </div>
      </header>

      <div className='conteinerBody'> 
        <div className='conteinerBody2'>
          <div className='conteinerBody21'>
            <div className='conteinerBodyText'>
              <p className='homeText'>Nuevos ingresos 2024</p>
              <h1 className='homeTextTitle'>Generador Solar</h1>
              <p className='homeText'>Energía verde y renovable para exploración</p>
              <p className='homeText'>al aire libre y respaldo de emergencia.</p>
            </div>
            <a href="https://tu-pagina.com" className="myButtonHome " target="_blank" rel="noopener noreferrer">
                EXPLORAR MÁS
              </a>

          </div>
          <div className='conteinerBody22'>
            <img className='imagenHome' src={imagen} alt='imagen' />
          </div>
        </div>
        <div className='conteinerBody4'>
        <Cardhome2/>
        </div>
        <div className='conteinerBody3'>
          <div className='conteinerBody31'>
          </div>
          <div className='conteinerBody32'>
          <CarouselHome/>
          </div>
        </div>
      </div>
      <footer className='conteinerFooter'>
        <Footer/>
      </footer>
    </div>


  );
};

export default HOME;