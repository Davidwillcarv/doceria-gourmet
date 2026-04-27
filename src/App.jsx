import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

export default function App() {
  // 1. Definição de Estados (Devem estar no topo da função App)
  const [estaLogadoAdmin, setEstaLogadoAdmin] = useState(false);
  const [usuarioCliente, setUsuarioCliente] = useState(null);

  // 2. O Return (Tudo o que o usuário vê deve estar aqui dentro)
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Principal: Passa o estado do cliente para a Home */}
        <Route
          path="/"
          element={
            <Home cliente={usuarioCliente} setCliente={setUsuarioCliente} />
          }
        />

        {/* Rota de Login: Passa as funções para mudar o estado de login */}
        <Route
          path="/login"
          element={
            <Login
              setLogadoAdmin={setEstaLogadoAdmin}
              setCliente={setUsuarioCliente}
            />
          }
        />

        {/* Rota de Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Rota de Admin: Protegida pelo estado estaLogadoAdmin */}
        <Route
          path="/admin"
          element={estaLogadoAdmin ? <Admin /> : <Navigate to="/login" />}
        />

        {/* Rota de Escape: Se digitar algo errado, volta para a Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
} // <--- Certifique-se de que esta chave fecha a função App()
