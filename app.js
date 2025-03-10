let listaDeNumeros = [];

let numMax = 100;

let numSec = gerarNumero();

let tentativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);

  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirTextoInicial() {
  exibirTexto("h1", "aoba, bão?");

  exibirTexto(
    "p",
    "escolhe um numero ai, c tem q acertar ele(de 1 a " + numMax + ")"
  );
}

exibirTextoInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numSec) {
    let plutentativas = tentativas == 1 ? " tentativa" : "tentativas";

    let msgtentativas = `pabens, vc acertou com ${tentativas} ${plutentativas}`;

    exibirTexto("h1", msgtentativas);

    exibirTexto("p", chute + " era realmente o número");

    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute < numSec) {
    exibirTexto("h1", "ta errado burro");

    exibirTexto("p", "o número do mau é maior que " + chute + " seu otario");
  } else if (chute > numSec) {
    exibirTexto("h1", "ta errado burro00");

    exibirTexto("p", "o número do mau é menor que " + chute + " seu otario");
  }

  tentativas++;

  limparCampo();
}

function gerarNumero() {
  let numeroEscolhido = parseInt(Math.random() * numMax + 1);

  let quantidadeDeElem = listaDeNumeros.length;

  if (quantidadeDeElem == numMax) {
    listaDeNumeros = [];
  }

  if (listaDeNumeros.includes(numeroEscolhido)) {
    return gerarNumero();
  } else {
    listaDeNumeros.push(numeroEscolhido);

    console.log(listaDeNumeros);

    return numeroEscolhido;
  }
}

function limparCampo() {
  let chute = document.querySelector("input");

  chute.value = " ";
}

function reiniciarJogo() {
  numSec = gerarNumero();

  tentativas = 1;

  exibirTextoInicial();

  limparCampo();

  document.getElementById("reiniciar").setAttribute("disabled", "true");
}
