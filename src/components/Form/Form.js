import React, { useState } from 'react';
import './Form.css'

 const Form = () => {
        const [nombre, setNombre] = useState('');
        const [email, setEmail] = useState('');
        const [mensaje, setMensaje] = useState('');
        const [imagen, setImagen] = useState(null);
        const [recibirInformacion, setRecibirInformacion] = useState(false);
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Aquí puedes manejar la lógica para enviar los datos del formulario
        };
      
        return (
            <div>
                <form className='Form' onSubmit={handleSubmit}>
                
                <div className="FormText">
                    <label className="FormTextTitle" htmlFor="email">Email*</label>
                    <input className="FormTextCont" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label className="FormTextTitle" htmlFor="nombre">Nombre*</label>
                    <input className="FormTextCont" type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

                    <label className="FormTextTitle" htmlFor="mensaje">Mensaje*</label>
                    <textarea className="FormTextCont" id="mensaje" name="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows="6" required></textarea>
                </div>

                <div className="FormImg">
                    <input type="file" id="imagen" name="imagen" onChange={(e) => setImagen(e.target.files[0])} accept="image/*" />
                    <label className="FormImgTitle" htmlFor="imagen">Adjuntar archivo (10MG máx.) </label>
                </div>
                </form>
 
                <div id="opcion" className="FormButton">
                <label className="FormTextButton">
                  <input  type="checkbox" checked={recibirInformacion} onChange={() => setRecibirInformacion(!recibirInformacion)} />
                  Quiero recibir novedades de Jackery en mi correo.
                </label>
                </div>
                <div className="FormButton">
                <button className="myButton" type="submit">Enviar</button>
                </div>
            </div>


        );
    };

export default Form;

