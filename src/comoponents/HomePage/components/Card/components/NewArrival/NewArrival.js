import React from 'react'
import './NewArrivals.css'
import Fade from 'react-reveal/Fade';
const NewArrivals = () => {
  return (
    <div class="new-arrivals">
  <h2 class="section-title"><span class="highlight-color">New</span> <span class="normal-color">Arrivals</span></h2>
  <p class="section-description">Shop our new arrivals from established brands</p>
  <Fade top>
  <a href="#" class="view-all-products">View all products</a>
 
    </Fade>   
</div>

  )
}

export default NewArrivals