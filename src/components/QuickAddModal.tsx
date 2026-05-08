"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/config';

export default function QuickAddModal() {
  const { quickAddProduct, setQuickAddProduct, addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    if (quickAddProduct) {
      document.body.style.overflow = 'hidden';
      setSelectedSize('');
      setSelectedColor(
        quickAddProduct.colors.length === 1 ? quickAddProduct.colors[0].name : ''
      );
      setIsImageExpanded(false);
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [quickAddProduct]);

  if (!quickAddProduct) return null;

  const productImages = quickAddProduct.images?.length > 0 ? quickAddProduct.images : [];
  const hasImages = productImages.length > 0;
  const hasMultipleImages = productImages.length > 1;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);

  const canAdd = selectedSize && selectedColor;

  const handleAdd = () => {
    if (!canAdd) return;
    addToCart(quickAddProduct, selectedColor, selectedSize);
    setQuickAddProduct(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center sm:p-4">

        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickAddProduct(null)}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Principal */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative w-full bg-white shadow-2xl overflow-hidden
            rounded-t-3xl sm:rounded-xl
            max-h-[92dvh] sm:max-h-[82vh]
            flex flex-col sm:flex-row
            sm:max-w-[560px]
          "
        >
          {/* ── Coluna Esquerda: Imagem ── */}
          <div className="relative bg-zinc-50 flex-shrink-0 sm:w-[48%] group flex flex-col">

            {/* Botão fechar — mobile */}
            <button
              onClick={() => setQuickAddProduct(null)}
              className="absolute top-3 right-3 z-20 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md sm:hidden"
              aria-label="Fechar"
            >
              <X size={16} className="text-zinc-700" />
            </button>

            {hasImages ? (
              <div className="flex flex-col h-full">

                {/* Imagem Principal */}
                <div
                  className="relative flex-1 cursor-zoom-in overflow-hidden"
                  onClick={() => setIsImageExpanded(true)}
                  style={{ minHeight: 0 }}
                >
                  <img
                    src={productImages[currentImageIndex]}
                    alt={`${quickAddProduct.name} - foto ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    style={{ maxHeight: '38vh', minHeight: '200px' }}
                  />

                  {/* Overlay de Zoom */}
                  <div className="
                    absolute inset-0 flex items-center justify-center
                    bg-black/0 group-hover:bg-black/10
                    opacity-0 group-hover:opacity-100
                    transition-all duration-200 pointer-events-none
                  ">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2.5">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Navegação */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="
                          absolute left-2 top-1/2 -translate-y-1/2 z-10
                          bg-white/90 hover:bg-white text-zinc-800
                          p-1.5 rounded-full shadow-lg
                          transition-all duration-150
                          opacity-0 group-hover:opacity-100
                        "
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="
                          absolute right-2 top-1/2 -translate-y-1/2 z-10
                          bg-white/90 hover:bg-white text-zinc-800
                          p-1.5 rounded-full shadow-lg
                          transition-all duration-150
                          opacity-0 group-hover:opacity-100
                        "
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}

                  {/* Contador de imagens */}
                  {hasMultipleImages && (
                    <div className="
                      absolute bottom-2 right-2
                      bg-black/50 backdrop-blur-sm
                      text-white text-[10px] font-semibold
                      px-2 py-0.5 rounded-full
                    ">
                      {currentImageIndex + 1}/{productImages.length}
                    </div>
                  )}
                </div>

                {/* Miniaturas */}
                {hasMultipleImages && (
                  <div className="flex gap-1.5 p-2.5 bg-white border-t border-zinc-100 overflow-x-auto">
                    {productImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`
                          relative flex-shrink-0 w-11 h-11 rounded-lg overflow-hidden
                          ring-offset-1 transition-all duration-150
                          ${currentImageIndex === index
                            ? 'ring-2 ring-black'
                            : 'ring-1 ring-zinc-200 opacity-55 hover:opacity-100 hover:ring-zinc-400'
                          }
                        `}
                        aria-label={`Ver foto ${index + 1}`}
                      >
                        <img
                          src={img}
                          alt={`Miniatura ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

              </div>
            ) : (
              <div className="w-full flex items-center justify-center py-16">
                <ShoppingBag className="w-16 h-16 text-zinc-200" />
              </div>
            )}
          </div>

          {/* ── Coluna Direita: Info + Opções ── */}
          <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
            <div className="p-5 sm:p-6 flex flex-col flex-1">

              {/* Header */}
              <div className="flex justify-between items-start mb-5">
                <div className="flex-1 pr-3">
                  <p className="hidden sm:block text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em] mb-1.5">
                    {quickAddProduct.category}
                  </p>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight leading-snug text-zinc-900">
                    {quickAddProduct.name}
                  </h3>
                  <p className="text-lg sm:text-xl font-bold text-black mt-2">
                    {formatPrice(quickAddProduct.price)}
                  </p>
                </div>

                {/* Botão fechar — desktop */}
                <button
                  onClick={() => setQuickAddProduct(null)}
                  className="hidden sm:flex items-center justify-center w-8 h-8 hover:bg-zinc-100 rounded-full transition-colors flex-shrink-0"
                  aria-label="Fechar"
                >
                  <X size={18} className="text-zinc-600" />
                </button>
              </div>

              {/* Separador */}
              <div className="h-px bg-zinc-100 mb-5" />

              {/* Cores */}
              {quickAddProduct.colors.length > 0 && (
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-[0.12em]">
                      Cor
                    </span>
                    <span className="text-xs text-zinc-400">
                      {selectedColor || 'Selecione'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {quickAddProduct.colors.map(color => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        title={color.name}
                        aria-label={`Cor ${color.name}`}
                        className={`
                          relative w-7 h-7 rounded-full transition-all duration-150
                          ${selectedColor === color.name
                            ? 'ring-2 ring-black ring-offset-2 scale-110'
                            : 'ring-1 ring-zinc-200 hover:ring-zinc-400 hover:scale-105'
                          }
                        `}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Tamanhos */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-[0.12em]">
                    Tamanho
                  </span>
                  <span className="text-xs text-zinc-400">
                    {selectedSize || 'Selecione'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickAddProduct.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        min-w-[42px] px-3 py-2 text-[11px] font-bold uppercase tracking-wide
                        rounded-lg border transition-all duration-150
                        ${selectedSize === size
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-800 hover:text-black'
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Botão Adicionar */}
              <div className="mt-auto">
                <button
                  onClick={handleAdd}
                  disabled={!canAdd}
                  className={`
                    w-full py-3.5 rounded-xl font-bold uppercase tracking-[0.1em] text-sm
                    transition-all duration-200
                    ${canAdd
                      ? 'bg-black text-white hover:bg-zinc-800 active:scale-[0.98] shadow-sm'
                      : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                    }
                  `}
                >
                  {canAdd
                    ? <span className="flex items-center justify-center gap-2">
                        <ShoppingBag size={16} />
                        Adicionar ao Carrinho
                      </span>
                    : 'Selecione cor e tamanho'
                  }
                </button>
              </div>

            </div>
          </div>

        </motion.div>

        {/* ── Modal de Imagem Expandida ── */}
        <AnimatePresence>
          {isImageExpanded && hasImages && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] flex items-center justify-center"
              onClick={() => setIsImageExpanded(false)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/92 backdrop-blur-md" />

              {/* Container da imagem   */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex items-center justify-center"
                style={{
                  width: 'min(90vw, 560px)',
                  height: 'min(85vh, 640px)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={productImages[currentImageIndex]}
                  alt={quickAddProduct.name}
                  className="w-full h-full object-contain rounded-lg"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />

                {/* Fechar */}
                <button
                  onClick={() => setIsImageExpanded(false)}
                  className="
                    absolute -top-3 -right-3
                    bg-white text-zinc-900
                    w-8 h-8 rounded-full shadow-xl
                    flex items-center justify-center
                    hover:bg-zinc-100 transition-colors
                  "
                  aria-label="Fechar"
                >
                  <X size={16} />
                </button>

                {/* Navegação */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="
                        absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                        bg-white text-zinc-900 hover:bg-zinc-100
                        w-9 h-9 rounded-full shadow-xl
                        flex items-center justify-center
                        transition-all duration-150
                      "
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="
                        absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                        bg-white text-zinc-900 hover:bg-zinc-100
                        w-9 h-9 rounded-full shadow-xl
                        flex items-center justify-center
                        transition-all duration-150
                      "
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

                {/* Contador */}
                {hasMultipleImages && (
                  <div className="
                    absolute -bottom-10 left-1/2 -translate-x-1/2
                    flex items-center gap-2
                  ">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                        className={`
                          rounded-full transition-all duration-200
                          ${currentImageIndex === index
                            ? 'w-5 h-1.5 bg-white'
                            : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                          }
                        `}
                      />
                    ))}
                  </div>
                )}

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </AnimatePresence>
  );
}