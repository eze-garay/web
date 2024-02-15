
import './Products.css'
import React from 'react';
import Cards5  from '../sliders/cards5';
import CardProduct from '../Card/cardProducts/CardProduct1'
import Gallery from '../gallery/gallery1';
import imagen from './assests/producto1/240131-Jackery-Web-Aspectos Especiales-1920x1080-01.jpg'
import imagen2 from './assests/producto1/240131-Jackery-Web-Aspectos Especiales-1920x1080-02.jpg'
import CardIcons from '../Card/cardIcons/cardIcons1';
import Calculator from '../calculator/calculator';
import Footer from '../Footer/Footer';


const PRODUCTOS = () => {



  return (
  
 <div className='conteiner'>
  <div className='conteinerProducts1'>
    <div className='conteinerProducts1Imagen'>
      <CardProduct/>
    </div>
    <div className='conteinerProducts1ImagenText'>
      <h1 className='textProducts'>Jackery Explorer 240 - Estación de energía portátil</h1>
      <h2 className='numberProducts'> $1000000,00</h2>
      <p className='BodyProducts'>Batería de litio de 240 Wh (16,8 Ah)</p>
      <p className='BodyProducts'>200 W de salida (400 W de sobrecarga)</p>
      <p className='BodyProducts'>Carga al 100% tu equipo en 5 horas y media</p>
      <p className='BodyProducts'>3 opciones de carga</p>
      <p className='BodyProducts'>2 modalidades de salida</p>
      <p className='BodyProducts'>Indicadores en pantalla de potencia de entrada/salida y batería restante</p>
      <a href="https://tu-pagina.com" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
        COMPRAR AHORA
      </a>
    </div>
  </div>
  <div className='conteinerProducts2'>
    <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Explorer 240 - Estación de energía portátil</h1>
    <div className='borderContainer'>
            <p className='BodyProducts'>
            Una pequeña gran compañera de aventuras, la Explorer 240 es una estación de energía liviana y fácilmente transportable, ideal para alimentar tu notebook, tu teléfono o tu cámara en tus escapadas a la naturaleza. 
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
    <p className='BodyProducts'>La estación de energía portátil Jackery Explorer 240 es tu fuente de alimentación ideal para tus dispositivos pequeños. Gracias a sus 3 kg, puedes llevarla a tus caminatas, campamentos, salidas de cabaña, o a donde sea que el fin de semana te lleve. Su diseño elegante y con estilo viene acompañado con funciones de seguridad avanzadas, lo que la hacen la opción principal para quienes disfrutan de acampar.</p>
    </div>

  </div>
  <div className='conteinerProducts3'>
  <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Explorer 240 - Estación de energía portátil</h1>
  </div>
  <Gallery/>
  </div>
  <div className='conteinerProducts4'>
      <div className='ProductDescription'> 
        <h1 className='textProducts'>Jackery Explorer 240 - Estación de energía portátil</h1>
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

export default PRODUCTOS;