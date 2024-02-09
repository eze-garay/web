import React from 'react'
import './conocimiento1.css'
import Footer from '../../Footer/Footer'
import Banner from '../../Banner/banner'
import Cards5 from '../../sliders/cards5'
import imagen from './assests/nota1.jpg'



const Nota1 = () => {
  return (
    <div>
        <header>
        <div className='bannerConteiner'>
        <Banner/>
        </div>
        </header>
        <section className='NotaConteiner' >
            <div className='NotaTexConteiner'>
            <p>
                Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station. Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.
            </p>
            </div>
            <div className='NotaImgConteiner'>
              <img src={imagen}  alt='imagen' />
            </div>
            <div className='NotaTexConteiner'>
              <p>
                Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station. Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.Jackery Explorer 1000 Portable Power Station charges eight devices simultaneously. Featuring a battery capacity of 1002Wh, the portable power station is suitable for charging all devices during camping and power outages. Excellent features of the Explorer 1000 power station include three standard pure sine wave AC outlets, compact design, MPPT charge controller, and an industrial-grade quiet power station.
              </p>
            </div>
            <div className='ProductVideo'>
            <iframe
              width='100%' 
              height='400px' 
              src='https://www.youtube.com/embed/TU_ID_DE_VIDEO' /* Reemplaza TU_ID_DE_VIDEO con el ID de tu video */
              title='Product Video'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
           </div>
            <div id="novedades" className="cardSlider container mb-3">
            <p className="texSlider">NOVEDADES</p>
              <Cards5 />
              <a href="https://tu-pagina.com" className="myButton mb-3" target="_blank" rel="noopener noreferrer">
            EXPLORAR MÁS
              </a>
            </div>

        </section>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
export default Nota1 ;