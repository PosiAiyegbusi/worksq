import React from 'react'
import './App.css'
import {FaTruck, FaTrophy, FaWalking, FaPiggyBank} from 'react-icons/fa'

const Service = () => {
  return (
    <div className='servall'>
      <div className='serve'>
      <div className='sevall'>
      <div>
        <img src={require ('./img/right.png')}  alt="" />
      </div>
      <div>
        <p className='serv'>Services</p>
        <h2 className='perserv'>Personalized Services</h2>
        <p className='servword'>Lorem ir sit amet <br />
            Odit aut ullam vo <br />
            luptatem? Cum, officia?</p>
      </div>
      <div>
        <p className='truck'>
          <FaTruck/>
          <p className='trophy'> <FaTrophy/></p>
         
        </p>
        
        
        <p className='et'>ET Mauris
       
        </p>
        <p className='tro'>EGET SIT
        </p>
        <p className='etword'>Lorem, ipsum dolor sit amet consecte elit. <br />
           Excepturi rem reprehenderit sed voluptate, <br />
          t at, aperiam saepe molestiae <br /> molestiae fugiat repudiandae animi?
        </p>
        <p className='troword'>
          Lorem, ipsum dolor sit amet consecte elit. <br />
           Excepturi rem reprehenderit sed voluptate, <br />
          t at, aperiam saepe molestiae <br /> molestiae fugiat repudiandae animi?
        </p>
        <p className='walk'>
            < FaWalking />
          </p>
          <p className='pig'>
            <FaPiggyBank/>
          </p>
          <p className='imp'>
            impedienr pellejjkn 
          </p>
          <p className='non'>
            Non Libero
          </p>
          <p className='walkword'>
          Lorem, ipsum dolor sit amet consecte elit. <br />
           Excepturi rem reprehenderit sed voluptate, <br />
          t at, aperiam saepe molestiae <br /> molestiae fugiat repudiandae animi?
        </p>
        <p className='pigword'>
          Lorem, ipsum dolor sit amet consecte elit. <br />
           Excepturi rem reprehenderit sed voluptate, <br />
          t at, aperiam saepe molestiae <br /> molestiae fugiat repudiandae animi?
        </p>
        
      </div>
    </div>
      </div>
    </div>
  )
}

export default Service
