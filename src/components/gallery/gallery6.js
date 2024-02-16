import React from 'react'
import './gallery.css'

import imagen from './assests/gallery6/2 años de garantía oficial.png'
import imagen2 from './assests/gallery6/A prueba de agua y polvo IP65.png'
import imagen3 from './assests/gallery6/Alta eficiencia de conversión de hasta el 23_.png'
import imagen4 from './assests/gallery6/Apta para outdoor (-10° a 40°).png'
import imagen5 from './assests/gallery6/Fácil de instalar.png'
import imagen6 from './assests/gallery6/Portátil, durable y silencioso_.png'
import imagen7 from './assests/gallery6/Salidas USB-C y USB-A.png'


const gallery6 = () => {
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

export default gallery6