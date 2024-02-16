import React, { useState } from 'react';
import './CardProduct1.css';

import imagen1 from './assests/producto7/240130-Jackery-Web-Landing Generador solar500-1200x1200-05.png';
import vista1 from './assests/producto7/240130-Jackery-Web-Landing Generador solar500-1200x1200-02.jpg';
import vista2 from './assests/producto7/240130-Jackery-Web-Landing Generador solar500-1200x1200-03.jpg';
import vista3 from './assests/producto7/240130-Jackery-Web-Landing Generador solar500-1200x1200-04.jpg';
import vista4 from './assests/producto7/240130-Jackery-Web-Landing Generador solar500-1200x1200-06.png';

const CardProduct7 = () => {
  const [selectedImage, setSelectedImage] = useState(imagen1);

  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };

  return (
    <div className='CardProduct'>
      <div className='card cardProducts mb-3 border-0'>
        <img src={selectedImage} className='card-img-top cardSliderProduct' alt='...' onClick={() => handleImageClick(imagen1)} />
        <div className='card-body cardProductBody'>
          <div className='card cardProducts border-0' onClick={() => handleImageClick(vista1)}>
            <img src={vista1} className='card-img-top' alt='...' style={{ maxWidth: 'auto', height: 'auto' }} />
          </div>
          <div className='card cardProducts border-0' onClick={() => handleImageClick(vista2)}>
            <img src={vista2} className='card-img-top' alt='...' style={{ maxWidth: 'auto', height: 'auto' }} />
          </div>
          <div className='card cardProducts border-0' onClick={() => handleImageClick(vista3)}>
            <img src={vista3} className='card-img-top' alt='...' style={{ maxWidth: 'auto', height: 'auto' }} />
          </div>
          <div className='card cardProducts border-0' onClick={() => handleImageClick(vista4)}>
            <img src={vista4} className='card-img-top' alt='...' style={{ maxWidth: 'auto', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct7;
