import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './assest/Logo jackery.svg';
import icon1 from './assest/iconos redes-01.svg';
import icon2 from './assest/iconos redes-02.svg';
import icon3 from './assest/iconos redes-03.svg';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import './NavBar.css';

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false); // Nuevo estado para controlar el menú de productos

  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectDimension);
    return () => {
      window.removeEventListener('resize', detectDimension);
    };
  }, []);

  useEffect(() => {
    if (windowDimension.width > 800) {
      setNavBarOpen(false);
    }
  }, [windowDimension]);

  const links = [
    { id: 1, link: "HOME" },
    { id: 2, link: "PRODUCTOS" },
    { id: 3, link: "BLOG" },
    { id: 4, link: "CONTACTO" },
  ];

  const productsMenuOptions = [ 
    { id: 1, link: "/PRODUCTOS/Jackery Explorer 240", text: "Jackery Explorer 240" },
    { id: 2, link: "/PRODUCTOS/Jackery Explorer 500", text: "Jackery Explorer 500" },
    { id: 3, link: "/PRODUCTOS/Jackery Explorer 1000", text: "Jackery Explorer 1000" },
    { id: 4, link: "/producto1", text: "Producto 4" },
    { id: 5, link: "/producto2", text: "Producto 5" },
    { id: 6, link: "/producto3", text: "Producto 6" },
    { id: 7, link: "/producto1", text: "Producto 7" },
    { id: 8, link: "/producto2", text: "Producto 8" },

    
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
          {(navBarOpen || windowDimension.width > 800) && (
            <ul className='linksConteiner'>
              {links.map((x) => (
                <li key={x.id}>
                  {x.link === "PRODUCTOS" ? ( 
                    <div className="productsMenu">
                      <button onClick={() => setProductsMenuOpen(!productsMenuOpen)} className="productsMenuButton">
                        {x.link} 
                      </button>
                      {productsMenuOpen && (
                        <ul className="productsMenuOptions">
                          {productsMenuOptions.map(option => (
                            <li key={option.id}>
                              <Link to={option.link} onClick={() => setNavBarOpen(false)} className='links'>
                                {option.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={x.link}
                      onClick={() => setNavBarOpen(false)}
                      className='links'
                    >
                      {x.link}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="iconsContainer">
          {!navBarOpen && windowDimension.width > 800 && (
            <>
              {icons.map((x) => (
                <Link key={x.id} to={x.link} className="iconLink">
                  <img src={x.icon} alt={`Icon ${x.id}`} className="icon" />
                </Link>
              ))}
            </>
          )}
          {!navBarOpen && windowDimension.width <= 800 ? (
            <IoMenu size={50} onClick={() => setNavBarOpen(!navBarOpen)} />
          ) : (
            windowDimension.width < 800 && (
              <IoClose size={25} onClick={() => setNavBarOpen(!navBarOpen)} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
