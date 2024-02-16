import React from 'react'
import './gallery.css'

import imagen from './assests/gallery8/Alta durabilidad gracias a sus láminas ETFE_.png'
import imagen2 from './assests/gallery8/Apto para outdoor (-10° a 40°).png'
import imagen3 from './assests/gallery8/Portátil y robusto_.png'
import imagen4 from './assests/gallery8/Salida de AC y USB-A.png'
import imagen5 from './assests/gallery8/Sistema BMS.png'
import imagen6 from './assests/gallery8/Vida útil larga.png'
import imagen7 from './assests/gallery8/Vida útil larga.png'


const gallery8= () => {
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

export default gallery8