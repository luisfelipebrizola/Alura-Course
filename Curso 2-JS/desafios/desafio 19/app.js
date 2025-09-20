function mostrarTextoNaTela(campo,texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto;
}

mostrarTextoNaTela('h1','Desafio 19');

function iniciar(){
   let linguagensDeProgramação = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
   //Adicionando elementos a lista
   linguagensDeProgramação.push('Java','Ruby','GoLang');
   mostrarTextoNaTela('h1',linguagensDeProgramação); 
}