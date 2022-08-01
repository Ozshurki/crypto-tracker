import React, {useState} from 'react';
import {TiWeatherPartlySunny} from "react-icons/ti";
import {BsToggleOff, BsToggleOn} from "react-icons/bs";
import useLocalStorage from "use-local-storage";

import {HeaderStyle, Hamburger} from "./Header.Style";
import Navigation from "./navbar/navigation/Navigation";
import MobileNavBar from "./navbar/mobile-navbar/MobileNavBar";



interface HeaderInt {
    toggleTheme: () => void;
}

const Header: React.FC<HeaderInt> = ({toggleTheme}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');


    const toggleNavBar = () => setIsOpen(!isOpen);

    const closeMobileMenu = () => setIsOpen(false);

    return (
        <HeaderStyle>
            <div className="logo">
                <TiWeatherPartlySunny color={theme ? "dark" : "white"} size="3rem"/>
            </div>
            <div className="navbar">
                {/*<div className="theme-toggle-container">*/}
                {/*    Dark theme*/}
                {/*    {theme === "light" ? <BsToggleOff className="toggle-theme dark"*/}
                {/*                                    color={theme ? "dark" : "white"}*/}
                {/*                                    size="1.7rem"*/}
                {/*                                    onClick={toggleTheme}/>*/}
                {/*        :*/}
                {/*        <BsToggleOn className="toggle-theme light"*/}
                {/*                    color={theme ? "dark" : "white"}*/}
                {/*                    size="1.7rem"*/}
                {/*                    onClick={toggleTheme}/>*/}
                {/*    }*/}
                {/*</div>*/}
                <Navigation/>
                {isOpen && <MobileNavBar closeMobileMenu={closeMobileMenu}/>}
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