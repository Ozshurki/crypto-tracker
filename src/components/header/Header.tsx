import React, {useContext, useState} from 'react';
import Select from "react-select";
import Toggle from 'react-toggle';
import "../Toggle/Toggle.css";

import {HeaderStyle, Hamburger} from "./Header.Style";
import Navigation from "./navbar/navigation/Navigation";
import MobileNavBar from "./navbar/mobile-navbar/MobileNavBar";
import {BsSun, BsFillMoonFill} from "react-icons/bs";
import {CryptoContext} from "../../context/CryptoContext";
import {currencyOptions} from "../../config/currency-option";


interface HeaderInt {
    toggleTheme: () => void;
}

const Header: React.FC<HeaderInt> = ({toggleTheme}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState(currencyOptions[0]);
    const [isScroll, setIsScroll] = useState<boolean>(false);
    const crypto = useContext(CryptoContext);


    const changeBackGround = () => {
        if (window.scrollY > 90) setIsScroll(true);
        else setIsScroll(false);
    };

    window.addEventListener('scroll', changeBackGround);

    const toggleNavBar = () => setIsOpen(!isOpen);
    const closeMobileMenu = () => setIsOpen(false);

    return (
        <HeaderStyle isScroll={isScroll}>
            <div className="logo">
                Crypto Tracker
            </div>
            <div className="navbar">
                <Navigation/>
                {isOpen && <MobileNavBar closeMobileMenu={closeMobileMenu}/>}
                <div className="header-options">
                    <div className="theme-toggle-container">
                        <Toggle
                            icons={{
                                checked: <BsSun size="2rem" color="black"/>,
                                unchecked: <BsFillMoonFill size="1.7rem" color="white"/>,
                            }}
                        onChange={toggleTheme}/>
                    </div>
                    <Select defaultValue={selectedOption}
                            options={currencyOptions}
                            onChange={(selectedOption:any) => crypto?.setCurrency(selectedOption)}/>
                </div>
            </div>
            <Hamburger onClick={toggleNavBar} isOpen={isOpen}>
                <span className="top-line"/>
                <span className="mid-line"/>
                <span className="bottom-line"/>
            </Hamburger>
        </HeaderStyle>
    );
};

export default Header;