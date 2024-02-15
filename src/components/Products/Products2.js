
import './Products.css'
import React from 'react';
import Cards5  from '../sliders/cards5';
import CardProduct2 from '../Card/cardProducts/CardProduct2'
import Gallery from '../gallery/gallery2';
import imagen from './assests/producto2/240131-Jackery-Web-Aspectos Explorer 500-1920x1080-01.jpg'
import imagen2 from './assests/producto2/240131-Jackery-Web-Aspectos Explorer 500-1920x1080-02.jpg'
import CardIcons from '../Card/cardIcons/cardIcons2';
import Calculator from '../calculator/calculator';
import Footer from '../Footer/Footer';


const PRODUCTOS2 = () => {



  return (
  
 <div className='conteiner'>
  <div className='conteinerProducts1'>
    <div className='conteinerProducts1Imagen'>
      <CardProduct2/>
    </div>
    <div className='conteinerProducts1ImagenText'>
      <h1 className='textProducts'>Jackery Explorer 500 - Estación de energía portátil</h1>
      <h2 className='numberProducts'> $1000000,00</h2>
      <p className='BodyProducts'>Batería de litio de 518 Wh</p>
      <p className='BodyProducts'>500 W de salida (1000 W de sobrecarga)</p>
      <p className='BodyProducts'>Diseño portátil</p>
      <p className='BodyProducts'>3 opciones de carga</p>
      <p className='BodyProducts'>3 modalidades de salida</p>
      <p className='BodyProducts'>Indicadores en pantalla de potencia de entrada/salida y batería restante</p>
      <a href="https://tu-pagina.com" className="myButtonProduct mb-3" target="_blank" rel="noopener noreferrer">
        COMPRAR AHORA
      </a>
    </div>
  </div>
  <div className='conteinerProducts2'>
    <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Explorer 500 - Estación de energía portátil</h1>
    <div className='borderContainer'>
            <p className='BodyProducts'>
            Energía para vivir en libertad. La Explorer 500 combina capacidad y portabilidad para ayudarte a alimentar de energía a una amplia gama de dispositivos, desde teléfonos hasta electrodomésticos pequeños, sin perder movilidad. 
            </p>
    </div>
    </div>
    <div className='ProductVideo'>
    <div className='ProductVideo'>
      <iframe
        width='100%' 
        height='400px' 
        src="https://www.youtube.com/embed/D0sgYdQppd0?si=zpn8pyFTj4HwCi98" 
        title='Product Video'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
    </div>
    <div className='ProductDescription'> 
    <p className='BodyProducts'>La estación de energía portátil Jackery Explorer 500 puede cargar dispositivos de alta potencia por largas horas. Debido a su batería de 518 Wh, manija plegable, diseño ergonómico y tecnología BMS de grado industrial, es la estación de energía ideal para aventuras en el exterior y para usar como energía de respaldo en el hogar cuando hay cortes de luz. </p>
    </div>

  </div>
  <div className='conteinerProducts3'>
  <div className='ProductDescription'> 
    <h1 className='textProducts'>Jackery Explorer 500 - Estación de energía portátil</h1>
  </div>
  <Gallery/>
  </div>
  <div className='conteinerProducts4'>
      <div className='ProductDescription'> 
        <h1 className='textProducts'>Jackery Explorer 500 - Estación de energía portátil</h1>
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
          <p className='textReview'>La Explorer 500 cuenta con un toma de corriente alterna, dos puertos de corriente continua, un puerto para automóvil y tres puertos USB-A para cargar dispositivos de baja a alta potencia, como bombas de aire, máquinas CPAP, televisores, mini-refrigeradores y más. Su tamaño compacto hace que sea ideal para viajes por carretera y campamentos en casa rodante.</p>
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

export default PRODUCTOS2;