import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    const location = useLocation();

    const isHomepage = location.pathname === '/';
  return (
    <div>
        <div className="hero_container">
            <Navbar isTransparent={isHomepage}/>
            <div className="hero">
                <h1>Discover Timeless Style and <span>Unmatcherd Comfort</span></h1>
                <p>Shop the latest trends and classic essentials just for you</p>
                <button>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero