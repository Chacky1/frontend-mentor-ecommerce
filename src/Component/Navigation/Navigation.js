import React, {useState} from 'react';
import ReactDOM from "react-dom";

import NavLinks from "./NavLinks";
import NavLinksResponsive from "./NavLinksResponsive";
import Cart from "./Cart";

const Navigation = () => {
    const [isBurgerClicked, setIsBurgerClicked] = useState(false)
    const [isCartFocused, setIsCartFocused] = useState(false)

    const burgerClickHandler = () => {
        setIsBurgerClicked(prevIsBurgerClicked => !prevIsBurgerClicked)
    }

    const handleCartClick = () => {
        setIsCartFocused(prevIsCartFocused => !prevIsCartFocused)
    }

    return (
        <nav className='navbar'>
            <img onClick={burgerClickHandler} className='navbar__burger' src="./images/icon-menu.svg" alt="menu" />
            <img className='navbar__logo' src='./images/logo.svg' alt='sneakers'/>
            <NavLinks />
            {ReactDOM.createPortal(<NavLinksResponsive isOpened={isBurgerClicked} closeClickHandler={burgerClickHandler} />, document.getElementById('responsive-navbar'))}
            <img onClick={handleCartClick} className='navbar__cart' src='./images/icon-cart.svg' alt='cart'/>
            {isCartFocused && <Cart />}
            <img className='navbar__avatar' src="./images/image-avatar.png" alt="avatar"/>
        </nav>
    );
};

export default Navigation;
