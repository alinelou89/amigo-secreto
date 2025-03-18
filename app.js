let amigos = [];
const inputFieldAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');


function adicionarAmigo() {
    let nomeAmigo = inputFieldAmigo.value.trim();
    
    if(!nomeAmigo) {
        alert("Por favor, insira um nome.");
        return;
    }

    if(amigos.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} já está na lista.`);
        return;
    } else {
        amigos.push(nomeAmigo);
        atualizarLista();
        limparCampo();
    }
           
}

function limparCampo() {
    inputFieldAmigo.focus();
    inputFieldAmigo.value = '';
}

function atualizarLista() {
    listaAmigos.innerHTML = "";
    for (let i=0; i < amigos.length; i++) {
        listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = amigos[random];
}
