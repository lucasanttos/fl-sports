// 👉 Informações principais da loja.
export const CLIENT_INFO = {
  name: "FL_SPORTS",
  whatsapp: "5584992148040",
  instagram: "fl_sports",
  location: "São Paulo do Potengi, RN",
  //  Link limpo e direto para o WhatsApp
  whatsappLink: "https://wa.me/5584992148040?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20FL_SPORTS"
};

// 👉 AQUI EU CONFIGURO A TAXA DA MAQUININHA DE CARTÃO
export const CARD_FEE_PERCENTAGE = 5; // Ex: 5 significa 5% de acréscimo.

// 👉 Lógica de formatação de preço para R$
export const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
};

// 👉 Listas de tamanhos e cores
const clothingSizes = ["P", "M", "G", "GG"];
const shoeSizes = ["38", "39", "40", "41", "42"];
const oneSize = ["Único"];

const standardColors = [
  { name: "Preto", hex: "#18181b" },
  { name: "Branco", hex: "#ffffff" },
  { name: "Cinza", hex: "#71717a" }
];

// 👉 CATÁLOGO DE PRODUTOS
export const PRODUCTS = [
  // Combos (mantido)
  { id: 31, name: "Kit 2 Camisas Dri-Fit Pro", price: 149.90, category: "Combos", slug: "combos", imageUrl: "/imagens/produtos/combo1.jpeg", sizes: clothingSizes, colors: [{ name: "Preto + Branco", hex: "#18181b" }] },
  { id: 32, name: "Combo Treino (Short + Top)", price: 199.90, category: "Combos", slug: "combos", imageUrl: "/imagens/produtos/combo1.jpeg", sizes: clothingSizes, colors: standardColors },
  { id: 34, name: "Combo Treino camisa + short homem", price: 199.90, category: "Combos", slug: "combos", imageUrl: "/imagens/produtos/combo1.jpeg", sizes: clothingSizes, colors: standardColors },

  // Camisas de Time (ids diferentes)
  {
    id: 10,
    name: "Camisa Seleção Brasileira 24/25",
    price: 349.90,
    category: "Camisas de Time",
    slug: "camisas-de-time",
    imageUrl: "/imagens/produtos/aaa.webp",
    sizes: clothingSizes,
    colors: [{ name: "Amarelo", hex: "#facc15" }]
  },
  {
    id: 11,
    name: "Camisa Seleção Brasileira 24/25",
    price: 349.90,
    category: "Camisas de Time",
    slug: "camisa-30-1",
    imageUrl: "/imagens/produtos/aaa.webp",
    sizes: clothingSizes,
    colors: [{ name: "Amarelo", hex: "#facc15" }]
  },
  

  // SHORT TACTEL COM ELASTANO
  {
    id: 35,
    name: "Short Tactel com Elastano",
    price: 119.90,
    category: "short-tactel",
    slug: "short-tactel",
    imageUrl: "/imagens/produtos/Short tactel com elastano .jpeg",
    sizes: ["M", "G", "GG"],
    colors: [
      { name: "Preto", hex: "#18181b" },
      { name: "Verde claro", hex: "#22c55e" },
      { name: "Azul claro", hex: "#3b82f6" },
      { name: "Vermelho", hex: "#ef4444" },
      { name: "Cinza", hex: "#71717a" }
    ]
  },

  // SHORT DUPLO FEMININO
  {
    id: 36,
    name: "Short Duplo Feminino",
    price: 129.90,
    category: "short-duplo-fem",
    slug: "short-duplo-fem",
    imageUrl: "/imagens/produtos/Short duplo.jpeg",
    sizes: ["P", "M", "G", "GG"],
    colors: [
      { name: "Branco", hex: "#ffffff" },
      { name: "Cinza", hex: "#71717a" },
      { name: "Preto", hex: "#18181b" },
      { name: "Azul marinho", hex: "#1e40af" },
      { name: "Azul claro", hex: "#3b82f6" }
    ]
  },

  // SHORT NIKE POLIAMIDA
  {
    id: 37,
    name: "Short Nike Poliamida",
    price: 199.90,
    category: "short-dry-fit",
    slug: "short-dry-fit",
    imageUrl: "/imagens/produtos/SHORT NIKE POLIAMIDA.jpeg",
    sizes: ["M", "G", "GG"],
    colors: [
      { name: "Preto", hex: "#000000" },
      { name: "Rosa", hex: "#f472b6" },
      { name: "Azul claro", hex: "#3b82f6" },
      { name: "Branco", hex: "#ffffff" }
    ]
  },

  // BLUSA POLIAMIDA
  {
    id: 38,
    name: "Blusa Poliamida",
    price: 159.90,
    category: "conjunto-feminino-poliamida",
    slug: "blusa-feminina",
    imageUrl: "/imagens/produtos/BLUSA POLIAMIDA .jpeg",
    sizes: ["M", "G", "GG"],
    colors: [
      { name: "Preto", hex: "#18181b" },
      { name: "Branco", hex: "#ffffff" },
      { name: "Azul", hex: "#3b82f6" },
      { name: "Cinza", hex: "#71717a" },
      { name: "Vermelho", hex: "#ef4444" },
      { name: "Vinho", hex: "#991b1b" },
      { name: "Verde claro", hex: "#22c55e" },
      { name: "Verde militar", hex: "#4d7c0f" },
      { name: "Rosa", hex: "#f472b6" }
    ]
  },

  // CAMISA ADIDAS TRÊS LISTRAS
  {
    id: 39,
    name: "Camisa Adidas Três Listras",
    price: 249.90,
    category: "camisa-dry-fit",
    slug: "camisa-dry-fit",
    imageUrl: "/imagens/produtos/CAMISA ADIDAS TRÊS LISTRAS .jpeg",
    sizes: ["P", "M", "G", "GG"],
    colors: [
      { name: "Preto", hex: "#000000" },
      { name: "Branco", hex: "#ffffff" },
      { name: "Azul marinho", hex: "#1e40af" },
      { name: "Azul bebê", hex: "#dbeafe" },
      { name: "Vermelho", hex: "#ef4444" },
      { name: "Verde militar", hex: "#4d7c0f" },
      { name: "Rosa", hex: "#f472b6" },
      { name: "Verde limão", hex: "#a8f07a" }
    ]
  },

  // SHORT POLIAMIDA
  {
    id: 40,
    name: "Short Poliamida",
    price: 149.90,
    category: "short-dry-fit",
    slug: "short-dry-fit",
    imageUrl: "/imagens/produtos/Short poliamida .jpeg",
    sizes: ["M", "G", "GG"],
    colors: [
      { name: "Rosa Pink", hex: "#e879f9" },
      { name: "Rosa claro", hex: "#f9a8d4" },
      { name: "Preto", hex: "#000000" },
      { name: "Branco", hex: "#ffffff" },
      { name: "Verde escuro", hex: "#14532d" },
      { name: "Verde claro", hex: "#22c55e" },
      { name: "Azul royal", hex: "#1e3a8a" },
      { name: "Azul claro", hex: "#3b82f6" }
    ]
  },

  // CAMISA PLUS 1
  {
    id: 41,
    name: "Camisa Plus - Estilo Clássico",
    price: 179.90,
    category: "Camisa Plus",
    slug: "camisa-plus",
    imageUrl: "/imagens/produtos/CAMISAS PLUS.jpeg",
    sizes: ["G1", "G2", "G3"],
    colors: [
      { name: "Preto", hex: "#18181b" },
      { name: "Azul royal", hex: "#1e3a8a" },
      { name: "Cinza", hex: "#71717a" },
      { name: "Branco", hex: "#ffffff" }
    ]
  },
  {
    id: 43,
    name: "Camisa Plus - Estilo Premium",
    price: 199.90,
    category: "Camisa Plus",
    slug: "camisa-plus",
    imageUrl: "/imagens/produtos/CAMISAS PLUS.jpeg",
    sizes: ["G3", "G4", "G5"],
    colors: [
      { name: "Branco", hex: "#ffffff" },
      { name: "Vermelho", hex: "#ef4444" },
      { name: "Azul marinho", hex: "#1e40af" },
      { name: "Roxo", hex: "#9333ea" }
    ]
  },
  {
    id: 44,
    name: "Camisa Plus - Estilo Premium",
    price: 199.90,
    category: "Camisa Plus",
    slug: "camisa-plus",
    imageUrl: "/imagens/produtos/CAMISAS PLUS.jpeg",
    sizes: ["G3", "G4", "G5"],
    colors: [
      { name: "Branco", hex: "#ffffff" },
      { name: "Vermelho", hex: "#ef4444" },
      { name: "Azul marinho", hex: "#1e40af" },
      { name: "Roxo", hex: "#9333ea" }
    ]
  },

  // BONÉ PREMIUM
  {
    id: 42,
    name: "Boné Premium",
    price: 89.90,
    category: "acessorios",
    slug: "bone",
    imageUrl: "/imagens/produtos/bone.jpeg",
    sizes: oneSize,
    colors: standardColors
  }
];

