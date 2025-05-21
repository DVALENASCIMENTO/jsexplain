export const codeParts = [

  { text: 'let', class: 'keyword', tip: 'Declara uma variável com escopo de bloco e valor que pode ser alterado.' },
  { text: ' contador', class: 'variable', tip: 'Variável que guarda o valor atual do contador.' },
  { text: ' = ', class: 'default', tip: 'Operador de atribuição.' },
  { text: '0', class: 'number', tip: 'Valor inicial do contador.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  // Função incrementar
  { text: '\n\nfunction', class: 'keyword', tip: 'Declara uma nova função.' },
  { text: ' incrementar()', class: 'function-name', tip: 'Função que aumenta o valor do contador.' },
  { text: ' {', class: 'default', tip: 'Abre o bloco da função.' },

  { text: '\n  contador++', class: 'default', tip: 'Incrementa o valor da variável contador em 1.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\n  atualizar();', class: 'default', tip: 'Chama a função que atualiza o número exibido na tela.' },
  { text: '\n}', class: 'default', tip: 'Fecha o bloco da função.' },

  // Função decrementar
  { text: '\n\nfunction', class: 'keyword', tip: 'Declara uma nova função.' },
  { text: ' decrementar()', class: 'function-name', tip: 'Função que diminui o valor do contador.' },
  { text: ' {', class: 'default', tip: 'Abre o bloco da função.' },

  { text: '\n  contador--', class: 'default', tip: 'Decrementa o valor da variável contador em 1.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\n  atualizar();', class: 'default', tip: 'Chama a função que atualiza o número exibido na tela.' },
  { text: '\n}', class: 'default', tip: 'Fecha o bloco da função.' },

  // Função atualizar
  { text: '\n\nfunction', class: 'keyword', tip: 'Declara uma nova função.' },
  { text: ' atualizar()', class: 'function-name', tip: 'Função que atualiza a exibição do contador na interface.' },
  { text: ' {', class: 'default', tip: 'Abre o bloco da função.' },

  { text: '\n  document.getElementById(\'contador\').textContent = contador;', class: 'default', tip: 'Seleciona o elemento com id "contador" e atualiza seu texto com o valor atual da variável.' },

  { text: '\n}', class: 'default', tip: 'Fecha o bloco da função.' }

];
