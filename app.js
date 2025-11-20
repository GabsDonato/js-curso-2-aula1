// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do numero secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Descubra o número secreto entre 1 e 10!';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10!');


function verificarChute()  {
    console.log(numeroSecreto);

}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}