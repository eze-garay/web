import './Contact.css'
import React from 'react';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

const CONTACTO = () => {


  return (
  
    <div className='conteinerContact'>
      <header className='conteinerContactImg'>
        <div>
          <h1 className='ContactTitle'>Contáctenos</h1>
        </div>

      </header>
      <div className='conteinerCon'>
      <div className='conteinerContactForm'>
          <div className='conteinerForm'>
            <Form/>
          </div>
      </div>
      </div>
      <footer className='conteinerFooter'>
        <Footer/>
      </footer>

    </div>


  );
};

export default CONTACTO;