
import './Products.css'
import React from 'react';
import Cards5  from '../sliders/cards5';
import CardProduct from '../Card/cardProducts/CardProduct3'
import Gallery from '../gallery/gallery3';
import imagen from './assests/producto3/240131-Jackery-Web-Aspectos Edxplorer 1000-1920x1080-01.jpg'
import imagen2 from './assests/producto3/240131-Jackery-Web-Aspectos Edxplorer 1000-1920x1080-02.jpg'
import CardIcons from '../Card/cardIcons/cardIcons3';
import Calculator from '../calculator/calculator';
import Footer from '../Footer/Footer';


const PRODUCTOS3 = () => {



  return (
  
 <div className='conteiner'>
  <div className='conteinerProducts1'>
    <div className='conteinerProducts1Imagen'>
      <CardProduct/>
    </div>
    <div className='conteinerProducts1ImagenText'>
      <h1 className='textProducts'>Jackery Explorer 1000 - Estación de energía portátil</h1>
      <h2 className='numberProducts'> $1000000,00</h2>
      <p className='BodyProducts'>Batería de litio de 1002 Wh</p>
      <p className='BodyProducts'>1000 W de salida (2000 W de sobrecarga)</p>
      <p className='BodyProducts'>Diseño portátil</p>
      <p className='BodyProducts'>3 opciones de carga</p>
      <p className='BodyProducts'>4 modalidades de salida</p>
      <p className='BodyProducts'>Alimenta hasta 7 dispositivos en simultáneo</p>
      <p className='BodyProducts'>Indicadores en pantalla de potencia de entrada/salida y batería restante</p>
      <a href="https://tu-pagina.com" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
        COMPRAR AHORA
      </a>
    </div>
  </div>
  <div className='conteinerProducts2'>
    <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Explorer 1000 - Estación de energía portátil</h1>
    <div className='borderContainer'>
            <p className='BodyProducts'>
            ¡Crea tu propio estilo de vida! La Explorer 1000 es una estación de energía portátil lo suficientemente potente para alimentar tus dispositivos electrónicos favoritos y lo suficientemente liviana para llevarla a cualquier parte.
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
    <p className='BodyProducts'>La Jackery Explorer 1000 es una de las estaciones de energía más poderosas por su batería de 1002 Wh y múltiples puertos. El control de carga del MPPT incorporado asegura una carga solar eficiente y estable para alimentar las máquinas CPAP, taladros eléctricos, computadoras, y más.</p>
    </div>

  </div>
  <div className='conteinerProducts3'>
  <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Explorer 1000 - Estación de energía portátil</h1>
  </div>
  <Gallery/>
  </div>
  <div className='conteinerProducts4'>
      <div className='ProductDescription'> 
        <h1 className='textProducts'>Descubre más sobre energía solar</h1>
      </div>
    <div className='containerReview'>
      <div className="cardReview">
        <div className='cardImgReview'>
        <img src={imagen} className="card-img-top" alt="..."/>
        </div>
      <div className='card-body cardbodyReview'>
        <div className='card2'>
        <h1 className='titleReview'>La solución multifuncional</h1>
        <p className='textReview'>Descubre todo lo que puedes hacer con una estación de energía Jackery. Anímate a inventar tu propio estilo de vida</p>
        </div>
      </div>
      </div>
      <div className="cardReview" >
        <div className='cardImgReview'>
        <img src={imagen2} className="card-img-top" alt="..."/>
        </div>
      <div className='card-body cardbodyReview'>
        <div className='card2'>
        <h1 className='titleReview'>Súmate a la energía limpia</h1>
        <p className='textReview'>Nuestro planeta reclama la transición energética. Empieza a formar parte del cambio con la energía limpia de Jackery</p>
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
          <p className='textReview'>Ingresa el voltaje de un dispositivo (que no exceda los 1000 W) y descubre cuánto tiempo, aproximadamente, puedes usarlo de manera continua si lo alimentas con la Explorer 1000. </p>
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

export default PRODUCTOS3;