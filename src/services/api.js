export const getCategories = async () => {
  try {
    const url = 'https://api.mercadolibre.com/sites/MLB/categories';
    const search = await fetch(url);
    const response = await search.json();
    return response;
  } catch (error) {
    return 'You must provide an url';
  }
};

export const getProductsFromCategoryAndQuery = async (CATEGORY_ID, QUERY) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}  `;
    const search = await fetch(url);
    const response = await search.json();
    return response;
  } catch (error) {
    return 'You must provide an url';
  }
};

export const getProductsFromId = async (id) => {
  try {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const search = await fetch(url);
    const response = await search.json();
    return response;
  } catch (error) {
    return 'You must provide an url';
  }
};
