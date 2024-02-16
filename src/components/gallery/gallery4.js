import React from 'react'
import './gallery.css'

import imagen from './assests/gallery4/2 años de garantía oficial.png'
import imagen2 from './assests/gallery4/A prueba de agua y polvo IP65.png'
import imagen3 from './assests/gallery4/Carga directa de dispositivos.png'
import imagen4 from './assests/gallery4/Compatible con Jackery Explorer.png'
import imagen5 from './assests/gallery4/Hecho para durar.png'
import imagen6 from './assests/gallery4/Plegable y liviano_ pesa tan sólo 4,69 kg.png'
import imagen7 from './assests/gallery4/Salidas USB-C y USB-A.png'


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