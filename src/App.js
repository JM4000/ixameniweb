import './App.css';
import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogButton from './components/login/LogButton';
import Mapa from './components/Mapa/Mapa';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState({});
  return (
    <GoogleOAuthProvider clientId="456725843233-pggvbr8i3d8upmbatcgb1qlbt4545l04.apps.googleusercontent.com">
    <BrowserRouter>
   
      <Routes>
        <Route path="" element={<LogButton logIn={setToken} />} />
        <Route path="mapa" element={<Mapa/>} />
      </Routes>
    </BrowserRouter>
    
  </GoogleOAuthProvider>
  );
}

export default App;
