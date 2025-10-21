let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value;
    let adicionados = document.getElementById('lista-amigos');
    amigos.push(amigo);
    
    if(amigo == ''){
        alert('[ERRO] Nenhum nome informado!');
    }else if(adicionados.innerHTML.includes(amigo)){
        alert('[ERRO] Amigo já adicionado!');
    }else{
        if(adicionados.innerHTML == ''){
        adicionados.innerHTML = amigo
    } else{
        adicionados.innerHTML = adicionados.innerHTML + ', ' + amigo
    }

    }

    
    
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    if(amigos.length < 4){
        alert('[ERRO] Quantidade mínima de participantes não atingida!(4)');
    }else{
        for(i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>'
        }
        
    }
    }
    
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}