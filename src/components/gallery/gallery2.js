import React from 'react'
import './gallery.css'

import imagen from './assests/gallery2/2 años de garantía oficial.png'
import imagen2 from './assests/gallery2/Apta para carga solar.png'
import imagen3 from './assests/gallery2/Apta para outdoor (-10° a 40°).png'
import imagen4 from './assests/gallery2/Batería de larga duración.png'
import imagen5 from './assests/gallery2/Pequeña y portátil_ sólo pesa 6 kg.png'
import imagen6 from './assests/gallery2/Salidas AC, DC y USB.png'
import imagen7 from './assests/gallery2/Seguridad avanzada.png'


const gallery2 = () => {
  return (
    <div className='containerImg'>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen} alt='imagen1' >
                    </img>
                </figure>

        </div>
        <div className='boxImg'>

                <figure>
                    <img className='imgGallery' src={imagen2} alt='imagen1' >
                    </img>
                </figure>

        </div>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen3} alt='imagen1' >
                    </img>
                </figure>
        </div>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen4} alt='imagen1' >
                    </img>
                </figure>
        </div>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen5} alt='imagen1' >
                    </img>
                </figure>
        </div>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen6} alt='imagen1' >
                    </img>
                </figure>
        </div>
        <div className='boxImg'>
                <figure>
                    <img className='imgGallery' src={imagen7} alt='imagen1' >
                    </img>
                </figure>
        </div>

    </div>
  )
}

export default gallery2