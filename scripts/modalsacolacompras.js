const btnComprar = document.querySelectorAll('.btn-produtos');
const contadorSacola = document.getElementById('contador-sacola');
let sacolaDeCompras = [];

btnComprar.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const produto = btn.parentElement;

        const nomeProduto = produto.querySelector('.p-produtos').innerText;
        const precoCompleto = produto.querySelector('.preco-produtos').innerText;  
        const precoProduto = precoCompleto.split(' ').slice(0, 2).join(' '); 
        

        let produtoSelecionado = {
            nome: nomeProduto,
            preco: precoProduto
        };

        sacolaDeCompras.push(produtoSelecionado);
        console.log(sacolaDeCompras);

        contadorSacola.innerText = sacolaDeCompras.length;
        contadorSacola.style.visibility = 'visible';
    });
});

const btnSacola = document.querySelector('.icon-sacola');


btnSacola.addEventListener('click', function() {
    let somaDaSacola = 0;
  
    sacolaDeCompras.forEach(function(produto) {
      if (produto.preco) {
        let precoNumero = parseFloat(
          produto.preco
            .replace('R$', '')    
            .replace(/\./g, '')   
            .replace(',', '.')   
        );
  
        somaDaSacola += precoNumero;
      } else {
        console.log('Produto sem preço:', produto);
      }
    });
  
    console.log('Total da sacola: R$ ' + somaDaSacola.toFixed(2));

    const modalSacola = document.getElementById('modal-sacola');
    const conteudoModal = document.getElementById('conteudo-modal');
    
      modalSacola.style.display = 'block';
      conteudoModal.innerHTML = '';

    sacolaDeCompras.forEach(function(produtoModal) {
       const p = document.createElement('p');
        p.innerText = produtoModal.nome + ' - ' + produtoModal.preco;
        conteudoModal.appendChild(p)
    });
  });
  
 const fecharModal = document.getElementById('modal-sacola');

 fecharModal.addEventListener('click', function(event) {
  if (event.target === fecharModal) {
    fecharModal.style.display = 'none'
  } 
 });

 const btnModal = document.getElementById('btn-modal');

 btnModal.addEventListener('click', function(event) {
  fecharModal.style.display = 'none';

  alert('Compra Finalizada com sucesso!');
 });

 const abrirMenuToggle = document.getElementById('btn-hamburguer');
 const menuMobile = document.querySelector('.ul-menu');

 abrirMenuToggle.addEventListener('click', function() {
  menuMobile.classList.toggle('active');

  });
