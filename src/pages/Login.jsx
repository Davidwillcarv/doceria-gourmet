import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Login({ setLogado }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLogado(true); // Ativa o acesso ao Admin
    navigate('/admin'); // Te joga direto para o painel protegido
  };

  return (
    <div className="min-h-screen bg-cor-fundo flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 shadow-xl border border-stone-100 relative">
        
        {/* Botão para voltar à Home e não ficar preso */}
        <Link to="/" className="absolute top-6 left-6 text-stone-400 hover:text-cor-texto transition-colors">
          <ArrowLeft size={20} />
        </Link>

        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl text-cor-texto italic">Área Restrita</h1>
          <p className="text-[10px] text-stone-400 mt-2 font-bold uppercase tracking-widest italic">Somente Administradores</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <input type="email" required className="w-full bg-[#FDFBF7] border border-stone-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cor-detalhe/10" placeholder="Usuário Admin" />
          <input type="password" required className="w-full bg-[#FDFBF7] border border-stone-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cor-detalhe/10" placeholder="Senha" />
          <button type="submit" className="w-full bg-cor-texto text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-cor-detalhe transition-all shadow-lg active:scale-95">
            Acessar Painel
          </button>
        </form>
      </div>
    </div>
  );
}