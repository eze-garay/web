
import './Products.css'
import React from 'react';
import Cards5  from '../sliders/cards5';
import CardProduct from '../Card/cardProducts/CardProduct4'
import Gallery from '../gallery/gallery4';
import imagen from './assests/producto4/240131-Jackery-Web-Aspectos SolarSaga100-1920x1080-01.jpg'
import imagen2 from './assests/producto4/240131-Jackery-Web-Aspectos SolarSaga100-1920x1080-02.jpg'
import CardIcons from '../Card/cardIcons/cardIcons1';
import Calculator from '../calculator/calculator';
import Footer from '../Footer/Footer';


const PRODUCTOS4 = () => {



  return (
  
 <div className='conteiner'>
  <div className='conteinerProducts1'>
    <div className='conteinerProducts1Imagen'>
      <CardProduct/>
    </div>
    <div className='conteinerProducts1ImagenText'>
      <h1 className='textProducts'>Jackery SolarSaga 100 - Panel solar portátil</h1>
      <h2 className='numberProducts'> $1000000,00</h2>
      <p className='BodyProducts'>Alta eficiencia de conversión de hasta el 23%</p>
      <p className='BodyProducts'>Plegable y portátil</p>
      <p className='BodyProducts'>Resistente al agua IP65</p>
      <p className='BodyProducts'>2 puertos de salida: USB-C y USB-A</p>
      <a href="https://tu-pagina.com" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
        COMPRAR AHORA
      </a>
    </div>
  </div>
  <div className='conteinerProducts2'>
    <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery SolarSaga 100 - Panel solar portátil</h1>
    <div className='borderContainer'>
            <p className='BodyProducts'>
            Empieza el cambio. El SolarSaga 100W es un panel solar plegable, compacto y ligero, ideal para cargar dispositivos móviles en campings, excursiones a la naturaleza y entornos remotos. También sirve para cargar las estaciones Jackery Explorer, con lo que podrás almacenar la energía de manera rápida y limpia. 
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
    <p className='BodyProducts'>El panel solar Jackery SolarSaga 100W convierte la energía solar a energía renovable con su panel solar monocristalino. Gracias a su alta eficiencia de conversión solar de 23 %, esta estación de energía es perfecta para las actividades en el exterior y para las emergencias durante los cortes de luz. La carcasa laminada con ETFE y la resistencia al agua IP65 extiende la vida útil del panel solar. </p>
    </div>

  </div>
  <div className='conteinerProducts3'>
  <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery SolarSaga 100 - Panel solar portátil</h1>
  </div>
  <Gallery/>
  </div>
  <div className='conteinerProducts4'>
      <div className='ProductDescription'> 
        <h1 className='textProducts'>Jackery SolarSaga 100 - Panel solar portátil</h1>
      </div>
    <div className='containerReview'>
      <div className="cardReview">
        <div className='cardImgReview'>
        <img src={imagen} className="card-img-top" alt="..."/>
        </div>
      <div className='card-body cardbodyReview'>
        <div className='card2'>
        <h1 className='titleReview'>¿Cómo funcionan los paneles solares?</h1>
        <p className='textReview'>Aquí encontrarás una introducción útil a la tecnología aplicada en energía solar. Descubre el mundo fascinante de la energía del futuro</p>
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
          <p className='textReview'>Ingresa el voltaje de un dispositivo (que no exceda los 200 W) y descubre cuánto tiempo, aproximadamente, puedes usarlo de manera continua si lo alimentas con la Explorer 240.</p>
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

export default PRODUCTOS4;