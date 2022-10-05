
import React from 'react'
import ath from "./pic-1.png"
import Detail from '../components/Detail';


function Card() {
  return (
    <div  className="card">
        <div className="image">
            <img className='athe' src={ath} alt="" />
            <div className="status">SOLD OUT</div>
        </div>
      <Detail />
    
    </div>
  )
}

export default Card