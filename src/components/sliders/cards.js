import React from 'react';
import imagen from './assests/nota1.jpg';
import './cards.css';

function cards() {
  return (
    // //
    <div className='conteiner'>
        <div className=' row justify-content-center '>
          { /*
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
         <img src={imagen} class="card-img-top" alt="..."/>
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
        <img src={imagen} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title text-secondary">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class=" text-body-secondary">
         2 days ago
        </div>
        </div>
       </div>}
        </div>
    </div>
    
  )
}

export default cards