import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';

export default function App() {
  const [estaLogado, setEstaLogado] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLogado={setEstaLogado} />} />
        <Route path="/checkout" element={<Checkout />} />
        
        {/* Bloqueia o Admin se não estiver logado */}
        <Route 
          path="/admin" 
          element={estaLogado ? <Admin /> : <Navigate to="/login" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}