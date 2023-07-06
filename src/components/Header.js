import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/header-logo.png"
import seacrh from "../images/icons/searchIcon.png"
import './Header.css'
import { useAuth } from '../context/GlobalState'
import { auth } from '../firebase'
import shoppingCart from "../images/icons/shopping-cart.png";


const Header = () => {
    const handleAuthentication = ()=>{
        auth.signOut();
    }
    const {user,basket} = useAuth();
  return (
    <div className='header'>
        <Link to="/">
            <img className='header-logo' src={Logo} alt='logo'/>
        </Link>
        <div className='header-search'>
            <input className='header-searchInput' type="text" />
            <img className='header-searchIcon' src={seacrh} alt="search" />
        </div>
        <div className='header-nav'>
            <Link to={!user && "/login"}>
            <div className='header-option' onClick={handleAuthentication}>
                <div className='header-optionLineOne'>Hello {user?`${user.email}`:"guest"} </div>
                <div className='header-optionLineTwo'>{user?"Sign Out" : "Sign In"}</div>
                </div>
            </Link>
      
        <Link to="/orders">
        <div className='header-option'>
                <div className='header-optionLineOne'>Returns</div>
                <div className='header-optionLineTwo'>& Orders</div>
                </div>
            </Link>
            <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
                <Link to="/checkout">
                    <div className='header-optionBasket'>
                    <img src={shoppingCart} />
                        <span className='header-optionLineTwo header-basketCount'>{basket?.length}</span>
                    </div>
                </Link>
           
            
                </div>

    </div>
  )
}

export default Header