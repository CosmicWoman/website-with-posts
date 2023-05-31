import React from 'react';
import './Header.scss'
import Icons from "../Icons/Icons";
import logo from "../../static/img/logo.png"

const Header = () => {
    return (
        <div className='Header'>
            <div className="Header__container container">
                <div className="Header__content">

                    <div className="Header__logo">
                        <img className='Header__logo_img' src={logo} alt=""/>
                    </div>
                    <div className="Header__menu">
                        <Icons name='menu' size='40'/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;