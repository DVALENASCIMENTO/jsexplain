export const codeParts = [

  { text: 'function', class: 'keyword', tip: 'Declara uma nova função.' },
  { text: ' iniciarContagem()', class: 'function-name', tip: 'Função que inicia a contagem regressiva.' },
  { text: ' {', class: 'default', tip: 'Início do bloco da função.' },

  { text: '\n  let', class: 'keyword', tip: 'Declara uma variável que pode ser modificada.' },
  { text: ' tempo = 10;', class: 'variable', tip: 'Valor inicial da contagem (em segundos).' },

  { text: '\n\n  const', class: 'keyword', tip: 'Declara uma constante.' },
  { text: ' intervalo', class: 'variable', tip: 'Armazena a referência ao intervalo criado.' },
  { text: ' = setInterval', class: 'method', tip: 'Cria um intervalo de execução contínua a cada tempo definido (1000ms).' },
  { text: '(() => {', class: 'default', tip: 'Arrow function executada a cada segundo.' },

  { text: '\n    document.getElementById(\'contador\').textContent = tempo;', class: 'default', tip: 'Exibe o valor atual do tempo na tela.' },

  { text: '\n    tempo--;', class: 'default', tip: 'Decrementa 1 segundo.' },

  { text: '\n\n    if (tempo < 0) {', class: 'keyword', tip: 'Verifica se o tempo chegou a -1, ou seja, terminou.' },

  { text: '\n      clearInterval(intervalo);', class: 'default', tip: 'Interrompe a execução do setInterval.' },
  { text: '\n      document.getElementById(\'contador\').textContent = \'Tempo esgotado!\';', class: 'default', tip: 'Atualiza o texto final quando o tempo termina.' },

  { text: '\n    }', class: 'default', tip: 'Fim do bloco do if.' },
  { text: '\n  }, 1000);', class: 'default', tip: 'Define o intervalo de 1000 milissegundos (1 segundo).' },

  { text: '\n}', class: 'default', tip: 'Fim da função.' }

];
