let titulo = document.querySelector('h1');
titulo.innerHTML = ('Calcular Média');


function iniciar(){
    let n1 = parseInt(prompt('Digite o primeiro número: '));
    let n2 = parseInt(prompt('Digite o segundo número: '));
    let n3 = parseInt(prompt('Digite o terceiro número: '));
    let media = calcularODobro(n1, n2, n3)
    function calcularODobro(x, y, z){
    return (x+y+z)/3;
    }
    titulo.innerHTML = (media);
}




