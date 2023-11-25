import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav= ()=> {
  return (
    <nav>
        <div>
            <h1>THE STORE</h1>
        </div>
        <div>
            <ul>
                <li>
                    <NavLink to='/' className='links'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/Cart' className='links'>Cart</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav;