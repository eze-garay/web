import React from 'react'
import './gallery.css'

import imagen from './assests/gallery7/2 años de garantía oficial.png'
import imagen2 from './assests/gallery7/Apta para outdoor (-10° a 40°).png'
import imagen3 from './assests/gallery7/Compacto y portátil.png'
import imagen4 from './assests/gallery7/Duración prolongada.png'
import imagen5 from './assests/gallery7/Excelente protección BMS.png'
import imagen6 from './assests/gallery7/Salidas AC, DC y USB.png'
import imagen7 from './assests/gallery7/Salidas AC, DC y USB(1).png'


const gallery7 = () => {
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

export default gallery7