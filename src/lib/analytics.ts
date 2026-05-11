export const GA_MEASUREMENT_ID = "G-RW30GQ41P9";

export const trackEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window === "undefined") return;

  // @ts-ignore
  if (window.gtag) {
    // @ts-ignore
    window.gtag("event", eventName, params);
  }
};

/* =========================
   PRODUTO
========================= */

export const trackProductView = (product: {
  id: string;
  name: string;
  category: string;
  price: number;
}) => {
  trackEvent("view_item", {
    currency: "BRL",
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
      },
    ],
  });
};

/* =========================
   CATEGORIA
========================= */

export const trackCategoryView = (category: string) => {
  trackEvent("view_item_list", {
    item_list_name: category,
  });
};

/* =========================
   CARRINHO
========================= */

export const trackAddToCart = (product: {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity?: number;
}) => {
  trackEvent("add_to_cart", {
    currency: "BRL",
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        quantity: product.quantity || 1,
      },
    ],
  });
};

export const trackRemoveFromCart = (product: {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity?: number;
}) => {
  trackEvent("remove_from_cart", {
    currency: "BRL",
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        quantity: product.quantity || 1,
      },
    ],
  });
};

/* =========================
   CHECKOUT
========================= */

export const trackBeginCheckout = (
  total: number,
  items: number
) => {
  trackEvent("begin_checkout", {
    currency: "BRL",
    value: total,
    items_count: items,
  });
};

/* =========================
   WHATSAPP
========================= */

export const trackWhatsAppClick = (
  location: string
) => {
  trackEvent("whatsapp_click", {
    location,
  });
};

/* =========================
   PESQUISA
========================= */

export const trackSearch = (
  searchTerm: string
) => {
  trackEvent("search", {
    search_term: searchTerm,
  });
};