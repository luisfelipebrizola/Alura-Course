function mostrarTextoNaTela(campo, texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto;
}

mostrarTextoNaTela('h1', 'Desfaio 18');

function iniciar(){
   let listaGenerica = [];
   mostrarTextoNaTela('h1',listaGenerica); 
}