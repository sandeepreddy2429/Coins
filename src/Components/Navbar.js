// import React from 'react'
// import {FaCoins} from 'react-icons/fa'
// import './Navabar.css';
// import { Link } from 'react-router-dom';
import React from "react"
import {FaCoins} from 'react-icons/fa';
import './Navbar.css';
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <Link to='/'>


    <div>
        <div className='navbar'>
            <FaCoins className='icon' />
            <h1>SEARCH <span className='purple'>COIN</span></h1>
        </div>
    </div>
    </Link>
  )
}
