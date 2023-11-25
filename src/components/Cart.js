import React from 'react';
import Card2 from './Card2';
import { Link } from 'react-router-dom';

const Cart=({nbre,onAdd,onDel}) => {
    let item=[];
    item=nbre.filter(item => item.n > 0);
    let total=0;
    for(let i of item ){
        total+=i.n*i.price;
    }
  return (
    <div className='cart'>
        <div>
            {
                item.map(it=>{
                    return (
                        <Card2 {...it} onAdd={onAdd} onDel={onDel}/>
                    )
                })
            }
        </div>
        <div className='infoCheck'>
            <div className='addition'>
                {
                    item.map(onePrice => {
                       return ( <p>+{onePrice.price+' x '+onePrice.n}<br/> </p>)
                    })
                }
            </div>
            <h1>Total: <span style={{color:'grey'}}>{total} DH</span></h1>
            <Link to='/Checkout'><button>Checkout</button></Link>
            <Link to='/'><button>Continue Shopping</button></Link>
        </div>
    </div>
  )
}
export default Cart;