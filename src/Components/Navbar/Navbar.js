import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <div className='left-side'>
                <img src="https://flowbite.com/docs/images/logo.svg"></img>
                <h4>GeekFoods</h4>
            </div>
             <div className='list'>
                <li>Home</li>
                <li>Quote</li>
                <li>Restaurants</li>
                <li>Foods</li>
                <li>Contact</li>
             </div>
             <button id='get-started'>Get started</button>
        </div>
    )
}

export default Navbar;
