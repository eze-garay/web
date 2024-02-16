import React, { useState } from 'react';
import './CardProduct1.css';

import imagen1 from './assests/producto4/240130-Jackery-Web-Landing Solar Saga 100-1200x1200-01.jpg';
import vista1 from './assests/producto4/240130-Jackery-Web-Landing Solar Saga 100-1200x1200-05.png';
import vista2 from './assests/producto4/240130-Jackery-Web-Landing Solar Saga 100-1200x1200-06.png';
import vista3 from './assests/producto4/240130-Jackery-Web-Landing Solar Saga 100-1200x1200-07.png';
import vista4 from './assests/producto4/240130-Jackery-Web-Landing Solar Saga 100-1200x1200-01.jpg';

const CardProduct4 = () => {
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

export default CardProduct4;
