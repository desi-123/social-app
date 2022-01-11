import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav__manager'>
                <Link to='/'>
                <h2>
                    Snippet Manager
                </h2>
                </Link>
            </div>
            <div className="nav-list">
                <div className="nav-list__item">
                    <Link className='nav-list__item--1' to='/signup'>Sign up</Link>
                </div>
                <div className="nav__list--item">
                    <Link className='nav-list__item--2' to='/login'>Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
