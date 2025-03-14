//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let seuAmigoSecreto = sortearAmigo();

function adicionarAmigo() {
    let amigoIncluido = document.querySelector ('input').value;
    
    if (amigoIncluido == "") {
        alert ('Por favor, inserir um nome');
    } 
    else {
        amigos.push(amigoIncluido);
        alert ("Amigo incluído")
        limparCampo();
    }
}

function limparCampo() {
    amigoIncluido = document.querySelector('input');
    amigoIncluido.value = '';
}

