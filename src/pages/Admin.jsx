import React from 'react';
import { LayoutDashboard, Package, Users, BarChart3, ShieldAlert, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div className="min-h-screen bg-cor-fundo flex">
      <aside className="w-64 bg-cor-texto text-white p-8 hidden md:flex flex-col gap-8">
        <h2 className="font-serif text-2xl italic">Ateliê Admin</h2>
        <nav className="space-y-6">
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-cor-fundo"><LayoutDashboard size={18}/> Dashboard</div>
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest opacity-40 hover:opacity-100 cursor-pointer"><Package size={18}/> Estoque</div>
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest opacity-40 hover:opacity-100 cursor-pointer"><BarChart3 size={18}/> Financeiro</div>
        </nav>
        <Link to="/" className="mt-auto flex items-center gap-2 text-[10px] uppercase font-bold opacity-30 hover:opacity-100">
          <ArrowLeft size={14}/> Sair do Painel
        </Link>
      </aside>

      <main className="flex-1 p-8 md:p-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-red-600 mb-2">
            <ShieldAlert size={16} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Dados Confidenciais</span>
          </div>
          <h1 className="font-serif text-4xl text-cor-texto">Relatório Geral</h1>
        </header>

        {/* MÉTRICAS QUE VOCÊ PEDIU */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100">
             <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Faturamento Total</p>
             <p className="text-3xl font-serif text-green-700 font-bold italic">R$ 15.240,50</p>
           </div>
           <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100">
             <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Pedidos Realizados</p>
             <p className="text-3xl font-serif">24</p>
           </div>
           <div className="bg-cor-detalhe p-8 rounded-[2rem] shadow-xl text-white">
             <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Ticket Médio</p>
             <p className="text-3xl font-serif italic font-bold">R$ 68,00</p>
           </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100">
           <h3 className="font-serif text-2xl mb-8 italic text-stone-400">Fluxo de Vendas</h3>
           <div className="space-y-4">
             {[1,2,3].map(i => (
               <div key={i} className="flex justify-between items-center py-4 border-b border-stone-50 last:border-0 font-sans">
                 <span className="font-bold text-sm text-stone-500 underline decoration-cor-detalhe/20">Pedido #BR-{100 + i}</span>
                 <span className="bg-green-50 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase italic">Pago</span>
                 <span className="font-serif text-cor-texto font-bold">R$ 124,00</span>
               </div>
             ))}
           </div>
        </div>
      </main>
    </div>
  );
}