const getSavedCartItems = () => {
  // seu código aqui
  const itensDoCarrinho = JSON.parse(localStorage.getItem('itensDoCarrinho'));
  if (itensDoCarrinho !== null) {
      itensDoCarrinho.forEach((element) => {
        const li = document.createElement('li');
        li.className = 'cart__item';
        li.innerText = element;
        // li.className = 'noCarrinho';
        li.addEventListener('click', (event) => { 
          event.target.remove();
          // saveCartItems();
        });
        const carrinho = document.querySelector('.cart__items');
        carrinho.appendChild(li);
      });
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