// 👉 COLEÇÕES/CATEGORIAS
export const CATEGORIES = [
  { id: "combos", slug: "combos", title: "Combos", subtitle: "Leve mais pagando menos", imgColor: "bg-red-900" },
  { id: "camisas-time", slug: "camisas-de-time", title: "Camisas de Time", subtitle: "Vista seu time com estilo", imgColor: "bg-yellow-700" },
  { id: "peruana", slug: "camisa-peruana-40-1", title: "Camisa Peruana 40.1", subtitle: "Qualidade premium e caimento perfeito", imgColor: "bg-zinc-900" },
  { id: "texturizada", slug: "camisa-texturizada", title: "Camisa Texturizada", subtitle: "Detalhes que fazem a diferença", imgColor: "bg-zinc-800" },
  { id: "30-1", slug: "camisa-30-1", title: "Camisa 30.1", subtitle: "Conforto e durabilidade no dia a dia", imgColor: "bg-zinc-700" },
  { id: "dryfit", slug: "camisa-dry-fit", title: "Camisa Dry Fit", subtitle: "Respirável e ideal para treino", imgColor: "bg-blue-700" },
  { id: "tenis", slug: "tenis-esportivo", title: "Tênis Esportivo", subtitle: "Performance e conforto nos pés", imgColor: "bg-zinc-900" },
  { id: "oculos", slug: "oculos", title: "Óculos", subtitle: "Estilo e proteção no seu dia", imgColor: "bg-purple-700" },
  { id: "tactel", slug: "short-tactel", title: "Short Tactel", subtitle: "Leveza e liberdade no movimento", imgColor: "bg-green-700" },
  { id: "dryfit-short", slug: "short-dry-fit", title: "Short Dry Fit", subtitle: "Treine com máximo desempenho", imgColor: "bg-blue-800" },
  { id: "short-duplo", slug: "short-duplo-fem", title: "Short Duplo Feminino", subtitle: "Conforto e segurança no treino", imgColor: "bg-pink-700" },
  { id: "blusa-fem", slug: "blusa-feminina", title: "Blusas Femininas", subtitle: "Estilo e leveza para o dia a dia", imgColor: "bg-rose-600" },
  { id: "conjunto-fem", slug: "conjunto-feminino-poliamida", title: "Conjunto Feminino Poliamida", subtitle: "Elegância e performance combinadas", imgColor: "bg-indigo-700" },
  { id: "bone", slug: "bone", title: "Bonés", subtitle: "Estilo e proteção no seu dia", imgColor: "bg-purple-700" },
  { id: "Camisa Plus", slug: "camisa-plus", title: "Camisa Plus", subtitle: "Estilo e proteção no seu dia", imgColor: "bg-purple-700" }
];