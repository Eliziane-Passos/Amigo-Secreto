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

function atualizacaolista (amigos) {
       // Limpa a lista antes de adicionar novos elementos
    let lista = document.querySelector('listaDeAmigos');
    lista.innerHTML = '';

    // Percorre o array de amigos e adiciona cada nome como um elemento <li>
    amigos.forEach(amigo => {
        const li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = amigo; // Define o texto do <li> como o nome do amigo
        lista.appendChild(li); // Adiciona o <li> à lista
    });
}
