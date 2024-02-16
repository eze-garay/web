
import './Products.css'
import React from 'react';
import Cards5  from '../sliders/cards5';
import CardProduct from '../Card/cardProducts/CardProduct7'
import Gallery from '../gallery/gallery7';
import imagen from './assests/producto7/240131-Jackery-Web-Aspectos Generador Solar 500-1920x1080-01.jpg'
import imagen2 from './assests/producto7/240131-Jackery-Web-Aspectos Generador Solar 500-1920x1080-02.jpg'
import CardIcons from '../Card/cardIcons/cardIcons7';
import Calculator from '../calculator/calculator';
import Footer from '../Footer/Footer';


const PRODUCTOS7 = () => {



  return (
  
 <div className='conteiner'>
  <div className='conteinerProducts1'>
    <div className='conteinerProducts1Imagen'>
      <CardProduct/>
    </div>
    <div className='conteinerProducts1ImagenText'>
      <h1 className='textProducts'>Jackery Generador Solar 500</h1>
      <h2 className='numberProducts'> $1000000,00</h2>
      <p className='BodyProducts'>Jackery Generador Solar 500: Estación de Energía Portátil Jackery Explore 500 + Panel Solar SolarSaga 100W</p>
      <p className='BodyProducts'>Batería de 518 Wh</p>
      <p className='BodyProducts'>Inversor de 500 W (sobretensión de 1000 W)</p>
      <p className='BodyProducts'>Seguro, limpio y silencioso</p>
      <p className='BodyProducts'>7 salidas para dispositivos exteriores</p>
      <p className='BodyProducts'>A prueba de agua y polvo IP65</p>
      <p className='BodyProducts'>Alta eficiencia de conversión de hasta el 23%</p>
      <a href="https://tu-pagina.com" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
        COMPRAR AHORA
      </a>
    </div>
  </div>
  <div className='conteinerProducts2'>
    <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Generador Solar 500</h1>
    <div className='borderContainer'>
            <p className='BodyProducts'>
            El generador solar 500 es uno de los más livianos y portátiles en el mercado; es perfecto para proporcionar energía limpia a tus múltiples dispositivos en tus diversas actividades al aire libre.
            </p>
    </div>
    </div>
    <div className='ProductVideo'>
    <div className='ProductVideo'>
      <iframe
        width='100%' 
        height='400px' 
        src="https://www.youtube.com/embed/Tz9uVgdKT4E?si=Mmv_qkAVG4KdlBHd"
        title='Product Video'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
    </div>
    <div className='ProductDescription'> 
    <p className='BodyProducts'>El Jackery Generador Solar 500 es una solución energética que combina la Estación de Energía Portátil Explorer 500 de Jackery y el panel solar SolarSaga100W. Este convierte la energía capturada por los paneles solares en energía eléctrica, y luego la almacena en la estación de energía portátil para su posterior uso. Este generador solar es una fuente de energía fiable y limpia para campistas, vehículos recreativos o como respaldo de emergencia.</p>
    </div>

  </div>
  <div className='conteinerProducts3'>
  <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Generador Solar 500</h1>
  </div>
  <Gallery/>
  </div>
  <div className='conteinerProducts4'>
      <div className='ProductDescription'> 
        <h1 className='textProducts'>Jackery Generador Solar 500</h1>
      </div>
    <div className='containerReview'>
      <div className="cardReview">
        <div className='cardImgReview'>
        <img src={imagen} className="card-img-top" alt="..."/>
        </div>
      <div className='card-body cardbodyReview'>
        <div className='card2'>
        <h1 className='titleReview'>Súmate a la energía limpia</h1>
        <p className='textReview'>Nuestro planeta reclama la transición energética. Empieza a formar parte del cambio con la energía limpia de Jackery  </p>
        </div>
      </div>
      </div>
      <div className="cardReview" >
        <div className='cardImgReview'>
        <img src={imagen2} className="card-img-top" alt="..."/>
        </div>
      <div className='card-body cardbodyReview'>
        <div className='card2'>
        <h1 className='titleReview'>Expande tus conocimientos sobre energía solar</h1>
        <p className='textReview'> Ingresa aquí si quieres conocer más sobre el funcionamiento de los generadores solares</p>
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
          <p className='textReview'>Ingresa el voltaje de un dispositivo (que no exceda los 500 W) y descubre cuánto tiempo, aproximadamente, puedes usarlo de manera continua si lo alimentas con la Explorer 500.</p>
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
        <Footer/>
      </footer>

 </div>




  );
};

export default PRODUCTOS7;