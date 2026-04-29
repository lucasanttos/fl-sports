# ⚡ FL Sports - E-Commerce Premium

Bem-vindo ao repositório oficial da **FL Sports**, um e-commerce de alta conversão focado em vestuário e equipamentos esportivos de alta performance e streetwear de vanguarda. 

Este projeto foi desenhado com foco em **Performance, SEO e Experiência do Usuário (UX)**, culminando em um fluxo de checkout direto via WhatsApp para maximizar o relacionamento com o cliente.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema front-end:

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) para segurança e tipagem estática.
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) para design responsivo e customizado.
* **Animações:** [Framer Motion](https://www.framer.com/motion/) para transições fluidas e feedback visual Sênior.
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Analytics:** `@next/third-parties/google` (Google Analytics otimizado)

---

## ✨ Funcionalidades Principais

- **🛍️ Catálogo Dinâmico:** Produtos organizados por categorias (Performance, Streetwear, Combos, etc.) utilizando rotas dinâmicas `[slug]`.
- **🛒 Carrinho Inteligente (Context API):** Gerenciamento global de estado do carrinho. Adição, remoção e alteração de quantidades em tempo real.
- **💳 Cálculo de Taxas Automático:** Sistema que identifica o método de pagamento selecionado e aplica a taxa da maquininha (ex: Cartão de Crédito) no subtotal.
- **📱 Checkout via WhatsApp:** O carrinho gera automaticamente um resumo completo do pedido (Itens, Cores, Tamanhos, Endereço e Total com taxas) e envia diretamente para o WhatsApp do lojista.
- **🔍 Busca Integrada:** Pesquisa em tempo real de produtos no catálogo.
- **💨 Modal Quick Add:** Visualização rápida de detalhes do produto sem precisar sair da página atual.
- **🎯 SEO Otimizado:** Meta tags dinâmicas e Open Graph (para compartilhamento perfeito com foto no Instagram/WhatsApp) configurados.

---

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para testar o projeto no seu computador:

### Pré-requisitos
* Ter o [Node.js](https://nodejs.org/) instalado.
* Ter o Git instalado.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/fl-sports.git](https://github.com/SEU_USUARIO/fl-sports.git)
Entre na pasta do projeto:

Bash
cd fl-sports
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
Acesse no navegador:
Abra http://localhost:3000 para ver o site em funcionamento.

📂 Estrutura de Pastas (Resumo)
src/app/: Contém as rotas e páginas da aplicação (Home, Pesquisa, Categorias).

src/components/: Componentes reutilizáveis (Navbar, Footer, Modal, ScrollReveal).

src/context/: Contexto global do Carrinho (CartContext.tsx).

src/data/: Arquivo "Fonte da Verdade" (config.ts) contendo informações da loja, banco de produtos e regras de negócio.

public/: Imagens, favicons e recursos estáticos.
