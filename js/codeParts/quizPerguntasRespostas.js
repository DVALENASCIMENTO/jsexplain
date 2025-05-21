export const codeParts = [

  { text: 'const', class: 'keyword', tip: 'Declara uma constante.' },
  { text: ' perguntas = [', class: 'default', tip: 'Array de objetos com perguntas e respostas.' },

  { text: '\n  {\n    pergunta: "Qual é a capital do Brasil?",', class: 'string', tip: 'Texto da pergunta.' },
  { text: '\n    opcoes: ["São Paulo", "Brasília", "Rio de Janeiro"],', class: 'array', tip: 'Opções de resposta.' },
  { text: '\n    resposta: 1\n  },', class: 'number', tip: 'Índice da resposta correta (começa em 0).' },

  { text: '\n  {\n    pergunta: "Quanto é 5 x 3?",', class: 'string', tip: 'Nova pergunta.' },
  { text: '\n    opcoes: ["8", "15", "10"],', class: 'array', tip: 'Opções de resposta.' },
  { text: '\n    resposta: 1\n  }', class: 'number', tip: 'Resposta correta é "15".' },
  { text: '\n];', class: 'default', tip: 'Fim do array de perguntas.' },

  { text: '\n\nlet', class: 'keyword', tip: 'Declara variáveis que podem mudar.' },
  { text: ' indiceAtual = 0;', class: 'default', tip: 'Rastreia a pergunta atual.' },
  { text: '\nlet pontuacao = 0;', class: 'default', tip: 'Contador de acertos.' },

  { text: '\n\nfunction mostrarPergunta() {', class: 'function-name', tip: 'Mostra a pergunta atual na tela.' },
  { text: '\n  const p = perguntas[indiceAtual];', class: 'default', tip: 'Pega a pergunta atual.' },
  { text: '\n  document.getElementById(\'pergunta\').textContent = p.pergunta;', class: 'default', tip: 'Mostra o texto da pergunta.' },
  { text: '\n  const opcoesDiv = document.getElementById(\'opcoes\');', class: 'default', tip: 'Seleciona a div de opções.' },
  { text: '\n  opcoesDiv.innerHTML = \'\';', class: 'default', tip: 'Limpa opções anteriores.' },

  { text: '\n  p.opcoes.forEach((opcao, i) => {', class: 'loop', tip: 'Percorre todas as opções da pergunta.' },
  { text: '\n    const btn = document.createElement(\'button\');', class: 'default', tip: 'Cria um botão para cada opção.' },
  { text: '\n    btn.textContent = opcao;', class: 'default', tip: 'Define o texto do botão.' },
  { text: '\n    btn.onclick = () => verificarResposta(i);', class: 'default', tip: 'Define o clique para verificar resposta.' },
  { text: '\n    opcoesDiv.appendChild(btn);', class: 'default', tip: 'Adiciona o botão à tela.' },
  { text: '\n  });', class: 'default', tip: 'Fim do forEach.' },
  { text: '\n}', class: 'default', tip: 'Fim da função mostrarPergunta.' },

  { text: '\n\nfunction verificarResposta(indice) {', class: 'function-name', tip: 'Verifica se a resposta está correta.' },
  { text: '\n  if (indice === perguntas[indiceAtual].resposta) {', class: 'condition', tip: 'Compara a resposta clicada com a correta.' },
  { text: '\n    pontuacao++;', class: 'default', tip: 'Incrementa pontuação se estiver certo.' },
  { text: '\n  }', class: 'default', tip: 'Fim do if.' },
  { text: '\n  indiceAtual++;', class: 'default', tip: 'Avança para a próxima pergunta.' },

  { text: '\n  if (indiceAtual < perguntas.length) {', class: 'condition', tip: 'Se ainda houver perguntas...' },
  { text: '\n    mostrarPergunta();', class: 'default', tip: 'Mostra a próxima.' },
  { text: '\n  } else {', class: 'default', tip: 'Se acabou as perguntas...' },
  { text: '\n    document.getElementById(\'quiz\').innerHTML = `<h2>Você acertou ${pontuacao} de ${perguntas.length}!</h2>`;', class: 'default', tip: 'Mostra o resultado final.' },
  { text: '\n  }', class: 'default', tip: 'Fim do else.' },
  { text: '\n}', class: 'default', tip: 'Fim da função verificarResposta.' },

  { text: '\n\nmostrarPergunta();', class: 'default', tip: 'Chama a primeira pergunta ao iniciar.' }

];
