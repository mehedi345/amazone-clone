import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import logo from './images/logo.png';
import './Header.css';
import { ShoppingBasket } from '@material-ui/icons';
const Header = () => {
    return (
        <div className="header">
            <img className="header_logo" src={logo} alt="logo"/>
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
                 <div className="header_basket">
                     <ShoppingBasket />
                     <span className="header_option_lineTwo header_basketCount">0</span>
                 </div>
             </div>
        </div>
    );
};

export default Header;