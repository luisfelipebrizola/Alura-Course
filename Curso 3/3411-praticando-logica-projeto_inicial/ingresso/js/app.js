function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let quant = parseInt(document.getElementById('qtd').value);


    let quantTipo = parseInt(document.getElementById(`qtd-${tipo}`).textContent);
    if(quant > quantTipo){
        alert(`[ERRO] Quantidade indisponível para modalidade ${tipo}!`);
    } else{
        alert('Compra efetuada!');
        quantTipo = quantTipo - quant;
        document.getElementById(`qtd-${tipo}`).innerHTML = quantTipo;
    }

    document.getElementById('qtd').value = '';
}


