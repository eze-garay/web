
import './Home.css'
import Carousel1 from './carousel/carousel';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import React from 'react';
import CardHome from '../Card/cardHome.js'
import imagen from './assests/imagen1.jpg'

const HOME = () => {


  return (
  
    <div className='conteiner'>
      <header className='conteinerHeader'>
        <div className='conteiner'>
        <Carousel1/>
        </div>
        <div className='conteiner SliderProducts'>
        <h1 className='TexTitle'>NUESTROS PRODUCTOS</h1>
        <CardHome/>
        </div>
      </header>

      <div className='conteinerBody'> 
        <div className='conteinerBody2'>
          <div className='conteinerBody21'>
            <div className='conteinerBodyText'>
              <p className='homeText'>Nuevos ingresos 2024</p>
              <h1 className='homeTextTitle'>Generador Solar</h1>
              <p className='homeText'>Energía verde y renovable para exploración al aire libre y respaldo de emergencia.</p>
            </div>
            <a href="https://tu-pagina.com" className="myButtonHome " target="_blank" rel="noopener noreferrer">
                EXPLORAR MÁS
              </a>

          </div>
          <div className='conteinerBody22'>
            <img className='imagenHome' src={imagen} alt='imagen' />
          </div>
        </div> 
        <div className='conteinerBody3'>
        </div> 
      </div>

      <footer className='conteinerFooter'>
        <p className='footerSocialTitle'>Jackery</p>
        <section className='footerSocial'>
          <div className='footerLinks'>
            <Link to='' className='Links'>
              <FaFacebook />
            </Link>
            <Link to='' className='Links'>
              <FaTwitter />
            </Link>
            <Link to='' className='Links'>
              <FaInstagram />
            </Link>
          </div>
        </section>
        <section className='footerTex'>
          <div className='footerTex1'>
            <p>Contactenos : 0351000000</p>
          </div>
          <div className='footerTex1'>
            <p>Calle Falsa 123</p>
          </div>
          <div className='footerTex1'>
            <p>consultas@jackery.com</p>
          </div>
        </section>
        <p className='footerTex2'>@2024 Jackery Inc. All rights reserved</p>
      </footer>
    </div>


  );
};

export default HOME;