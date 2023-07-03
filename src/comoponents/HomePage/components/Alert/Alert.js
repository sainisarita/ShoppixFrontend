import React, { useEffect } from "react";
import './Alert.css'

const Alert = ()=>{
    useEffect(() => {
        const alertDiv = document.getElementById('alert');
    
        setTimeout(() => {
          alertDiv.classList.add('show');
        }, 10000); 
    
        const closeAlert = () => {
          alertDiv.classList.remove('show');
        };
    
        const closeButton = alertDiv.querySelector('.close-button');
        closeButton.addEventListener('click', closeAlert);
    
        return () => {
          closeButton.removeEventListener('click', closeAlert);
        };
      }, []);
    return (
    <div id="alert">
         <span className="discount">30%</span>
        <span className="off">off</span>
        <span className="close-button" >X</span>
        <h5 className="title">on your first purchase!</h5>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus, luctus nec.</p>
        <a href="#" className="button">View Products</a>
    </div>
    )
}


export default Alert