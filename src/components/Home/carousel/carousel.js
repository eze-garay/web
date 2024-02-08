import React from 'react'
import './Carousel.css'
import imagen from './assest/hero1.jpg'
import imagen2 from './assest/hero2.jpg'
import imagen3 from './assest/hero3.jpg'
import imagen4 from './assest/hero4.jpg'

const carousel1 = () => {
  return (

<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active d-flex align-items-center">
  <img src={imagen} className="d-block img-fluid w-100 imgHome1" alt="..." style={{ width: '1920px', height: '798px' }}  />
  <div className="carousel-caption d-none d-md-block textCarousel carousel-text">
    <h1 className='carouselTexTitle'>Jackery</h1>
    <p className='carouselText'> La libertad de tener energía en cualquier lugar</p>
    <a href="https://tu-pagina.com" className="myButton " target="_blank" rel="noopener noreferrer">
      EXPLORAR MÁS
    </a>
  </div>
    </div>
    <div className="carousel-item ">
      <img src={imagen2} className="d-block img-fluid w-100 imgHome1" alt="..." style={{ width: '1920px', height: '798px' }} />
      <div className="carousel-caption d-none d-md-block carousel-text ">
      <p className='carouselText'> Anímate a crear tu estilo de vida en armonía con el entorno</p>
      <a href="https://tu-pagina.com" className="myButton " target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
      </a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={imagen3} className="d-block img-fluid w-100 imgHome1" alt="..." style={{ width: '1920px', height: '798px' }} />
      <div className="carousel-caption d-none d-md-block carousel-text">
      <p className='carouselText'> La marca líder en el mundo</p>
      <p className='carouselText'> 3 millones de unidades - Más de 200 reviews en medios</p>
      <a href="https://tu-pagina.com" className="myButton " target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
      </a>
      </div>
    </div>
    <div className="carousel-item">
      <img src={imagen4} className="d-block img-fluid w-100 imgHome1" alt="..." style={{ width: '1920px', height: '798px' }} />
      <div className="carousel-caption d-none d-md-block carousel-text ">
      <p className='carouselText'>Energía portátil para lo que necesites</p>
      <p className='carouselText'>Aire libre, trabajo emergencias. Siempre listo</p>
      <a href="https://tu-pagina.com" className="myButton " target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
      </a>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
  )
}

export default carousel1