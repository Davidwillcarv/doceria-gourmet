import React, { useState } from "react";
import { Link } from "react-router-dom"; // Adicione este import no topo
import { ShoppingCart, X, MessageCircle } from "lucide-react";
import { DOCES } from "../data"; // Note o ../ para voltar uma pasta

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const adicionarAoCarrinho = (doce) => {
    setCarrinho([...carrinho, { ...doce, cartId: Math.random() }]);
    setIsCartOpen(true);
  };

  const removerDoCarrinho = (cartId) => {
    setCarrinho(carrinho.filter((item) => item.cartId !== cartId));
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div className="min-h-screen bg-cor-fundo font-sans text-cor-texto">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-cor-texto/10">
        <Link
          to="/"
          className="font-serif text-2xl tracking-tight text-cor-detalhe"
        >
          ATELIÊ GOURMET
        </Link>

        <div className="flex items-center gap-6">
          {/* Novos Links de Navegação */}
          <Link
            to="/login"
            className="text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100"
          >
            Entrar
          </Link>
          <Link
            to="/admin"
            className="text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100"
          >
            
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 bg-cor-texto text-white rounded-full"
          >
            <ShoppingCart size={18} />
            {carrinho.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {carrinho.length}
              </span>
            )}
          </button>
        </div>
      </nav>
      {/* CONTEÚDO DA VITRINE */}
      <header className="pt-32 pb-12 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-3 text-cor-texto">
          Catálogo de Sabores
        </h2>
        <div className="h-1 w-20 bg-cor-detalhe mx-auto rounded-full"></div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {DOCES.map((doce) => (
            <div
              key={doce.id}
              className="group bg-white rounded-2xl p-3 shadow-md border border-cor-texto/5"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-stone-100">
                <img
                  src={doce.imagem}
                  alt={doce.nome}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => adicionarAoCarrinho(doce)}
                  className="absolute inset-x-2 bottom-2 bg-cor-texto text-white text-[10px] font-bold uppercase py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                >
                  Adicionar
                </button>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-lg min-h-[40px] flex items-center justify-center">
                  {doce.nome}
                </h3>
                <span className="font-bold text-cor-detalhe">
                  R$ {doce.preco.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

     {/* CARRINHO LATERAL - FUNCIONALIDADE RESTAURADA */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-cor-texto/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="relative w-full max-w-[380px] bg-white h-full shadow-2xl p-8 flex flex-col">
            <div className="flex justify-between items-center mb-8 border-b-2 border-cor-fundo pb-4">
              <h2 className="font-serif text-2xl">Sua Sacola</h2>
              <button onClick={() => setIsCartOpen(false)}><X size={24} /></button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {carrinho.length === 0 ? (
                <div className="text-center pt-20 italic text-stone-400">Sacola vazia...</div>
              ) : (
                carrinho.map((item) => (
                  <div key={item.cartId} className="flex gap-4 items-center bg-cor-fundo/30 p-3 rounded-xl border border-stone-100">
                    <img src={item.imagem} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className="font-serif text-base">{item.nome}</p>
                      <p className="font-bold text-cor-detalhe text-sm font-sans">R$ {item.preco.toFixed(2)}</p>
                    </div>
                    <button onClick={() => removerDoCarrinho(item.cartId)} className="text-red-400 hover:text-red-600">
                      <X size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="pt-6 border-t-2 border-cor-fundo mt-auto">
              <div className="flex justify-between items-baseline mb-6">
                <span className="font-bold text-stone-400 text-xs uppercase tracking-widest">Total</span>
                <span className="font-serif text-3xl text-cor-texto">R$ {total.toFixed(2)}</span>
              </div>
              <Link 
                to="/checkout"
                className="block text-center w-full bg-cor-texto text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-cor-detalhe transition-all shadow-xl active:scale-95"
              >
                Finalizar Pedido
              </Link>
            </div>
          </div>
        </div>
      )}
      <a
        href="https://wa.me/55XXXXXXXXXXX"
        target="_blank"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-40"
      >
        <MessageCircle size={24} fill="currentColor" />
      </a>
    </div>
  );
}
