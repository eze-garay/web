import React from 'react';
import imagen from './assests/nota5a.jpg';
import imagen2 from './assests/nota5b.jpg';
import imagen3 from './assests/nota5c.jpg'
import './cards5.css';

function cards() {
  return (
    <div className='conteiner'>
        <div className=' row justify-content-center '>
        {
        /*
        <div class="card border-0 mb-3" style={{ width: '18rem' }}>
         <img src={imagen} class="card-img-top" alt="..."/>
         <div class="card-body">
         <h5 class="card-title text-secondary">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <div class=" text-body-secondary">
          2 days ago
         </div>
         </div>
        </div>
        <div class="card border-0 mb-3" style={{ width: '18rem' }}>
         <img src={imagen2} class="card-img-top" alt="..."/>
         <div class="card-body">
         <h5 class="card-title text-secondary">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <div class=" text-body-secondary">
          2 days ago
         </div>
         </div>
        </div>
        */
        <div class="card border-0 mb-3" style={{ width: '18rem' }}>
        <img src={imagen3} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title text-secondary">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class=" text-body-secondary">
         2 days ago
        </div>
        </div>
       </div>
      }




        </div>
    </div>
    
  )
}

export default cards