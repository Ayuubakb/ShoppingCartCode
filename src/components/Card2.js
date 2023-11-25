import React from 'react'

const Card2=({id,img,price,desc,n,onAdd,onDel})=> {
  const handleAdd=(id)=>{
    onAdd(id);
  }
  const handleDel=(id)=>{
    onDel(id);
  }

  return (
    <div className='cards'>
        <div className='imgContainer'>
            <img src={img}></img>
        </div>
        <div className='descContainer'>
            <p>{desc}</p>
            <p>Price : {price} DH</p>
        </div>
        <div className='buttonContainer'>
            <button onClick={()=>handleDel(id)}>-</button><p>{n}</p><button onClick={()=>handleAdd(id)}>+</button>
        </div>
    </div>
  )
}
export default Card2;