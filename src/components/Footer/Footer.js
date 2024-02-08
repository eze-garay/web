import React from 'react';
import './Footer.css'
import icon1 from './assest/iconos redes-01.svg';
import icon2 from './assest/iconos redes-02.svg';
import icon3 from './assest/iconos redes-03.svg';
import Logo2 from './assest/Logo.svg'
import { Link } from 'react-router-dom';

const footer = () => {
    const icons = [
        { id: 1, icon: icon1, link: '/ruta-icono-1' },
        { id: 2, icon: icon2, link: '/ruta-icono-2' },
        { id: 3, icon: icon3, link: '/ruta-icono-3' },
    ];

    return (
        <footer className='conteinerFooter'>
            <section className='footerTex'>
                <div className='footerTex1'>
                    <p>Contactenos : 0351000000</p>
                </div>
                <div className='footerTex1'>
                    <p>Calle Falsa 123</p>
                </div>
                <div className='footerTex1'>
                    <p>consultas@jackery.com</p>
                </div>
            </section>
            <img src={Logo2} alt='Logo' className='LogoFooter' />
            <section className='footerSocial'>
                <div className='footerLinks'>
                    {icons.map((x) => (
                        <Link key={x.id} to={x.link} className="iconLink">
                            <img src={x.icon} alt={`Icon ${x.id}`} className="icon" />
                        </Link>
                    ))}
                </div>
            </section>
            <p className='footerTex2'>@2024 Jackery Inc. All rights reserved</p>
        </footer>
    );
};

export default footer;
