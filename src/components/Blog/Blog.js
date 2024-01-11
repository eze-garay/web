import React from 'react';
import './Blog.css'
import banner from './assest/banner.jpg'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Blog = () => {
  return (
    <div className='conteiner'>
      <header className='conteinerBanner'>
        <div className='Banner'> 
          <div className='BannerTex'>
            <h1 className='BannerTexTitle'>
              Jackery

            </h1>
            <h2 className='BannerTexSubTitle'>
              GENERADORES SOLARES

            </h2>
            <p className='BannerTexBody' >
            Una solución que utiliza energía verde y renovable para exploración al aire libre y respaldo de emergencia

            </p>

          </div>
          <div className='BannerImg'>
            <img src={banner} alt='Banner' className='img' ></img>

          </div>
        </div>

      </header>

      <section className='conteinerCards'>

      </section>

      <footer className='conteinerFooter'>
      <p className='footerSocialTitle'>Jackery</p>
      <section className='footerSocial'>
        <div className='footerLinks'>
            <a href="" className='Links' >
              <TiSocialFacebook/>
            </a>
            <a href="" className='Links'>
              <TiSocialTwitter/>
            </a>
            <a href="" className='Links'>
            <SlSocialInstagram/>
            </a>
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
  )
}

export default Blog