import React from 'react';

const NavLinksResponsive = ({ closeClickHandler, isOpened }) => {
    return (
        <div className={isOpened ? 'dark-overlay' : 'hidden-overlay'}>
            <div className='nav-responsive'>
                <img onClick={closeClickHandler} src="./images/icon-close.svg" alt="close"/>
                <ul className='nav-items-responsive'>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default NavLinksResponsive;
