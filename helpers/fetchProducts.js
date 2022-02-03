const fetchProducts = (item) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  if (!item || item === undefined) {
    throw new Error('You must provide an url');
  }
  const retorno = fetch(url)
    .then((response) => response.json());
  return retorno;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
