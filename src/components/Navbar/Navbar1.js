import {Menu} from './Menu'
import "./Navbar1.css"

import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar1 (props) {

  return(
    <nav className='NavbarItems'>
      <h1 className='logo'> Shop </h1>
      <ul className='nav-menu'>
        {Menu.map((item , index) => {
          return(
            <li key={index} >
              <a href={item.url} className={item.cName}> <i className={item.icon} ></i> {item.title} </a>
            </li>
          )
        })}
      </ul>
      <Link to={"/cart"}>
      <div className='cart'>
        <span> <i className='fas fa-cart-plus'></i> </span>
        <span>0</span>
      </div>
      </Link>
    </nav>
  )
  
}
