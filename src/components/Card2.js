import React from 'react'

const Card2=({img,price,desc})=> {
  return (
    <div className='cards'>
        <div className='imgContainer'>
            <img src={img}></img>
        </div>
        <div className='descContainer'>
            <p>{desc}</p>
            <p>Price : {price}</p>
        </div>
    </div>
  )
}
export default Card2;