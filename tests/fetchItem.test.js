require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');

  // Teste se fetchItem é uma função;
  it('Teste se fetchItem é uma função;', () => {
    expect(typeof (fetchItem)).toBe('function');
  });

  // Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;
  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    const res = await fetchItem('https://api.mercadolibre.com/items/MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })

  // Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";
  it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    const res = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url)
  });
  
  // Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.
  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item)
  });

  // Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    try{
      await fetchItem()
    } catch(error) {
    expect(error).toEqual(new Error('You must provide an url'))
    }
  });

});
