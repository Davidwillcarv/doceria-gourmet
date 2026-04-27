import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, X, Trash2 } from "lucide-react";
import { DOCES } from "../data";

export default function Home({ cliente, setCliente }) {
  const navigate = useNavigate();

  // 1. ESTADOS (Devem ficar no topo da função)
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 2. FUNÇÕES DE LÓGICA (Dentro da função Home, mas fora do return)
  const adicionarAoCarrinho = (doce) => {
    const novoItem = {
      ...doce,
      cartId: Math.random().toString(36).substr(2, 9),
    };
    setItensCarrinho([...itensCarrinho, novoItem]);
    setIsCartOpen(true);
  };

  const removerItem = (cartId) => {
    setItensCarrinho(itensCarrinho.filter((item) => item.cartId !== cartId));
  };

  const irParaCheckout = () => {
    if (itensCarrinho.length === 0) {
      alert("Sua sacola está vazia!");
      return;
    }
    setIsCartOpen(false);
    navigate("/checkout");
  };

  const total = itensCarrinho.reduce((acc, item) => acc + item.preco, 0);

  // 3. O RETURN (Só pode haver UM return principal no componente)
  return (
    <div className="min-h-screen bg-[#FCD5D9] font-serif text-[#6B4E54]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-[#6B4E54]/50">
        <div className="flex items-center gap-10">
          <div className="w-20 h-20 rounded-full border border-[#6B4E54] flex items-center justify-center bg-white font-bold italic text-xs">
            Luz Doces
          </div>
          <span className="italic text-xl tracking-tight hidden ">
            Luz Doces
          </span>
        </div>

        <div className="flex items-center gap-6">
          {cliente ? (
            <span className="text-[10px] uppercase font-bold opacity-70">
              Olá, {cliente.name}
            </span>
          ) : (
            <Link
              to="/login"
              className="text-[10px] font-sans uppercase tracking-widest opacity-60"
            >
              Entrar
            </Link>
          )}

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-[#6B4E54]"
          >
            <ShoppingCart size={22} strokeWidth={1.5} />
            {itensCarrinho.length > 0 && (
              <span className="absolute top-0 right-0 bg-[#B58D94] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                {itensCarrinho.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-40 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl italic mb-4">
          Doçura em cada detalhe
        </h1>
        <div className="h-[1px] w-20 bg-[#6B4E54] mx-auto opacity-20"></div>
      </header>

      {/* Vitrine */}
      <main className="max-w-[860px] mx-auto px-4 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {DOCES.map((doce) => (
            <div
              key={doce.id}
              className="group bg-white rounded-[1.5rem] p-3 shadow-sm border border-white/50 transition-all hover:shadow-md text-center"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-[#FCD5D9]/20">
                <img
                  src={doce.imagem}
                  alt={doce.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => adicionarAoCarrinho(doce)}
                  className="absolute inset-x-2 bottom-2 bg-[#6B4E54] text-white text-[20px] font-bold uppercase py-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                >
                  Adicionar
                </button>
              </div>
              <div className="mt-3">
                <h3 className="text-sm italic leading-tight min-h-[32px] flex items-center justify-center">
                  {doce.nome}
                </h3>
                <p className="text-[#B58D94] font-bold text-[20px] mt-1">
                  R$ {doce.preco.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-white border-t border-[#FCD5D9] py-4 px-8 font-serif text-[#6B4E54]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-3 items-center">
          {/* ESQUERDA: Logo e Marca */}
          <div className="flex items-center gap-3 justify-self-start">
            <div className="w-8 h-8 rounded-full border border-[#6B4E54] flex items-center justify-center bg-[#FCD5D9]/20 font-bold italic text-[px]">
              Luz
            </div>
            <div className="flex flex-col">
              <span className="italic text-[20px] tracking-tight leading-none">
                Luz Doces
              </span>
              <span className="text-[15px] font-sans uppercase tracking-widest opacity-100">
                Confeitaria
              </span>
            </div>
          </div>

          {/* CENTRAL: Informações de Contato (Compactas em linha ou mini-lista) */}
          <div className="flex flex-col items-center text-[15px] font-sans space-y-0.5 justify-self-center">
            <p className="flex items-center gap-2">📍 São Paulo, Brasil</p>
            <p className="flex items-center gap-2">📞 +55 0 0000-0000</p>
            <p className="italic opacity-100 text-[15px]">
              Seg a Sáb: 09h às 19h
            </p>
          </div>

          {/* DIREITA: Redes Sociais */}
          <div className="flex items-center gap-6 justify-self-end">
            <a
              href="#"
              className="hover:text-[#B58D94] transition-colors uppercase text-[15px] tracking-[0.4em] font-bold"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-[#B58D94] transition-colors uppercase text-[15px] tracking-[0.4em] font-bold"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright minimalista logo abaixo */}
        <div className="text-center mt-4 pt-2 border-t border-[#FCD5D9]/100">
          <p className="text-[15px] uppercase tracking-[0.1em] opacity-200 font-sans">
            © 2026 Luz Doces Todos os Direitos Reservados
          </p>
        </div>
      </footer>

      {/* Sacola Lateral */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-[#6B4E54]/20 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="relative w-full max-w-[350px] bg-white h-full shadow-2xl flex flex-col p-8">
            <div className="flex justify-between items-center mb-8 border-b border-[#FCD5D9] pb-4 text-[#6B4E54]">
              <h2 className="italic text-2xl">Sua Sacola</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {itensCarrinho.length === 0 ? (
                <p className="text-center opacity-40 italic py-10">
                  A sacola está vazia...
                </p>
              ) : (
                itensCarrinho.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex gap-4 items-center bg-[#FCD5D9]/10 p-3 rounded-2xl"
                  >
                    <img
                      src={item.imagem}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div className="flex-1 text-left">
                      <p className="text-xs italic">{item.nome}</p>
                      <p className="font-bold text-[10px] text-[#B58D94]">
                        R$ {item.preco.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => removerItem(item.cartId)}
                      className="text-red-300"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="pt-6 border-t border-[#FCD5D9] mt-auto">
              <div className="flex justify-between mb-6 text-xl italic text-[#6B4E54]">
                <span>Total</span>
                <span className="font-bold">R$ {total.toFixed(2)}</span>
              </div>
              <button
                onClick={irParaCheckout}
                className="w-full bg-[#6B4E54] text-white py-4 rounded-2xl font-bold uppercase text-[10px] tracking-widest shadow-lg hover:bg-[#B58D94] transition-colors"
              >
                Finalizar no Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
