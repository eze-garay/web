import React from 'react';
import './Blog.css';
import banner from './assest/banner.jpg';
import Cards from '../sliders/cards';
import Cards2 from '../sliders/cards2';
import Cards3 from '../sliders/cards3';
import Cards4 from '../sliders/cards4';
import Cards5 from '../sliders/cards5';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { Link } from 'react-scroll';

const Blog = () => {
  return (
    <div className='conteiner'>
      <header className='conteinerBanner'>
        <div className='Banner'>
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>Jackery</h1>
            <h2 className='BannerTexSubTitle'>GENERADORES SOLARES</h2>
            <p className='BannerTexBody'>
              Una solución que utiliza energía verde y renovable para exploración al aire libre y respaldo de emergencia
            </p>
          </div>
          <div className='BannerImg'>
            <img src={banner} alt='Banner' className='img' />
          </div>
        </div>
      </header>

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
          <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
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

      <footer className='conteinerFooter'>
        <p className='footerSocialTitle'>Jackery</p>
        <section className='footerSocial'>
          <div className='footerLinks'>
            <Link to='' className='Links'>
              <TiSocialFacebook />
            </Link>
            <Link to='' className='Links'>
              <TiSocialTwitter />
            </Link>
            <Link to='' className='Links'>
              <SlSocialInstagram />
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

export default Blog;
