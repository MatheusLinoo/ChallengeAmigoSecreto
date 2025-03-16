# Amigo Secreto

Este é um projeto simples para organizar um sorteio de Amigo Secreto. A aplicação permite adicionar nomes de participantes, sortear um nome aleatório e reiniciar o sorteio.

## Funcionalidades

- **Adicionar Participantes**: Permite adicionar nomes de amigos à lista de participantes.
- **Sortear Amigo Secreto**: Sorteia um nome aleatório da lista de participantes.
- **Reiniciar Sorteio**: Limpa a lista de participantes e reinicia o sorteio.
- **Validações**:
  - Não permite adicionar nomes vazios.
  - Não permite adicionar nomes duplicados.
  - Exige um mínimo de 3 participantes para realizar o sorteio.
- **Acessibilidade**:
  - Suporte a entrada por teclado (tecla Enter).
  - Mensagens de feedback para o usuário.

## Estrutura do Projeto

```plaintext
challenge-amigo-secreto/
├──assets
├──app.js
├──index.html
├──readme.md
└── style.css
```

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Usar

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` em seu navegador.
3. Adicione os nomes dos participantes no campo de entrada e clique em "Adicionar" ou aperte a tecla "Enter" no seu teclado.
4. Após adicionar pelo menos 3 participantes, clique em "Sortear amigo" para realizar o sorteio.
5. Para reiniciar o sorteio, clique no botão de resetar.

## Contribuição

Quer contribuir com o projeto? Você pode, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Conteúdo de Consulta/Material Usado

### [Lógica de Programação: Mergulhe em Algoritmos com JavaScript](https://cursos.alura.com.br/course/logica-programacao-mergulhe-programacao-javascript)

Este curso foi essencial para entender os conceitos básicos de lógica de programação e algoritmos usando JavaScript. As seções sobre estruturas de controle e manipulação de arrays foram especialmente úteis para implementar a lógica de adição de participantes e sorteio.

### [Lógica de Programação: Funções e Listas](https://cursos.alura.com.br/course/logica-programacao-funcoes-listas)

Este curso complementou o conhecimento adquirido no curso anterior, aprofundando-se em funções e listas. As lições sobre criação e manipulação de funções foram cruciais para desenvolver as funcionalidades de adicionar participantes, sortear e reiniciar o sorteio.
