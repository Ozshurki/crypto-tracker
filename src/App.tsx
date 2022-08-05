import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import CoinInfo from "./pages/coin-info/CoinInfo";
import Favorites from "./pages/favorites/Favorites";

const App:React.FC = () => {

  return (
    <div className="App">
        <Header toggleTheme={() =>{}}/>
      <Routes>
        <Route path="/coins" element={<Home/>}/>
        <Route path="/coins/:id" element={<CoinInfo/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="*" element={<Navigate to="/coins"/>}/>
      </Routes>
    </div>
  );
}

export default App;
