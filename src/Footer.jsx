import React from 'react'
import './App.css'

const Footer = () => {
  return (
    <div className='footall'>
      <div className='foot'>
        <img src={require ('./img/footer.png')} alt="" /> 
        <div className='navsc'>
                Soller
        </div>
        <div className='at'> @ 2023 Soller, inc. All rights reserved.
     
        </div>
        <div className='footlist'>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Support</li>
        </div>
      </div>
    </div>
  )
}

export default Footer
