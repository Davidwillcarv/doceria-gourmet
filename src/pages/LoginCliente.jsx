import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LoginCliente() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/'); 
  };

  return (
    <div className="min-h-screen bg-cor-fundo flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 shadow-xl border border-stone-100 relative">
        
        <Link to="/" className="absolute top-6 left-6 text-stone-400 hover:text-cor-texto">
          <ArrowLeft size={20} />
        </Link>

        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl text-cor-texto italic">Área do Cliente</h1>
          <p className="text-[10px] text-stone-400 mt-2 font-bold uppercase tracking-widest italic">Aceda à sua conta</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <input type="email" required className="w-full bg-[#FDFBF7] border border-stone-100 rounded-xl px-4 py-3 outline-none" placeholder="E-mail do Cliente" />
          <input type="password" required className="w-full bg-[#FDFBF7] border border-stone-100 rounded-xl px-4 py-3 outline-none" placeholder="Palavra-passe" />
          <button type="submit" className="w-full bg-cor-texto text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}