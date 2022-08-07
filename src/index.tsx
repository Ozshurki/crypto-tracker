import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css';
import App from './App';
import Crypto from "./context/CryptoContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Crypto>
                <App/>
            </Crypto>
        </BrowserRouter>
    </React.StrictMode>
);