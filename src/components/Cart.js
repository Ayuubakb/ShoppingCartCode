import React from 'react';
import Card2 from './Card2';

const Cart=({nbre}) => {
    let item=[];
    item=nbre.filter(item => item.n > 0);
  return (
    <div className='cart'>
        {
            item.map(it=>{
                return (
                    <Card2 {...it}/>
                )
            })
        }
    </div>
  )
}
export default Cart;