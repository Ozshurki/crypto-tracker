import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Home from "./pages/home/Home";
import Header from "./components/header/Header";

const App:React.FC = () => {
  return (
    <div className="App">
        <Header toggleTheme={() =>{}}/>
      <Routes>
        <Route path="/coins" element={<Home/>}/>
        <Route path="*" element={<Navigate to="/coins"/>}/>
      </Routes>
    </div>
  );
}

export default App;
