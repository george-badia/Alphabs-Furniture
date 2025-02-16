import React, {useContext} from 'react'
import { BiCart, BiUser } from 'react-icons/bi'
import './Navbar.css'
import { ShopContext } from '../ShopContext/ShopContext'
import { Link } from 'react-router-dom'

const Navbar = ({isTransparent }) => {

    const {itemAmount} = useContext(ShopContext)
    const navbarStyle = {
        backgroundColor : isTransparent ? 'transparent' : '#000',
        color: 'fff',
    }
  return (
    <div>
        <div className="navbar" style={navbarStyle}>
            <div className="logo">
                <h2>Alphabs Furniture</h2>
            </div>
            <div className="link">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Product</li>
                </ul>
            </div>
            <div className="nav_icon_wrapper">
                <Link to='/cart'>
                <div className="nav_cart">
                    <BiCart className='nav_icon' />
                    <p className="nav_cart_amount">{itemAmount}</p>
                </div>
                </Link>
                <BiUser className='nav_icon' />
            </div>
        </div>
    </div>
  )
}

export default Navbar