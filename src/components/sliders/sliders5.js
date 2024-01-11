import React from 'react'
import images from './exports/exports'
import './sliders5.css'
import {motion} from 'framer-motion'

const slider5 = () => {
  return (
    <motion.div className='sliderContainer'>
      <motion.div className='slider' drag='x' 
      dragConstraints={{right: 0, left:-300}}  >
      {images.map(image =>(
        <motion.div className='item'>
          <img src={image}/>
        </motion.div>
    ))} 

      </motion.div>
  
    </motion.div>
  )
}

export default slider5