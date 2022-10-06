
import React from 'react'
// import ath from "./pic-1.png"
import star from "./Star.png"

function Card(props) {
  return (
    <div  className="card">
        <div className="image">
            {/* <img className='athe' src={ath} alt="" /> */}
            {/* <img src="images/pic-1.png" alt="" /> */}
            <img className='athe' src= {`images/${props.img}`} alt="" />

            <div className="status">{props.status}</div>
        </div>
        
        <div className="details">
            <p> <img  width = "16px" src={star} alt=""/><span className='price'> {props.rating}</span>({props.reviewCount})-{props.country}</p>
            <p>{props.title}</p>
            <p > <span className='price'>From ${props.price}</span> / person </p>  
        </div>
    
    </div>
  )
}

export default Card

