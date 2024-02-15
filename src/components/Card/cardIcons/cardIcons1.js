import React, { useState } from 'react';
import icon1 from './product1/Velador.svg'
import icon2 from './product1/Camara.svg'
import icon3 from './product1/Parlante Bluetooth.svg'
import icon4 from './product1/Telefono.svg'
import icon5 from './product1/Respirador CPAP.svg'
import icon6 from './product1/Manta electrica.svg'
import './cardIcons.css';

const CardIcons = () => {
    const [selectedBanner, setSelectedBanner] = useState('bannerProducts1');
  
    const handleTabClick = (banner) => {
      setSelectedBanner(banner);
    };
  
    return (
      <div>
        <div className='bannerProducts'>
          {selectedBanner === 'bannerProducts1' && (
            <div className='bannerProducts1 active'>
              <div className='bannerProductsSlide'>
                <img src={icon1} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Velador (5 W)</p>
                <p className='bannerProductsText2'>24 h</p>
              </div>
              <div className='bannerProductsSlide'>
                <img src={icon2} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Cámara (8,4 W)</p>
                <p className='bannerProductsText2'>10 veces</p>
              </div>
              <div className='bannerProductsSlide'>
                <img src={icon3} alt='icons' className='bannerProductsIcons' /> 
                <p className='bannerProductsText'>Parlante Bluetooth (10 W)</p>
                <p className='bannerProductsText2'>16,5 h</p>
              </div>
            </div>
          )}
          {selectedBanner === 'bannerProducts2' && (
            <div className='bannerProducts2 active'>
              <div className='bannerProductsSlide'>
                <img src={icon4} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Teléfono (18 W)</p>
                <p className='bannerProductsText2'>14 cargas</p>
              </div>
              <div className='bannerProductsSlide'>
               <img src={icon5} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Respirador CPAP (28 W)</p>
                <p className='bannerProductsText2'>6 h</p>
              </div>
              <div className='bannerProductsSlide'>
                <img src={icon6} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Manta eléctrica (55 W)</p>
                <p className='bannerProductsText2'>4 h</p>
              </div>
            </div>
          )}
        </div>
        <div className='tabs'>
          <button className='tabsButton' onClick={() => handleTabClick('bannerProducts1')}></button>
          <button className='tabsButton' onClick={() => handleTabClick('bannerProducts2')}></button>
        </div>
      </div>
    );
  };
  
export default CardIcons;







