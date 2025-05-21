export const codeParts = [

  // Declaração da função
  { text: 'function', class: 'keyword', tip: 'Declara uma nova função.' },
  { text: ' corAleatoria()', class: 'function-name', tip: 'Função que gera uma nova cor RGB aleatória.' },
  { text: ' {', class: 'default', tip: 'Início do bloco da função.' },

  // Geração do valor R (vermelho)
  { text: '\n  const', class: 'keyword', tip: 'Declara uma constante cujo valor não será reatribuído.' },
  { text: ' r', class: 'variable', tip: 'Componente vermelho da cor RGB.' },
  { text: ' = ', class: 'default', tip: 'Atribuição de valor.' },
  { text: 'Math.floor', class: 'method', tip: 'Arredonda o número para baixo até o inteiro mais próximo.' },
  { text: '(', class: 'default', tip: 'Início dos parênteses da função.' },
  { text: 'Math.random()', class: 'method', tip: 'Gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo).' },
  { text: ' * 256', class: 'default', tip: 'Multiplica o número aleatório por 256 para cobrir o intervalo de 0 a 255.' },
  { text: ')', class: 'default', tip: 'Fecha os parênteses da função.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  // Geração do valor G (verde)
  { text: '\n  const g = Math.floor(Math.random() * 256);', class: 'default', tip: 'Gera o componente verde da cor RGB da mesma forma que o vermelho.' },

  // Geração do valor B (azul)
  { text: '\n  const b = Math.floor(Math.random() * 256);', class: 'default', tip: 'Gera o componente azul da cor RGB da mesma forma que os outros.' },

  // Aplicação da cor
  { text: '\n  document.body.style.backgroundColor', class: 'default', tip: 'Acessa o estilo do corpo do documento e altera a cor de fundo.' },
  { text: ' = ', class: 'default', tip: 'Atribuição de valor.' },
  { text: '`rgb(${r}, ${g}, ${b})`', class: 'string', tip: 'Template string que gera uma cor RGB usando os valores aleatórios.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\n}', class: 'default', tip: 'Fim do bloco da função.' }

];
