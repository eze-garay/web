import React from 'react'
import './Products.css'
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { Link } from 'react-scroll';

const Products = () => {
  return (
  
    <div className='conteiner'>
      <header className='conteinerHeader'>

      </header>
      <div className='conteinerBody'> 

      </div>

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

export default Products;