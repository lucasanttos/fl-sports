// 👉 Aqui eu edito as informações principais da minha loja. 
export const CLIENT_INFO = {
  name: "FL SPORTS", // Nome da marca
  whatsapp: "5584992148040", // Meu WhatsApp (apenas números)
  instagram: "fl_sports", // Meu @ do Instagram
  location: "São Paulo do Potengi, RN - Rua Potengi, N• 82 - Centro", // Minha cidade
  
  
  
  // 👉 WHATSAPP
  whatsappLink: "https://wa.me/5584992148040?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20FL_SPORTS"
};

// 👉 Aqui eu crio listas de tamanhos para facilitar e não digitar um por um
const clothingSizes = ['P', 'M', 'G', 'GG', 'XG'];
const shoeSizes = ['38', '39', '40', '41', '42'];
const oneSize = ['Único'];

// 👉 Aqui eu defino as cores padrões com seus nomes e cores visuais
const standardColors = [
  { name: 'Preto', hex: '#18181b' },
  { name: 'Branco', hex: '#ffffff' },
  { name: 'Cinza', hex: '#343436' }
];

// 👉 AQUI FICA O MEU CATÁLOGO DE PRODUTOS!
// Para adicionar imagens, eu coloco a foto na pasta "public/imagens/produtos/" 
// e escrevo o caminho ali em imageUrl (ex: "/imagens/produtos/minhafoto.jpg")
export const PRODUCTS = [
  
  // CAMISAS DE TIME
  { id: 10, name: "Camisa Seleção Brasileira 24/25", price: 349.90, category: "Camisas de Time", slug: "camisas-de-time", imageUrl: "/imagens/produtos/aaa.webp", sizes: clothingSizes, colors: [{name: 'Amarelo', hex: '#facc15'}] },
  { id: 11, name: "Camisa Real Madrid Home 24/25", price: 349.90, category: "Camisas de Time", slug: "camisas-de-time", imageUrl: "/imagens/produtos/aaa.webp", sizes: clothingSizes, colors: [{name: 'Branco', hex: '#ffffff'}] },
  { id: 12, name: "Camisa Flamengo Retrô 81", price: 299.90, category: "Camisas de Time", slug: "camisas-de-time", imageUrl: "/imagens/produtos/aaa.webp", sizes: clothingSizes, colors: [{name: 'Rubro-Negro', hex: '#b91c1c'}] },
  { id: 19, name: "Camisa Arsenal Home 24/25", price: 349.90, category: "Camisas de Time", slug: "camisas-de-time", imageUrl:"/imagens/produtos/aaa.webp" , sizes : clothingSizes , colors : [{name : 'Vermelho' , hex : '#dc2626'}] },
  { id: 20, name: "Camisa Man. City Away 24/25", price: 349.90, category:"Camisas de Time" , slug:"camisas-de-time" , imageUrl:"/imagens/produtos/aaa.webp" , sizes : clothingSizes , colors : [{name : 'Azul Celeste' , hex : '#38bdf8'}] },
  { id: 27, name:"Camisa PSG Home 24/25" , price :349.90 , category :"Camisas de Time" , slug :"camisas-de-time" , imageUrl :" /imagens/produtos/aaa.webp" , sizes :clothingSizes , colors :[{name :"Azul Marinho" , hex :"#1e3a8a"}] },
  { id : 28 , name :"Camisa Bayern Away 24/25" , price :349.90 , category :"Camisas de Time" , slug :"camisas-de-time" , imageUrl :" /imagens/produtos/aaa.webp" , sizes :clothingSizes , colors :[{name :"Preto" , hex :"#18181b"}] },

  // tenis
  { id: 9, name: "Bolsa Transversal Chest Bag", price: 199.00, category: "Tenis", slug: "Tenis", imageUrl: "/imagens/produtos/aaa.webp", sizes: oneSize, colors: standardColors },

];

// 👉 AQUI EU CRIO E EDITO AS MINHAS COLEÇÕES/CATEGORIAS
export const CATEGORIES = [
  { id: 'camisas', slug: "camisas-de-time", title: "Camisas de Times", subtitle: "O manto sagrado", imgColor: "bg-zinc-700" },
  //{ id: 'acessorios', slug: "acessorios", title: "Acessórios", subtitle: "O detalhe definitivo", imgColor: "bg-black" },
{ id: 'Tenis', slug: "Tenis", title: "Tenis", subtitle: "O conforto absoluto", imgColor: "bg-zinc-900" },
//{ id: 'Camisa peruana 40.1', slug: "camisas", title: "Camisa peruana 40.1", subtitle: "O detalhe definitivo", imgColor: "bg-zinc-800" },
//{ id: 'Camisa 30.1', slug: "Camisa-30.1", title: "Camisa 30.1", subtitle: "O detalhe definitivo", imgColor: "bg-zinc-200" },
{ id: 'Camisa texturizada', slug: "camisas-texturizada", title: "Camisa texturizada", subtitle: "O detalhe definitivo", imgColor: "bg-zinc-500" },
{ id: 'Regata machão texturizada', slug: "regata-machao-texturizada", title: "Regata machão texturizada", subtitle: "O detalhe definitivo", imgColor: "bg-zinc-800" },
{ id: 'Short Tactel Premium', slug: "short-tactel-premium", title: "Short Tactel Premium", subtitle: "O detalhe definitivo", imgColor: "bg-black" },
{ id: 'Short DRY Fit', slug: "short-dry-fit", title: "Short DRY Fit", subtitle: "O detalhe definitivo", imgColor: "bg-zinc-200" },
{ id: 'Camisa DRY Fit', slug: "camisa-dry-fit", title: "Camisa DRY Fit", subtitle: "O detalhe definitivo", imgColor: "bg-zinc-200" },
{ id: 'Óculos ', slug: "oculos", title: "Óculos", subtitle: "O detalhe definitivo", imgColor: "bg-zinc-900" },
{ id: 'Boné Premium', slug: "bone-premium", title: "Boné Premium", subtitle: "O detalhe definitivo", imgColor: "bg-zinc-700" },
{ id: 'BLUSA FEM', slug: "blusa-fem", title: "Blusa Feminina", subtitle: "O conforto absoluto", imgColor: "bg-zinc-600" },
{ id: 'CONJUNTO FEM POLIAMIDA CANELADO', slug: "conjunto-fem-poliamida-canelado", title: "Conjunto Feminino Poliamida Canelado", subtitle: "O conforto absoluto", imgColor: "bg-zinc-800" },
{ id: 'SHORT DUPLO FEM', slug: "short-duplo-fem", title: "Short Duplo Feminino", subtitle: "O conforto absoluto", imgColor: "bg-zinc-700" },
{ id: 'SHORT TACTEL FEM', slug: "short-tactel-fem", title: "Short Tactel Feminino", subtitle: "O conforto absoluto", imgColor: "bg-zinc-600" }


];



// Formatação do R$
export const formatPrice = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};