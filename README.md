# 🍬 Ateliê Gourmet - E-commerce Boutique

Um catálogo digital artesanal desenvolvido para oferecer uma experiência de compra premium e fluida. O projeto foca em design minimalista, performance e segurança administrativa.

## 🚀 Funcionalidades

- **Vitrine Dinâmica**: Galeria de produtos com carregamento otimizado e interface responsiva.
- **Carrinho de Compras (Cart)**: Sistema de sacola lateral persistente para uma jornada de compra sem interrupções.
- **Painel Administrativo Privado**: Área restrita para gestão de métricas confidenciais.
- **Segurança de Rotas**: Proteção de dados financeiros através de autenticação por estado (Login).
- **Checkout Integrado**: Fluxo simplificado para finalização de pedidos.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **Vite**: Ferramenta de build de última geração para performance rápida em desenvolvimento.
- **Tailwind CSS**: Framework utilitário para estilização moderna e responsiva.
- **Lucide React**: Biblioteca de ícones leves e elegantes.
- **React Router**: Gestão de navegação e proteção de rotas privadas.

## 🔐 Acesso Administrativo (Teste)

Para garantir a confidencialidade das métricas de negócio (faturamento e ticket médio), o painel está protegido:

1. Aceda à rota `/login`.
2. Utilize as credenciais de teste configuradas no sistema.
3. Após o login bem-sucedido, o sistema redireciona automaticamente para o Dashboard Administrativo.

## 📦 Como Executar o Projeto

```bash
# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev