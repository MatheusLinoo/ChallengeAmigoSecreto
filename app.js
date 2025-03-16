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
    // Usando o valor do campo de entrada de texto
    let amigoInput = document.querySelector("#amigo").value.trim();
  
    // Verificando se o campo está vazio
    if (amigoInput === "") {
      exibirTextoNaTela(".section-title", "Por favor, insira um nome.");
      return;
    }
  
    // Formatando o nome: Primeira letra maiúscula, restante minúsculo
    amigoInput = amigoInput.charAt(0).toUpperCase() + amigoInput.slice(1).toLowerCase();
  
    // Verificando se o nome já foi adicionado
    if (amigos.includes(amigoInput)) {
      exibirTextoNaTela(".section-title", `O nome ${amigoInput} já foi adicionado!`);
      return;
    }
  
    // Adicionando o nome na lista
    amigos.push(amigoInput);
    console.log(amigoInput);
    exibirTextoNaTela(".section-title", "Amigo adicionado! Insira o nome de outro amigo.");
    
  // Verificando se o número mínimo de amigos para o sorteio foi atingido
  // Só exibe a mensagem de quantidade mínima uma vez, quando o número de amigos atingir o mínimo
  if (amigos.length >= numeroMinimoDeParticipantes && !mensagemMinimaExibida) {
    exibirTextoNaTela(
      ".section-title",
      `Você atingiu o número mínimo de participantes!`
    );
    mensagemMinimaExibida = true; // Marca que a mensagem já foi exibida, evitando que apareça novamente
  }

  //Resetando o campo de entrada para um novo nome e foca o input
  document.querySelector("#amigo").value = "";
  document.querySelector("#amigo").focus();
  console.log(amigos);
  exibirListaDeAmigos();
}

function exibirListaDeAmigos() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
  
    for (let i = 0; i < amigos.length; i++) {
      let li = document.createElement("li");
      li.textContent = amigos[i];
      listaAmigos.appendChild(li);
    }
  }
  

  