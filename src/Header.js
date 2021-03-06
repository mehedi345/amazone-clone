import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import logo from './images/logo.png';
import './Header.css';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
            <Link to="/"><img className="header_logo" src={logo} alt="logo"/></Link>
             <div className="header_search">
                 <input className="header_searchInput" type="text"/>
                 <SearchIcon  className="header_searchIcon"/>
             </div>
             <div className="header-nav">
                 <div className="header_option">
                    <span className="header_option_lineOne">Hello guest</span>
                    <span className="header_option_lineTwo">Sign in</span>
                 </div>
                 <div className="header_option">
                    <span className="header_option_lineOne">Returns</span>
                    <span className="header_option_lineTwo">& Orders</span>
                 </div>
                 <div className="header_option">
                    <span className="header_option_lineOne">Your</span>
                    <span className="header_option_lineTwo">Prime</span>
                 </div>
                 <Link to="/checkout">
                 <div className="header_basket">
                     <ShoppingBasket />
                     <span className="header_option_lineTwo header_basketCount">0</span>
                 </div>
                 </Link>
             </div>
        </div>
    );
};

export default Header;