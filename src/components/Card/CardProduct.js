import React, { useState } from 'react';
import './CardProduct.css';

import imagen from './assests/imagen1.jpg';
import imagen2 from './assests/imagen2.jpg';
import imagen3 from './assests/imagen3.jpg';

const CardProduct = () => {
  const [selectedImage, setSelectedImage] = useState(imagen);

  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };

  return (
    <div className='CardProduct'>
      <div className='card mb-3 border-0'>
        <img src={selectedImage} className='card-img-top' alt='...' onClick={() => handleImageClick(imagen)}/>
        <div className='card-body'>
          <div className='card border-0' style={{ width: '18rem' }} onClick={() => handleImageClick(imagen2)}>
            <img src={imagen2} className='card-img-top' alt='...' />
          </div>
          <div className='card border-0' style={{ width: '18rem' }} onClick={() => handleImageClick(imagen3)}>
            <img src={imagen3} className='card-img-top' alt='...' />
          </div>
          <div className='card border-0' style={{ width: '18rem' }} onClick={() => handleImageClick(imagen2)}>
            <img src={imagen2} className='card-img-top' alt='...' />
          </div>
          <div className='card border-0' style={{ width: '18rem' }} onClick={() => handleImageClick(imagen3)}>
            <img src={imagen} className='card-img-top' alt='...' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;