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
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  console.log(li.innerText);
  li.addEventListener('click', cartItemClickListener);
  return li;
}

window.onload = async () => {
  const arrayDados = await fetchProducts('computador');
    const arrayDadosResults = await arrayDados.results;
    const arrayDadosSelecao = arrayDadosResults.map((element) => {
      const { id: sku, title: name, price: salePrice, thumbnail: image } = element;
      return { sku, name, salePrice, image };
    });
    arrayDadosSelecao.forEach((element) => {
      createCartItemElement(element);
    });
    console.log(arrayDadosSelecao);
    // const arrayOrdem = arrayDados.map((element) => {
    //   ({ sku, name, salePrice } = arrayDados);
    // });
};
