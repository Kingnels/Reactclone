import React from 'react'
import img from "./airbnb.png"

function Header() {
  return (
    <div className='navbar'>
        <img className='hero' src={img} alt="" />
        {/* <img src="src/components/airbnb.png" alt="" /> */}
    </div>
  )
}

export default Header