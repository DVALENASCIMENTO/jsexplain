export const codeParts = [

  { text: 'let', class: 'keyword', tip: 'Declara variáveis com escopo de bloco que podem ter seus valores alterados.' },
  { text: ' segundos', class: 'variable', tip: 'Guarda a quantidade de segundos passados.' },
  { text: ' = ', class: 'default', tip: 'Atribui o valor inicial.' },
  { text: '0', class: 'number', tip: 'Valor inicial do temporizador.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\nlet intervalo;', class: 'default', tip: 'Variável que armazenará o identificador do setInterval.' },

  // Função iniciar
  { text: '\n\nfunction', class: 'keyword', tip: 'Declara uma nova função.' },
  { text: ' iniciar()', class: 'function-name', tip: 'Função que inicia o temporizador.' },
  { text: ' {', class: 'default', tip: 'Início do bloco da função.' },

  { text: '\n  intervalo = ', class: 'default', tip: 'Armazena o retorno do setInterval.' },
  { text: 'setInterval', class: 'method', tip: 'Função que executa repetidamente uma função em intervalo de tempo definido.' },
  { text: '(() => {', class: 'default', tip: 'Arrow function executada a cada intervalo.' },

  { text: '\n    segundos++;', class: 'default', tip: 'Incrementa 1 segundo.' },
  { text: '\n    document.getElementById("tempo").textContent = segundos + "s";', class: 'default', tip: 'Atualiza o conteúdo do elemento com o tempo atual em segundos.' },

  { text: '\n  }, 1000);', class: 'default', tip: 'Define o intervalo de tempo de 1000ms (1 segundo).' },
  { text: '\n}', class: 'default', tip: 'Fim do bloco da função iniciar.' },

  // Função parar
  { text: '\n\nfunction', class: 'keyword', tip: 'Declara uma nova função.' },
  { text: ' parar()', class: 'function-name', tip: 'Função que para o temporizador.' },
  { text: ' {', class: 'default', tip: 'Início do bloco.' },
  { text: '\n  clearInterval(intervalo);', class: 'default', tip: 'Interrompe a execução repetida definida pelo setInterval.' },
  { text: '\n}', class: 'default', tip: 'Fim do bloco da função.' },

  // Função resetar
  { text: '\n\nfunction', class: 'keyword', tip: 'Declara uma nova função.' },
  { text: ' resetar()', class: 'function-name', tip: 'Função que para e reinicia o temporizador para 0.' },
  { text: ' {', class: 'default', tip: 'Início do bloco da função.' },

  { text: '\n  clearInterval(intervalo);', class: 'default', tip: 'Para o temporizador.' },
  { text: '\n  segundos = 0;', class: 'default', tip: 'Zera o contador de segundos.' },
  { text: '\n  document.getElementById("tempo").textContent = "0s";', class: 'default', tip: 'Atualiza o elemento exibindo o tempo zerado.' },

  { text: '\n}', class: 'default', tip: 'Fim do bloco da função.' }

];
