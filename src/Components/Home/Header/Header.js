import React from 'react';
import Buisnessinfo from '../Buisnessinfo/Buisnessinfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Buisnessinfo></Buisnessinfo>
        </div>
    );
};

export default Header;