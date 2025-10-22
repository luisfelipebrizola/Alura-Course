function mostrarTextoNaTela(campo,texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto;
}

mostrarTextoNaTela('h1','Desafio 3');

function verificar(){
    let input = document.getElementById('text').value;
    
    if (input == ''){
        mostrarTextoNaTela('h1', 'A string está vazia');
    } else{
        mostrarTextoNaTela('h1','A string não está vazia!');
    }
}
