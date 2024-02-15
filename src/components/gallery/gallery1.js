import React from 'react'
import './gallery.css'

import imagen from './assests/gallery1/1 Pequeña y portátil_ sólo pesa 3 kg.png'
import imagen2 from './assests/gallery1/2 Seguridad avanzada.png'
import imagen3 from './assests/gallery1/3 Salidas AC y USB.png'
import imagen4 from './assests/gallery1/4 Vida util larga.png'
import imagen5 from './assests/gallery1/5 2 años de garantia oficial.png'
import imagen6 from './assests/gallery1/6 Apta para outdoor (-10° a 40°).png'
import imagen7 from './assests/gallery1/7 Apta para carga solar.png'


const gallery = () => {
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

export default gallery