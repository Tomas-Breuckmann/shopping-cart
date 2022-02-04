const getSavedCartItems = () => {
  // seu código aqui
  const itensDoCarrinho = JSON.parse(localStorage.getItem('itensDoCarrinho'));
  if (itensDoCarrinho !== null) {
      itensDoCarrinho.forEach((element) => {
        // console.log(element);
        const li = document.createElement('li');
        li.className = 'cart__item';
        console.log(element.innerText);
        li.innerText = element;
        li.className = 'noCarrinho';
        li.addEventListener('click', cartItemClickListener);
        // return li;        
        const carrinho = document.querySelector('.cart__items');
        carrinho.appendChild(li);
      // saveCartItems();
      });
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
