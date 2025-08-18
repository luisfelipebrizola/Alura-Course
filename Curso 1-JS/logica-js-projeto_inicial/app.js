alert('Boas Vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo+1);
console.log(numeroSecreto);
let chute; 
let tent = 1; 



while(chute != numeroSecreto){789
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    //se chute for igual ao número secreto
    if(chute == numeroSecreto){
        break;   
        
    }else{
        alert('Você errou!');
        tent++
        if(chute > numeroSecreto){
        alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    
    }
}

let palavraTent = tent > 1 ? 'tentativas' : 'tentativa';

alert(`Isso aí! Você descobriu o número Secreto (${numeroSecreto}) em ${tent} ${palavraTent}`);
