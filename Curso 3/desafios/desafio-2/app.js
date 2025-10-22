function mostrarTextoNaTela(campo,texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto;
}

mostrarTextoNaTela('h1','Desafio 2');

function verificar(){
    let numero = document.getElementById('numero').value;
    if(numero < 18){
        mostrarTextoNaTela('h1', 'Você é menor de idade!');
    } else{
        mostrarTextoNaTela('h1', 'Você é maior de idade!');
    }
}
