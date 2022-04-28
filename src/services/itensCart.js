const PRODUCT_CART = 'itens';
const TIMEOUT = 500;
const SUCCESS_STATUS = 'OK';

if (!JSON.parse(localStorage.getItem(PRODUCT_CART))) {
  localStorage.setItem(PRODUCT_CART, JSON.stringify([]));
}

export const getCart = () => JSON.parse(localStorage.getItem(PRODUCT_CART));

export const setToCart = (itensSalvos) => localStorage
  .setItem(PRODUCT_CART, JSON.stringify(itensSalvos));

const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getItensCart = () => new Promise((resolve) => {
  const itensSalvos = getCart();
  simulateRequest(itensSalvos)(resolve);
});

export const addItem = (item) => new Promise((resolve) => {
  if (item) {
    const itensSalvos = getCart();
    setToCart([...itensSalvos, item]);
  }
  simulateRequest(SUCCESS_STATUS)(resolve);
});

/* export const removeSong = (song) => new Promise((resolve) => {
  const favoriteSongs = readFavoriteSongs();
  saveFavoriteSongs(favoriteSongs.filter((s) => s.trackId !== song.trackId));
  simulateRequest(SUCCESS_STATUS)(resolve);
}); */
