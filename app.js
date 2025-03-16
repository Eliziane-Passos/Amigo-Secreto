let amigos = [];
console.log(amigos);

function adicionarAmigo() {
    let amigoIncluido = document.querySelector('input').value.trim();

    if (amigoIncluido == ""){
        exibirTextoNaTela ('h2','Por favor, adicione um nome para o sorteio');
        alert('Por favor, insira um nome.');
    }
    else { 
        amigos.push(amigoIncluido);
        mostrarNome();
        limparCampo();
        exibirTextoNaTela ('h2', 'Digite o nome dos seus amigos');
        
        atualizacaolista();
    }
}

function mostrarNome() {
    let nomeDiv = document.getElementById('nome');
    nomeDiv.textContent = 'Amigo incluído!';  

    setTimeout(() => {
        nomeDiv.textContent = '';  
        }, 2000);

}

function limparCampo() {
    amigoIncluido= document.querySelector('input');
    amigoIncluido.value ='';
}

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function atualizacaolista () {
    let lista = document.getElementById ('listaAmigos');
    lista.innerHTML= ''; 

 amigos.forEach(amigo => {
     let li = document.createElement('li');
     li.textContent = amigo; 
     lista.appendChild(li); 
 });
}

function sortearAmigo() {
    if (amigos.length ===0 ){
        exibirTextoNaTela ('h2', 'Adicione amigos antes de sortear.');
        alert ('Não é possível realizar o sorteio, pois a lista de amigos está vazia.');
    }
else{
    let amigoAleatorio = Math.floor ( Math.random() * amigos.length);
    let amigoSorteado = amigos [amigoAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu amigo secreto é: <strong>${amigoSorteado}</strong>`;
  }

}
   