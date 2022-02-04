const saveCartItems = () => {
  // seu código aqui
const itensDoCarrinho = document.querySelectorAll('.noCarrinho');
const lista = [];
for (let ind = 0; ind < itensDoCarrinho.length; ind += 1) {
  lista.push(itensDoCarrinho[ind].innerText);
}
// const lista = itensDoCarrinho.map((element) => element.innerText);
localStorage.setItem('itensDoCarrinho', JSON.stringify(lista));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
