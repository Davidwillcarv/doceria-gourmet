import React from 'react';
import { Link } from 'react-router-dom';

export default function Registro() {
  return (
    <div className="min-h-screen bg-[#F5F2EB] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 shadow-xl border border-stone-100">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl text-[#2D2422]">Criar Conta</h1>
          <p className="text-sm text-stone-400 mt-2 font-medium uppercase tracking-widest text-[10px]">Faça parte do nosso clube de doçura</p>
        </div>
        <form className="space-y-4">
          <input type="text" className="w-full bg-[#FDFBF7] border border-stone-100 rounded-xl px-4 py-3 focus:outline-none" placeholder="Nome Completo" />
          <input type="email" className="w-full bg-[#FDFBF7] border border-stone-100 rounded-xl px-4 py-3 focus:outline-none" placeholder="E-mail" />
          <input type="password" className="w-full bg-[#FDFBF7] border border-stone-100 rounded-xl px-4 py-3 focus:outline-none" placeholder="Crie uma senha" />
          <button className="w-full bg-[#2D2422] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#8B4513] transition-all shadow-lg mt-4">Cadastrar</button>
        </form>
        <p className="text-center mt-8 text-sm text-stone-500">Já possui conta? <Link to="/login" className="text-[#8B4513] font-bold underline">Fazer Login</Link></p>
      </div>
    </div>
  );
}