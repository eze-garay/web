import React from 'react';
import './Blog.css'
import banner from './assest/banner.jpg'

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

      </footer>
    </div>
  )
}

export default Blog