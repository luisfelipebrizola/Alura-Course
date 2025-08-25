function mostrarTextoNaTela(campo, texto){
    let titulo = document.querySelector(campo);
    titulo.innerHTML = texto;
}

mostrarTextoNaTela('h1', 'Desafio 15');

function iniciar(){
   let altura = prompt('Informe a altura da sala: ');
   let largura = prompt('Informe a largura da sala: ');
   
    let alturaf = formatar(altura);
    let larguraf = formatar(largura)

   function formatar(valor){
        return parseFloat(valor.replace(',','.'));
   }

   let area = calcularArea(alturaf, larguraf);
   let perimetro = calcularPerimetro(alturaf, larguraf);

   function calcularArea(x,y){
        return x*y
   }

   function calcularPerimetro(x,y){
        return 2*x + 2*y
   }

   mostrarTextoNaTela('h1', `A área é ${area} e o perímetro é ${perimetro}`);
}