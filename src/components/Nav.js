import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav= ()=> {
  return (
    <nav>
        <div>
            <h1><i className="fa-solid fa-microchip fa-xl" style={{color: '#ffffff'}}></i></h1>
        </div>
        <div>
            <ul>
                <li>
                    <NavLink to='/' className='links'><i className="fa-solid fa-house fa-lg" style={{color: '#ffffff'}}></i></NavLink>
                </li>
                <li>
                    <NavLink to='/Cart' className='links'><i className="fa-solid fa-cart-shopping fa-lg" style={{color: '#ffffff'}}></i></NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav;