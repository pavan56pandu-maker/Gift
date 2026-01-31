import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login.jsx';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/App" element={<App />} />
      </Routes>
    </BrowserRouter>
    
   
  </React.StrictMode>,
);
