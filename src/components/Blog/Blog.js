import React from 'react';
import './Blog.css';
import banner from './assest/banner.jpg';
import Slider1 from "../sliders/sliders";
import Slider2 from "../sliders/sliders2";
import Slider3 from "../sliders/sliders3";
import Slider4 from "../sliders/sliders4";
import Slider5 from "../sliders/sliders5";
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

      <section className='conteinerCards'>
        <div className="menuSlider">
          <Link
            to="consejosDeCompra"
            spy={true}
            smooth={true}
            duration={500}
            className="menuSliderTex"
          >
            <p>Consejos de Compra</p>
          </Link>
          <Link
            to="estiloDeVida"
            spy={true}
            smooth={true}
            duration={500}
            className="menuSliderTex"
          >
            <p>Estilo de Vida</p>
          </Link>
          <Link
            to="emergencia"
            spy={true}
            smooth={true}
            duration={500}
            className="menuSliderTex"
          >
            <p>Emergencia</p>
          </Link>
          <Link
            to="conocimiento"
            spy={true}
            smooth={true}
            duration={500}
            className="menuSliderTex"
          >
            <p>Conocimiento</p>
          </Link>
          <Link
            to="novedades"
            spy={true}
            smooth={true}
            duration={500}
            className="menuSliderTex"
          >
            <p>Novedades</p>
          </Link>
        </div>

        <div id="consejosDeCompra" className="containerSlider">
          <p className="texSlider">Consejos de Compra</p>
          <Slider1 />
        </div>
        <div id="estiloDeVida" className="containerSlider">
          <p className="texSlider">Estilo de Vida</p>
          <Slider2 />
        </div>
        <div id="emergencia" className="containerSlider">
          <p className="texSlider">Emergencia</p>
          <Slider3 />
        </div>
        <div id="conocimiento" className="containerSlider">
          <p className="texSlider">Conocimiento</p>
          <Slider4 />
        </div>
        <div id="novedades" className="containerSlider">
          <p className="texSlider">Novedades</p>
          <Slider5 />
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
