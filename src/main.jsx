import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Routers, Route } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Routers>
            <App />
        </Routers>
    </React.StrictMode>,
);