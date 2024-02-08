
import './Products.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import React from 'react';
import Cards5  from '../sliders/cards5';
import CardProduct from '../Card/CardProduct';
import Gallery from '../gallery/gallery';
import imagen from './assests/imagen1.jpg'
import CardIcons from '../Card/cardIcons';
import Calculator from '../calculator/calculator';

const PRODUCTOS = () => {



  return (
  
 <div className='conteiner'>
  <div className='conteinerProducts1'>
    <div className='conteinerProducts1Imagen'>
      <CardProduct/>
    </div>
    <div className='conteinerProducts1ImagenText'>
      <h1 className='textProducts'>GENERADOR SOLAR</h1>
      <h2 className='numberProducts'> $1000000,00</h2>
      <p className='BodyProducts'>Energía verde y renovable para exploración al aire libre y respaldo de emergencia.</p>
      <p className='BodyProducts'>Energía verde y renovable para exploración al aire libre y respaldo de emergencia.</p>
      <p className='BodyProducts'>Energía verde y renovable para exploración al aire libre y respaldo de emergencia.</p>
      <a href="https://tu-pagina.com" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
        COMPRAR AHORA
      </a>
    </div>
  </div>
  <div className='conteinerProducts2'>
    <div className='ProductDescription'> 
    <h1 className='textProducts'>GENERADOR SOLAR</h1>
    <div className='borderContainer'>
            <p className='BodyProducts'>
              El Generador Solar 2000 Plus ofrece una capacidad ampliable de 2kWh a 12kWh. Amplíala a 12kWh agregando una batería y paneles solares. Ideal para vivir sin conexión a la red y para alimentarte durante apagones prolongados. Una carga solar completa tarda 2 horas: la carga con energía solar es totalmente independiente.
            </p>
    </div>
    </div>
    <div className='ProductVideo'>
    <div className='ProductVideo'>
      <iframe
        width='100%' 
        height='400px' 
        src='https://www.youtube.com/embed/TU_ID_DE_VIDEO' /* Reemplaza TU_ID_DE_VIDEO con el ID de tu video */
        title='Product Video'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
    </div>
    <div className='ProductDescription'> 
    <p className='BodyProducts'>El Generador Solar 2000 Plus ofrece una capacidad ampliable de 2kWh a 12kWh. Amplíala a 12kWh agregando una batería y paneles solares. Ideal para vivir sin conexión a la red y para alimentarte durante apagones prolongados. Una carga solar completa tarda 2 horas: la carga con energía solar es totalmente independiente.</p>
    </div>

  </div>
  <div className='conteinerProducts3'>
  <div className='ProductDescription'> 
    <h1 className='textProducts'>GENERADOR SOLAR</h1>
  </div>
  <Gallery/>
  </div>
  <div className='conteinerProducts4'>
      <div className='ProductDescription'> 
        <h1 className='textProducts'>GENERADOR SOLAR</h1>
      </div>
    <div className='containerReview'>
      <div className="cardReview">
        <div className='cardImgReview'>
        <img src={imagen} className="card-img-top" alt="..."/>
        </div>
      <div className='card-body cardbodyReview'>
        <div className='card2'>
        <h1 className='titleReview'>seguridad integral con excelente BMS</h1>
        <p className='textReview'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
      <div className="cardReview" >
        <div className='cardImgReview'>
        <img src={imagen} className="card-img-top" alt="..."/>
        </div>
      <div className='card-body cardbodyReview'>
        <div className='card2'>
        <h1 className='titleReview'>seguridad integral con excelente BMS</h1>
        <p className='textReview'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div className='conteinerProducts5'>
    <CardIcons/>
  </div>
  <div className='conteinerProducts6'>
        <div className='ProductDescription'>
          <h1 className='textProducts'>Simulador de Tiempo de Funcionamiento</h1>
          <p className='textReview'>Para cargar con el Explorer 1500 Pro (capacidad de 1512 Wh)</p>
          <p className='textReview'>Ingresa el vataje del dispositivo (no supera los 1512 W)</p>
          <Calculator/>
        </div>
        <div id="novedades" className="cardSlider container mb-3">
        <p className="texSlider">NOVEDADES</p>
          <Cards5 />
          <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
          </a>
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

export default PRODUCTOS;