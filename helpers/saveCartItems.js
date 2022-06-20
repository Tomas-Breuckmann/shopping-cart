const saveCartItems = () => {
  // seu código aqui
const itensDoCarrinho = document.querySelectorAll('.cart__item');
const lista = [];
for (let ind = 0; ind < itensDoCarrinho.length; ind += 1) {
  lista.push(itensDoCarrinho[ind].innerText);
}
localStorage.setItem('cartItems', JSON.stringify(lista));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
