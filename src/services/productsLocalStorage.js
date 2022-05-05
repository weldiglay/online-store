export const productsIDSaved = () => JSON.parse(localStorage.getItem('itens'));

export const addProductsToCart = (id) => {
  const productIDLocalStorage = productsIDSaved() || [];
  const foundID = productIDLocalStorage.find((item) => item.productId === id);

  if (foundID) {
    const findIndex = productIDLocalStorage.indexOf(foundID); // find the first element of an array
    const { count, productId } = foundID;
    const result = count + 1;
    productIDLocalStorage[findIndex] = { count: result, productId }; // se encontrar +1 recebe count e o id. 

    localStorage.setItem('cart', JSON.stringify(productIDLocalStorage));
  } else {
    localStorage
      .setItem('cart',
        JSON.stringify([...productIDLocalStorage, { count: 1, productId: id }]));
  }
};
