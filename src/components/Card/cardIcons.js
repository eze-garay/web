import React, { useState } from 'react';
import { GrTooltip } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';
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
                <GrTooltip className='bannerProductsIcons' />
                <p className='bannerProductsText'>ELECTRODOMESTICO</p>
                <p className='bannerProductsText'>(300KW)</p>
              </div>
              <div className='bannerProductsSlide'>
                <GrTooltip className='bannerProductsIcons' />
                <p className='bannerProductsText'>ELECTRODOMESTICO</p>
                <p className='bannerProductsText'>(300KW)</p>
              </div>
              <div className='bannerProductsSlide'>
                <GrTooltip className='bannerProductsIcons' />
                <p className='bannerProductsText'>ELECTRODOMESTICO</p>
                <p className='bannerProductsText'>(300KW)</p>
              </div>
            </div>
          )}
          {selectedBanner === 'bannerProducts2' && (
            <div className='bannerProducts2 active'>
              <div className='bannerProductsSlide'>
                <FaInstagram className='bannerProductsIcons' />
                <p className='bannerProductsText'>ELECTRODOMESTICO</p>
                <p className='bannerProductsText'>(300KW)</p>
              </div>
              <div className='bannerProductsSlide'>
                <FaInstagram className='bannerProductsIcons' />
                <p className='bannerProductsText'>ELECTRODOMESTICO</p>
                <p className='bannerProductsText'>(300KW)</p>
              </div>
              <div className='bannerProductsSlide'>
                <FaInstagram className='bannerProductsIcons' />
                <p className='bannerProductsText'>ELECTRODOMESTICO</p>
                <p className='bannerProductsText'>(300KW)</p>
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







