function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function selecaoDados(array) {
  return array.map((element) => {
    const { id: sku, title: name, price: salePrice, thumbnail: image } = element;
    return { sku, name, salePrice, image };
  });
}

function adicionaItens(array) {
  const itemsSection = document.querySelector('.items');
  array.forEach((element) => {
    const itemMostruario = createProductItemElement(element);
    itemsSection.appendChild(itemMostruario);
  });
}

function configuraBotoes(array) {
  const botoes = document.querySelectorAll('.item__add'); // array com todos os elementos de classe item_add, ou seja, os botões
  const carrinho = document.querySelector('.cart__items');
  console.log(carrinho);
  botoes.forEach((item, index) => {
    const { sku, name, salePrice } = array[index];
    item.addEventListener('click', () => {
      const li = createCartItemElement({ sku, name, salePrice });
      console.log(li);
      console.log(carrinho);
      carrinho.appendChild(li);
    });
  });
}

function limparCarrinho() {
  const ol = document.querySelector('.cart__items');
  ol.innerHTML = '';
}

window.onload = async () => {
  const arrayDados = await fetchProducts('computador'); // dados no formato json
  const arrayDadosResults = await arrayDados.results; // parte results dos dados recebidos
  const arrayDadosSelecao = selecaoDados(arrayDadosResults); // retorna um array com os dados que interessam: sku (id), name, salePrice (price) e image (thumbnail)
  // const itemsSection = document.querySelector('.items'); // pega o local onde irá cada item
  adicionaItens(arrayDadosSelecao); // adiciona cada item no items, mostrando assim os itens a venda
  configuraBotoes(arrayDadosSelecao); // adiciona o addEventListener a cada botão dos itens
  document.querySelector('.empty-cart').addEventListener('click', limparCarrinho); // adiciona o addEventlistener ao botao de limpar a lista
};
