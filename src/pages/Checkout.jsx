import React from 'react';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="min-h-screen bg-[#F5F2EB] py-20 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Lado Esquerdo: Formulário */}
        <div className="space-y-8">
          <h2 className="font-serif text-4xl text-[#2D2422]">Finalizar Pedido</h2>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 space-y-6">
             <h3 className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-stone-400"><Truck size={16}/> Endereço de Entrega</h3>
             <input type="text" placeholder="CEP" className="w-full bg-[#FDFBF7] border border-stone-100 rounded-xl px-4 py-3" />
             <input type="text" placeholder="Rua, Número e Complemento" className="w-full bg-[#FDFBF7] border border-stone-100 rounded-xl px-4 py-3" />
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 space-y-6">
             <h3 className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-stone-400"><CreditCard size={16}/> Pagamento</h3>
             <div className="grid grid-cols-2 gap-4">
               <button className="border-2 border-[#2D2422] p-4 rounded-xl font-bold text-xs uppercase tracking-widest">Cartão</button>
               <button className="border border-stone-200 p-4 rounded-xl font-bold text-xs uppercase tracking-widest opacity-50">PIX</button>
             </div>
          </div>
        </div>

        {/* Lado Direito: Resumo */}
        <div className="bg-[#2D2422] text-white p-10 rounded-[3rem] h-fit sticky top-24 shadow-2xl">
          <h3 className="font-serif text-2xl mb-8">Resumo da Seleção</h3>
          <div className="space-y-4 border-b border-white/10 pb-6 mb-6">
            <div className="flex justify-between text-sm opacity-70">
              <span>Subtotal</span>
              <span>R$ 124,00</span>
            </div>
            <div className="flex justify-between text-sm opacity-70">
              <span>Taxa de Entrega</span>
              <span>R$ 12,00</span>
            </div>
          </div>
          <div className="flex justify-between font-serif text-3xl mb-10">
            <span>Total</span>
            <span>R$ 136,00</span>
          </div>
          <button className="w-full bg-white text-[#2D2422] py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#F5F2EB] transition-all">Pagar Agora</button>
          <p className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest mt-6 opacity-40"><ShieldCheck size={14}/> Pagamento 100% Seguro</p>
        </div>
      </div>
    </div>
  );
}