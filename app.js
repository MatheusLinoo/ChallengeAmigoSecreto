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

// Atualizando a lista e exibindo na tela
function exibirListaDeAmigos() {
    //html onde a lista será exibida

    let listaAmigos = document.querySelector("#listaAmigos");

    // Limpando a lista após adicionar um nome
    listaAmigos.innerHTML = "";
    // Loop para percorrer o array e a criação de um <li> para cada valor nome
  
    for (let i = 0; i < amigos.length; i++) {
      let li = document.createElement("li");
      li.textContent = amigos[i]; // Define o valor do conteúdo da li com base no valor da array amigos
      listaAmigos.appendChild(li); // adicionando li na lista
    }
  }
  
  function sortearAmigo() {
    // Verificando se há nomes na lista

    if (amigos.length === 0) {
        exibirTextoNaTela(".section-title", "Não há nomes para sortear.");
        return;
      }
      if (amigos.length < 3) {
        exibirTextoNaTela(
          ".section-title",
          "Insira no mínimo 3 nomes para sortear."
        );
        return;
      }
    const randomIndex = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[randomIndex];
    console.log(amigoSorteado);
    exibirTextoNaTela("#resultado", `O amigo sorteado foi: ${amigoSorteado}!`);
    exibirTextoNaTela(".section-title", `Parabéns ${amigoSorteado}!`);
    // Limpa lista de nomes
    amigos = [];
    limparListaNomes();
    document.querySelector("#resetar").removeAttribute("disabled");
  }
  
  function limparListaNomes() {
    let listaNomes = document.querySelector("#listaAmigos");
    listaNomes.innerHTML = "";
  } 

  function reiniciarSorteio() {
    amigos = [];
    limparListaNomes();
    exibirTextoNaTela(".main-title", "Amigo Secreto");
    exibirTextoNaTela(".section-title", "Digite o nome dos seus amigos");
    exibirTextoNaTela("#resultado", "");
    document.querySelector("#resetar").setAttribute("disabled", true);
    mensagemMinimaExibida = false;
  }
  
  document.querySelector("#resetar").addEventListener("click", reiniciarSorteio);
  

  document.querySelector("#amigo").addEventListener("keydown", function (event) {
    // Verificando se a tecla Enter foi acionada
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      addAmigos();
    }
  });
  