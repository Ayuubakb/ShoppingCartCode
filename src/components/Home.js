import React from 'react';
import Cards from './Cards';

const Home = ({nbre,onAdd})=> {
  return (
    <div className='home'>
      {
        nbre.map(item=>{
          return <Cards key={item.id} {...item} onAdd={onAdd}/>
        })
      }
    </div>
  )
}

export default Home;