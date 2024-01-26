// NavBar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './assest/Logo jackery.svg';
import icon1 from './assest/iconos redes-01.svg'
import icon2 from './assest/iconos redes-02.svg'
import icon3 from './assest/iconos redes-03.svg'
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

import './NavBar.css';

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowsDimension] = useState({
    with: window.innerWidth,
    height: window.innerHeight,
  });

  const detecDimension = () => {
    setWindowsDimension({
      with: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detecDimension);
    windowDimension.with > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener('resize', detecDimension);
    };
  }, [windowDimension]);

  const links = [
    { id: 1, link: "HOME" },
    { id: 2, link: "PRODUCTOS" },
    { id: 3, link: "BLOG" },
    { id: 4, link: "CONTACTO" },
  ];
  const icons = [
    { id: 1, icon: icon1, link: '/ruta-icono-1' },
    { id: 2, icon: icon2, link: '/ruta-icono-2' },
    { id: 3, icon: icon3, link: '/ruta-icono-3' },
  ];

  return (
    <div className="navContainer">
      <div className={!navBarOpen ? 'navBar' : 'navOpen'}>
        <div className="logoContainer">
          {!navBarOpen && <img src={Logo} alt="Logo" className='logo' />}
        </div>
        <div className="linksContainer">
          {navBarOpen || windowDimension.with > 800 ? (
            <ul className='linksConteiner'>
              {links.map((x) => (
                <li key={x.id}>
                  <Link
                    to={x.link}
                    onClick={() => setNavBarOpen(false)}
                    className='links'
                  >
                    {x.link}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="iconsContainer">
          {!navBarOpen && windowDimension.with > 800 && (
            <>
              {icons.map((x) => (
                <Link key={x.id} to={x.link} className="iconLink">
                  <img src={x.icon} alt={`Icon ${x.id}`} className="icon" />
                </Link>
              ))}
            </>
          )}
          {!navBarOpen && windowDimension.with <= 800 ? (
            <IoMenu size={50} onClick={() => setNavBarOpen(!navBarOpen)} />
          ) : (
            windowDimension.with < 800 && (
              <IoClose size={25} onClick={() => setNavBarOpen(!navBarOpen)} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

