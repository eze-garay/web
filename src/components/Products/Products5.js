
import './Products.css'
import React from 'react';
import Cards5  from '../sliders/cards5';
import CardProduct from '../Card/cardProducts/CardProduct5'
import Gallery from '../gallery/gallery5';
import imagen from './assests/producto5/240131-Jackery-Web-Aspectos Generador Solar 1000x2-1920x1080-02.jpg'
import imagen2 from './assests/producto5/240131-Jackery-Web-Aspectos Generador Solar 1000x2-1920x1080-01.jpg'
import CardIcons from '../Card/cardIcons/cardIcons5';
import Calculator from '../calculator/calculator';
import Footer from '../Footer/Footer';


const PRODUCTOS5 = () => {



  return (
  
 <div className='conteiner'>
  <div className='conteinerProducts1'>
    <div className='conteinerProducts1Imagen'>
      <CardProduct/>
    </div>
    <div className='conteinerProducts1ImagenText'>
      <h1 className='textProducts'>Jackery Generador Solar 1000 - 2 paneles</h1>
      <h2 className='numberProducts'> $1000000,00</h2>
      <p className='BodyProducts'>Jackery Generador Solar 1000 - 2 paneles: Estación de Energía Portátil Jackery Explorer 1000 + 2 Paneles Solares SolarSaga 100W</p>
      <p className='BodyProducts'>Batería de litio de 1002 W (46,4 Ah)</p>
      <p className='BodyProducts'>1000 W de energía (sobretensión de 2000 W) </p>
      <p className='BodyProducts'>12 capas de protección contra cortocircuitos</p>
      <p className='BodyProducts'>Carga al 100% tu equipo en tan solo 8 horas</p>
      <p className='BodyProducts'>Salidas múltiples (AC, DC, USB-C y USB-A)</p>
      <p className='BodyProducts'>Alta eficiencia de conversión de hasta el 23%</p>
      <p className='BodyProducts'>Indicadores en pantalla de potencia de entrada/salida y batería restante</p>
      <a href="https://tu-pagina.com" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
        COMPRAR AHORA
      </a>
    </div>
  </div>
  <div className='conteinerProducts2'>
    <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Generador Solar 1000 - 2 paneles</h1>
    <div className='borderContainer'>
            <p className='BodyProducts'>
            Jackery Generador Solar 1000 es realmente poderoso: puede alimentar hasta 7 dispositivos al mismo tiempo. Energía imbatible, energía verde. 
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
    <p className='BodyProducts'>Jackery generador solar 1000 es una solución solar que combina la central eléctrica portátil Jackery Explorer 1000 con 2 paneles solares SolarSaga de 100W. Convierte la energía solar capturada por los paneles solares SolarSaga de 100 W en energía eléctrica y luego la almacena en la central eléctrica portátil Explorer 1000 para su uso posterior. Este generador solar es una fuente de energía confiable y limpia para casas rodantes, vehículos recreativos o como respaldo de emergencia si se corta la energía.</p>
    </div>

  </div>
  <div className='conteinerProducts3'>
  <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Generador Solar 1000 - 2 paneles</h1>
  </div>
  <Gallery/>
  </div>
  <div className='conteinerProducts4'>
      <div className='ProductDescription'> 
        <h1 className='textProducts'>Jackery Generador Solar 1000 - 2 paneles</h1>
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
          <p className='textReview'>Ingresa el voltaje de un dispositivo (que no exceda los 100 W) y descubre cuánto tiempo, aproximadamente, puedes usarlo de manera continua si lo alimentas con el Explorer 1000 </p>
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

export default PRODUCTOS5;