import React, { useState } from 'react';
import icon1 from './product6/Respirador CPAP.svg'
import icon2 from './product6/Calefactor.svg'
import icon3 from './product6/Cafetera.svg'
import icon4 from './product6/Tostadora.svg'
import icon5 from './product6/Microondas.svg'
import icon6 from './product6/Pava.svg'
import './cardIcons.css';

const CardIcons6 = () => {
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
                <p className='bannerProductsText'>Equipo CPAP (60 W)</p>
                <p className='bannerProductsText2'>14 h</p>
              </div>
              <div className='bannerProductsSlide'>
                <img src={icon2} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Calefactor (350 W)</p>
                <p className='bannerProductsText2'>2,5 h</p>
              </div>
              <div className='bannerProductsSlide'>
                <img src={icon3} alt='icons' className='bannerProductsIcons' /> 
                <p className='bannerProductsText'>Cafetera (550 W)</p>
                <p className='bannerProductsText2'>1,5 h</p>
              </div>
            </div>
          )}
          {selectedBanner === 'bannerProducts2' && (
            <div className='bannerProducts2 active'>
              <div className='bannerProductsSlide'>
                <img src={icon4} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Tostadora (650 W)</p>
                <p className='bannerProductsText2'>1,3 h</p>
              </div>
              <div className='bannerProductsSlide'>
               <img src={icon5} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Microondas (700 W)</p>
                <p className='bannerProductsText2'>1,2 h</p>
              </div>
              <div className='bannerProductsSlide'>
                <img src={icon6} alt='icons' className='bannerProductsIcons' />
                <p className='bannerProductsText'>Pava (850 W)</p>
                <p className='bannerProductsText2'>1 h</p>
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
  
export default CardIcons6;







