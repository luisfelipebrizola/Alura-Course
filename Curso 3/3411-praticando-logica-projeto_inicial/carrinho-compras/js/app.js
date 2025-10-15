function limpar(){
    let total = document.getElementById('valor-total');
    let carrinho = document.getElementById('lista-produtos');
    subtinicial = 0;
    total.innerHTML = 'R$0,00';
    carrinho.innerHTML = '';
}

    
function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let quant = document.getElementById('quantidade').value;
    let total = document.getElementById('valor-total');
    let valorUni = valor * quant;
    let subT = valor * quant;
    let carrinho = document.getElementById('lista-produtos');
    
    
    total.innerHTML = `R$${subT},00`;
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quant}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUni},00</span>
    </section>`
    
}
    
    
    
