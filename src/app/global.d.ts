// Esse arquivo ensina o TypeScript a entender arquivos CSS e módulos
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}