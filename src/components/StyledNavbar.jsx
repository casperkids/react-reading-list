import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faBookmark, faHeart,faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="p-5 text-center bg-body-tertiary">
      <h2 className="mb-6"><FontAwesomeIcon icon={faBookOpenReader} /></h2>
      <h1 className="mb-3">MY BOOK LIBRARY APP</h1>
      <nav>
        <NavLink to='/'  style={({ isActive }) => {
            return { color: isActive ? 'red' : 'grey' };
            }} className='btn'>Home</NavLink>
        <NavLink to='/art'  style={({ isActive }) => {
            return { color: isActive ? 'red' : 'grey' };
            }}className='btn'>art </NavLink>
        <NavLink to='/physics' style={({ isActive }) => {
            return { color: isActive ? 'red' : 'grey' };
            }} className='btn'>Physics </NavLink>
    </nav>
    </div>

  )
}
export default Navbar