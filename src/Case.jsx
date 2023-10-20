import React from 'react'
import'./App.css'
import {BsArrowRight} from 'react-icons/bs'

const Case = () => {
  return (
    <div className='caseall'>
      <div className='case'>
        <div>
            <img src={require ('./img/5th.png')}className='caseimg' alt="" />
        </div>
        <div className='casword'>
            <p className='stud'>Case Studies</p>
            <h1>Check Out How Our Systems <br /> have helped others</h1>
            <p className='loremcase'>Lorem ipsum dolor sit amet consectetur adipisicing elit., ea iui hiuyoojn  <br />
                que rem ut iusto voluptatem quae dolorum quis accu
            </p>
            <p className='find'>
                Find Case Studies < BsArrowRight />

            </p>
        </div>
       
      </div>
      <div className='half-moon'>

</div>
    </div>
  )
}

export default Case
