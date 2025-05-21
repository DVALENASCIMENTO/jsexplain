export const codeParts = [

  { text: 'let', class: 'keyword', tip: 'Declara uma variável que pode ser atualizada.' },
  { text: ' tempo = 0;', class: 'default', tip: 'Variável para contar o tempo em segundos.' },

  { text: '\nlet', class: 'keyword', tip: 'Declara uma variável que armazenará o intervalo.' },
  { text: ' intervalo;', class: 'default', tip: 'Referência ao setInterval, para poder pausar ou resetar.' },

  { text: '\n\nfunction', class: 'keyword', tip: 'Declara uma função.' },
  { text: ' iniciar()', class: 'function-name', tip: 'Função que inicia o cronômetro.' },
  { text: ' {', class: 'default', tip: 'Início da função iniciar.' },

  { text: '\n  intervalo = setInterval(() => {', class: 'default', tip: 'Executa o bloco a cada 1 segundo.' },
  { text: '\n    tempo++;', class: 'default', tip: 'Incrementa o tempo em 1 segundo.' },
  { text: '\n    document.getElementById(\'display\').textContent = tempo + \'s\';', class: 'default', tip: 'Atualiza o display com o novo tempo.' },
  { text: '\n  }, 1000);', class: 'default', tip: 'Define o intervalo de 1000 milissegundos (1 segundo).' },
  { text: '\n}', class: 'default', tip: 'Fim da função iniciar.' },

  { text: '\n\nfunction', class: 'keyword', tip: 'Declara uma função.' },
  { text: ' pausar()', class: 'function-name', tip: 'Função que pausa o cronômetro.' },
  { text: ' {', class: 'default', tip: '' },
  { text: '\n  clearInterval(intervalo);', class: 'default', tip: 'Pausa o intervalo em execução.' },
  { text: '\n}', class: 'default', tip: 'Fim da função pausar.' },

  { text: '\n\nfunction', class: 'keyword', tip: 'Declara uma função.' },
  { text: ' resetar()', class: 'function-name', tip: 'Função que zera o cronômetro.' },
  { text: ' {', class: 'default', tip: '' },
  { text: '\n  clearInterval(intervalo);', class: 'default', tip: 'Para qualquer contagem em andamento.' },
  { text: '\n  tempo = 0;', class: 'default', tip: 'Reseta o tempo para 0.' },
  { text: '\n  document.getElementById(\'display\').textContent = \'0s\';', class: 'default', tip: 'Atualiza o display para 0s.' },
  { text: '\n}', class: 'default', tip: 'Fim da função resetar.' }

];
