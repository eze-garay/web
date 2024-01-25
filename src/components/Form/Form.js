import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import './Form.css'

 const Form = () => {
        const { register, handleSubmit } = useForm ()

      

        const [recibirInformacion, setRecibirInformacion] = useState(false);
      
        const enviar = (data) => {
            console.log(data);
          
            const recibirNovedades = data.recibirInformacion ? 'Sí' : 'No';
            console.log(`¿Recibir novedades? ${recibirNovedades}`);
          };
      
   
      
        return (
            <div>
                <form  onSubmit={handleSubmit(enviar)}>
                <div className='Form'>
                <div className="FormText">
                        <label className="FormTextTitle" htmlFor="email">Email*</label>
                        <input className="FormTextCont" type="email"{...register("email")} required />

                        <label className="FormTextTitle" htmlFor="nombre">Nombre*</label>
                        <input className="FormTextCont" type="text" {...register("nombre")}required/>

                        <label className="FormTextTitle" htmlFor="mensaje">Mensaje*</label>
                        <textarea className="FormTextCont" {...register("mensaje")}  rows="6" required></textarea>
                    </div>
                    <div className="FormImg">
                    <label className="FileButton" htmlFor="imagen">
                        +
                    </label>
                    <input
                        className="FileInput"
                        type="file"
                        id="imagen"
                        name="imagen"
                        {...register("imagen")}
                        accept="image/*"
                        />
                    <label className="FormImgTitle" htmlFor="imagen">
                        Adjuntar archivo (10MG máx.)
                    </label>
                    </div>
                </div>
                <div id="opcion" className="FormButton">
                <label className="FormTextButton">
                  <input  type="checkbox" {...register("recibirInformacion")} checked={recibirInformacion} onChange={() => setRecibirInformacion(!recibirInformacion)} />
                  Quiero recibir novedades de Jackery en mi correo.
                </label>
                </div>
                <div className="FormButton">
                <button className="myButtonFooter" type="submit">Enviar</button>
                </div>
            
                </form>

            </div>


        );
    };

export default Form;

