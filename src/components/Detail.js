import React from 'react'
import star from "./Star.png"


function Detail() {
  return (
         <div className="details">
            <p> <img  width = "16px" src={star} alt=""/><span className='price'> 5.0 </span>(6)-USA</p>
            <p>Life lessons with Katie Zaferes</p>
            <p > <span className='price'>From $136</span> / person </p>  
        </div>
  )
}

export default Detail