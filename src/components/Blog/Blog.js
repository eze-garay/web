import React from 'react';
import './Blog.css';
import Banner from '../Banner/banner';
import Cards from '../sliders/cards';
import Cards2 from '../sliders/cards2';
import Cards3 from '../sliders/cards3';
import Cards4 from '../sliders/cards4';
import Cards5 from '../sliders/cards5';
import { Link } from 'react-scroll';
import Footer from '../Footer/Footer';

const Blog = () => {
  return (
    <div className='conteiner'>
      <div className='bannerConteiner'>
      <Banner/>
      </div>
      <div className='conteinerBlog'>


      <div className="menuSlider">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="menuSliderTex"
          >
            <p>TODOS</p>
          </Link>

          <Link
            to="consejosDeCompra"
            spy={true}
            smooth={true}
            duration={500}
            className="menuSliderTex"
          >
            <p>CONSEJOS DE COMPRA</p>
          </Link>
          <Link
            to="estiloDeVida"
            spy={true}
            smooth={true}
            duration={500}
            className="menuSliderTex"
          >
            <p>ESTILOS DE VIDA</p>
          </Link>
          <Link
            to="emergencia"
            spy={true}
            smooth={true}
            duration={500}
            className="menuSliderTex"
          >
            <p>EMERGENCIA</p>
          </Link>
          <Link
            to="conocimiento"
            spy={true}
            smooth={true}
            duration={500}
            className="menuSliderTex"
          >
            <p>CONOCIMIENTO</p>
          </Link>
          <Link
            to="novedades"
            spy={true}
            smooth={true}
            duration={500}
            className="menuSliderTex"
          >
            <p>NOVEDADES</p>
          </Link>
      </div>

      <section className='conteinerCards'>
 

        <div id="consejosDeCompra" className="cardSlider container mb-3">
          <p className="texSlider">CONSEJOS DE COMPRA</p>
          <Cards />
          <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
          </a>
        </div>

        <div id="estiloDeVida" className="cardSlider container mb-3">
        <p className="texSlider">ESTILO DE VIDA</p>
          <Cards2 />
          <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
          </a>
        </div>

        <div id="emergencia" className="cardSlider container mb-3">
        <p className="texSlider">EMERGENCIA</p>
          <Cards3 />
          <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
          </a>
        </div>

        <div id="conocimiento" className="cardSlider container mb-3">
        <p className="texSlider">CONOCIMIENTO</p>
          <Cards4 />
          <a href="/Blog/Nota1" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
          </a>
        </div>

        <div id="novedades" className="cardSlider container mb-3">
        <p className="texSlider">NOVEDADES</p>
          <Cards5 />
          <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
        EXPLORAR MÁS
          </a>
        </div>
      </section>
      </div>
      <footer className='conteinerFooter'>
        <Footer/>
      </footer>
    </div>
  );
};

export default Blog;
