//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let mensagemMinimaExibida = false;
const numeroMinimoDeParticipantes = 3;

// Função para exibir uma mensagem no HTML usando JavaScript
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
  }

function addAmigos() {
    let amigoInput = document.querySelector("#amigo").value.trim();
  
    // Verificando se o campo está vazio
    if (amigoInput === "") {
      exibirTextoNaTela(".section-title", "Por favor, insira um nome.");
      return;
    }
  
    // Verificando se o nome já foi adicionado
    if (amigos.includes(amigoInput)) {
      exibirTextoNaTela(".section-title", `O nome ${amigoInput} já foi adicionado!`);
      return;
    }
  
    // Adicionando o nome na lista
    amigos.push(amigoInput);
    exibirTextoNaTela(".section-title", "Amigo adicionado! Insira o nome de outro amigo.");
}
  