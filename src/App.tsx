import React, {useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import CoinInfo from "./pages/coin-info/CoinInfo";
import Favorites from "./pages/favorites/Favorites";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import ScrollUpBtn from "./components/scroll-button/ScrollUpBtn";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from "./config/themes";
import {AppS} from "./App.Style";
import {useSelector} from "react-redux";


const App: React.FC = () => {

    const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <AppS>
                <Header/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/coins" element={<Home/>}/>
                    <Route path="/coins/:id" element={<CoinInfo/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="*" element={<Navigate to="/coins"/>}/>
                </Routes>
                <ScrollUpBtn/>
                <Footer/>
            </AppS>
        </ThemeProvider>
    );
};

export default App;
