import React from 'react'
import img from './Group.png'
function Main() {
  return (
    <div className='main-section'>
        <img className="main-photo" src={img} alt="" />
        <h1 className='hero-header'>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Main