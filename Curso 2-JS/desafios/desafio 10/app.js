let titulo = document.querySelector('h1');
titulo.innerHTML = ('Desafio 10');

function iniciar(){
    let n1 = parseInt(prompt('Digite um número: '));
    let n2 = parseInt(prompt('Digite outro número: '));
    let maiorNumero = qualEMaior(n1, n2);
    function qualEMaior(x, y){
        if (x > y){
            return x
        } else{
            return y
        }
    }
    titulo.innerHTML = (`O maior número entre estes dois é o ${maiorNumero}`);
}