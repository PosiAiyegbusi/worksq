import React from 'react'
import './App.css'
import {FaArrowRight} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='all'>
     <div className='call'>
     <div className='navbar'> 
        <p className='soller'>Soller</p>
        <p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Products</a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Solutions</a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Services</a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Configure</a>
      
        </p>

      
      </div>
      <div className='posi'>
      <h1>Get the Sun <br /> to Power Your Home
      <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicis <br /> tenetur 
            quasi, autem nesciunt impedit magni officiis rerum laborum consequatur reiciendis!</p>
            <button type='submit' className='subbut'>Request a Quote    <FaArrowRight/></button>
            <p className='textdown'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ad <br />
              oluptate obcaecati sunt expedita repudiandae saepe magnam quo rerum porr</p>
              <p className='picture'> 
                <img src={require ('./img/asian.png')} className="passnav"alt="" />
                
              </p>
              <p className='rwa'>Rwanda Melfour</p>
              <p className='zerowaste'>Zerowaste.com</p>
      </h1>
    
            
       

      <p>
          <img src={require("./img/man.png")} className="man"alt="" />
          
        </p>
        
      </div>
      <div>
  
      </div>
     </div>
     
     
        
       
    
    </div>
  )
}

export default Navbar
