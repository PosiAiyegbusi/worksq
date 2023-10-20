import React from 'react'
import './App.css'
import {FaArrowRight} from 'react-icons/fa'
import {RiThunderstormsLine} from 'react-icons/ri'
import {TbStars} from 'react-icons/tb'
import {FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi'


const Join = () => {
  return (
    <div className='joinn'>
        <div className='joinnall'>
        <div className='joinall'>
            <div className='join'>
      <div className='joinInn'>
        <p className='joinword'>
            join other sun harvesters
        </p>
        <p className='make'>
            Make Something Awesome
        </p>
        <button type='submit'  className='butt'>Request a Quote <br /><FaArrowRight/> </button>
    
        </div>
        <p className='joinlorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. T <br />
        res vitae itaque sequi quae sint fugiat illo deserunt m.

        </p>
        <div>
        <div className='joinFlex'>
 <div className='div1'> <RiThunderstormsLine className='thunder' />
    <p>
      Lorem ipsum dolor sit, amet cons <br />
       ectetur adipg elit. Perspiciatis <br />
        maiores eligendi  delectus dolo <br />
      res vero eos ipsum d sapiente, praes <br />
      entium ipsam nostrum fugit blanditiis quasi </p>
      <img src={require ("./img/afrowoman.png")} alt="" />
      <p className='jane'>Jane Cooper Jane</p>
      <p className='kwh'>10kwH</p>
  </div>
  <div className='div2'> <TbStars className='star'/>
  <p>
      Lorem ipsum dolor sit, amet cons <br />
       ectetur adipg elit. Perspiciatis <br />
        maiores eligendi  delectus dolo <br />
      res vero eos ipsum d sapiente, praes <br />
      entium ipsam nostrum fugit blanditiis quasi </p>
      <img src={require("./img/white man.png")} alt="" /> 
      <p className='ralph'>Ralph Lauren</p>
      <p className='kwh2'>
        32kwH
      </p>
      </div>
 <div className='div3'>  <TbStars className='star'/>
  <p>
      yujjkkkkbh uioo sit, amet cons <br />
       ectetur adipg elit. Perspiciatis <br />
        maiores eligendi  delectus dolo <br />
      res vero eos ipsum d sapiente, praes <br />
      entium ipsam nostrum fugit blanditiis quasi </p>
      <img src={require("./img/white man.png")} alt="" />
      <p className='ralph2' > Ralph Edwards</p>
      <p className='kwh3'>
        6kwH
      </p>
 </div>
  <div className='div4'> <TbStars className='star'/>
 <p>
      Lorem ipsum dolor sit, amet con hi <br />
       ectetur adipg elit. Perspiciat <br />
        maiores eligendi  do <br />
    
       </p>
      <img src={require("./img/white man.png")} alt="" />
      <p className='ralph2' > Cameron Whi</p> 
      <p className='kwh3'>
        12kwH
      </p>
 </div> 
    </div> 
        </div>
      <div className='joinleft'>

      </div>
      <div className='joinright'>

      </div>
      <div>
        <div className='iconleft'>
          < FiArrowLeftCircle/>
        </div>
        <div className='iconright'>
          < FiArrowRightCircle/>
        </div>
      </div>
    </div>
  
    </div>
   
    
        </div>
    </div>
  )
}

export default Join
