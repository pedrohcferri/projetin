import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import { Login } from './Pages/Login/Login';
import { Users } from './Pages/Users/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user" element={<Users/>} />
        </Routes>
       </BrowserRouter>
  </React.StrictMode>
)