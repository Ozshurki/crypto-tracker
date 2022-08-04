import React, {useState} from 'react';
import {BsFillMoonFill, BsSun} from "react-icons/bs";
import Select from "react-select";
import useLocalStorage from "use-local-storage";

import {HeaderStyle, Hamburger} from "./Header.Style";
import Navigation from "./navbar/navigation/Navigation";
import MobileNavBar from "./navbar/mobile-navbar/MobileNavBar";


const options = [
    {value: 'usd', label: 'USD'},
    {value: 'ils', label: 'ILS'},
]

interface HeaderInt {
    toggleTheme: () => void;
}

const Header: React.FC<HeaderInt> = ({toggleTheme}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');
    const [isScroll, setIsScroll] = useState<boolean>(false);

    const changeBackGround = () => {
        if (window.scrollY > 90)
            setIsScroll(true);
        else
            setIsScroll(false);
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
                    {theme === "light" ? <BsSun className="toggle-theme dark"
                                                color={theme ? "dark" : "white"}
                                                size="1.1rem"
                                                onClick={toggleTheme}/>
                        :
                        <BsFillMoonFill className="toggle-theme light"
                                        color={theme ? "dark" : "white"}
                                        size="1.1rem"
                                        onClick={toggleTheme}/>
                    }
                </div>
                <Select defaultValue={selectedOption}
                        options={options}
                        />
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