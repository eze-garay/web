
import './Products.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import React from 'react';
import CardProduct from '../Card/CardProduct';
import Gallery from '../gallery/gallery';
import imagen from './assests/imagen1.jpg'

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
      <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
      </a>
    </div>
  </div>
  <div className='conteinerProducts2'>
    <div className='ProductDescription'> 
    <h1 className='textProducts'>GENERADOR SOLAR</h1>
    <p className='BodyProducts'>El Generador Solar 2000 Plus ofrece una capacidad ampliable de 2kWh a 12kWh. Amplíala a 12kWh agregando una batería y paneles solares. Ideal para vivir sin conexión a la red y para alimentarte durante apagones prolongados. Una carga solar completa tarda 2 horas: la carga con energía solar es totalmente independiente.</p>
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
      <div className="card" style={{width: '30rem', margin: '10PX', backgroundColor: 'transparent', border: '0px'}}>
      <img src={imagen} className="card-img-top cardImgReview " alt="..."/>
      <div className='card-body'>
        <div className='cardReview'>
        <h1 className='titleReview'>seguridad integral con excelente BMS</h1>
        <p className='textReview'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
      <div className="card" style={{width: '30rem', margin: '10PX', backgroundColor: 'transparent', border: '0px'}}>
      <img src={imagen} className="card-img-top cardImgReview" alt="..."/>
      <div className='card-body'>
        <div className='cardReview'>
        <h1 className='titleReview'>seguridad integral con excelente BMS</h1>
        <p className='textReview'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div className='conteinerProducts5'>

  </div>
  <div className='conteinerProducts6'>

  </div>
  <div className='conteinerProducts7'>

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