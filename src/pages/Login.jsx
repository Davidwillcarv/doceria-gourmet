// A linha abaixo é a que falta e está causando o erro!
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setLogadoAdmin, setCliente }) {
  const navigate = useNavigate();

  // Estados para controlar o formulário
  const [isCadastro, setIsCadastro] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const lidarComLogin = (e) => {
    e.preventDefault();
    // MOCK: Admin
    if (email === "admin@luzdoces.com" && senha === "123") {
      setLogadoAdmin(true);
      navigate("/admin");
      return;
    }
    // MOCK: Cliente
    if (email === "cliente@teste.com" && senha === "123") {
      setCliente({ name: "Maria Silva", email });
      navigate("/");
      return;
    }
    alert(
      "Dados de teste: admin@luzdoces.com ou cliente@teste.com (senha 123)",
    );
  };

  const lidarComCadastro = (e) => {
    e.preventDefault();
    setCliente({ name: nome, email });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#FCD5D9] flex items-center justify-center p-4 font-serif text-[#6B4E54]">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-xl border border-white/50">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full border border-[#6B4E54] flex items-center justify-center mx-auto mb-4 bg-[#FCD5D9]/20 font-bold italic">
            Luz
          </div>
          <h2 className="text-3xl italic">
            {isCadastro ? "Criar Conta" : "Bem-vinda"}
          </h2>
        </div>

        <form
          onSubmit={isCadastro ? lidarComCadastro : lidarComLogin}
          className="space-y-4"
        >
          {isCadastro && (
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full p-4 rounded-2xl bg-[#FCD5D9]/10 border border-[#FCD5D9] outline-none"
              onChange={(e) => setNome(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-4 rounded-2xl bg-[#FCD5D9]/10 border border-[#FCD5D9] outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-4 rounded-2xl bg-[#FCD5D9]/10 border border-[#FCD5D9] outline-none"
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button className="w-full bg-[#6B4E54] text-white py-4 rounded-2xl font-bold uppercase text-[10px] tracking-widest shadow-lg hover:bg-[#B58D94] transition-all mt-4">
            {isCadastro ? "Cadastrar" : "Entrar"}
          </button>
        </form>

        <button
          onClick={() => setIsCadastro(!isCadastro)}
          className="w-full mt-6 text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100"
        >
          {isCadastro ? "Já sou cliente" : "Criar nova conta"}
        </button>
      </div>
    </div>
  );
}
