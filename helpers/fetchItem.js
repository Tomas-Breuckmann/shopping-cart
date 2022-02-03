const fetchItem = (sku) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${sku}`;
  if (!sku || sku === undefined) {
    throw new Error('You must provide an url');
  }
  const retorno = fetch(url)
    .then((response) => response.json());
  return retorno;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
