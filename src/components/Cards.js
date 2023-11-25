import React from 'react';
const Cards=({id,img,desc,price,n,onAdd})=> {
    const handleClick=(id)=>{
        onAdd(id);
    }
  return (
    <div className='cards'>
        <div className='imgContainer'>
            <img className='n2Img' src={img}></img>
        </div>
        <div className='descContainer'>
            <p>{desc}</p>
            <p>Price : {price}</p>
            <button id={desc} onClick={()=>handleClick(id)}>Add To Cart{(n===0?'':'('+n+')')}</button>
        </div>
    </div>
  )
}

export default  Cards;