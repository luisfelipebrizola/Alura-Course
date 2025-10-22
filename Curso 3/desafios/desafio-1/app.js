function mostrarTextoNaTela(campo,texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto;
}

mostrarTextoNaTela('h1', 'Desafio 1');

function verificar(){
    let numero = document.getElementById('numero').value;
    if(numero % 2 == 0 & numero != 0){
        mostrarTextoNaTela('h1','Este número é par');
    }else if(numero % 2 != 0){
      mostrarTextoNaTela('h1','Este número é ímpar');  
    }else{
        mostrarTextoNaTela('h1','Este número é zero');
    }
}
