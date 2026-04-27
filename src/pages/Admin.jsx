import React, { useState } from "react";
import { DOCES } from "../data";
import { Package, Users, Plus, Trash2, Edit } from "lucide-react";

export default function Admin() {
  // Se por algum motivo o DOCES vier vazio, usamos um array de segurança
  const [produtos] = useState(DOCES && DOCES.length > 0 ? DOCES : []);
  const [abaAtiva, setAbaAtiva] = useState("produtos");

  return (
    <div className="min-h-screen bg-stone-50 flex">
      <aside className="w-64 bg-[#4A3E3E] text-white p-6">
        <h1 className="font-serif text-xl mb-10 text-[#C4A484]">
          Painel Administrativo
        </h1>
        <nav className="space-y-4">
          <button
            onClick={() => setAbaAtiva("produtos")}
            className={`flex items-center gap-3 w-full p-3 rounded-xl ${abaAtiva === "produtos" ? "bg-[#C4A484]" : "hover:bg-white/10"}`}
          >
            <Package size={18} /> Produtos
          </button>
          <button
            onClick={() => setAbaAtiva("usuarios")}
            className={`flex items-center gap-3 w-full p-3 rounded-xl ${abaAtiva === "usuarios" ? "bg-[#C4A484]" : "hover:bg-white/10"}`}
          >
            <Users size={18} /> Utilizadores
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-serif text-3xl capitalize">{abaAtiva}</h2>
        </div>

        {abaAtiva === "produtos" ? (
          <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-stone-50 border-b">
                <tr>
                  <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Produto
                  </th>
                  <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Preço
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {produtos.length > 0 ? (
                  produtos.map((doce) => (
                    <tr key={doce.id}>
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          {/* Verificamos se é 'imagem' ou 'img' para não falhar */}
                          <img
                            src={doce.imagem || doce.img}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <span className="font-serif text-lg">
                            {doce.nome || doce.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-6 font-bold text-[#C4A484]">
                        R$ {doce.preco?.toFixed(2)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="2"
                      className="p-10 text-center text-stone-400 italic"
                    >
                      Nenhum produto encontrado no ficheiro data.js
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-20 text-center bg-white rounded-[2rem] border border-dashed border-stone-200 text-stone-400">
            Aba de utilizadores (aguardando backend)
          </div>
        )}
      </main>
    </div>
  );
}
