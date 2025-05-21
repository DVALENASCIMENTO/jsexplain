export const codeParts = [

  { text: 'function', class: 'keyword', tip: 'Declara uma função nomeada.' },
  { text: ' ', class: 'default', tip: '' },
  { text: 'gerarNumero', class: 'function-name', tip: 'Nome da função que gera um número aleatório.' },
  { text: '()', class: 'default', tip: 'Função não recebe parâmetros.' },
  { text: ' {', class: 'default', tip: 'Abre o bloco da função.' },

  { text: '\n  ', class: 'default', tip: 'Indentação para organização.' },
  { text: 'const', class: 'keyword', tip: 'Declara uma variável constante.' },
  { text: ' numero', class: 'variable', tip: 'Variável que armazenará o número aleatório gerado.' },
  { text: ' = ', class: 'default', tip: 'Operador de atribuição.' },
  { text: 'Math', class: 'object', tip: 'Objeto embutido para operações matemáticas.' },
  { text: '.', class: 'default', tip: 'Acessa uma propriedade ou método.' },
  { text: 'random', class: 'method', tip: 'Método que retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo).' },
  { text: '()', class: 'default', tip: 'Chama o método.' },
  { text: ' * ', class: 'operator', tip: 'Multiplicação.' },
  { text: '100', class: 'number', tip: 'Número máximo (não incluso) para o intervalo do número aleatório.' },
  { text: ')', class: 'default', tip: 'Fecha parênteses da multiplicação.' },

  { text: '.', class: 'default', tip: 'Acessa um método.' },
  { text: 'floor', class: 'method', tip: 'Método que arredonda para baixo o número decimal.' },
  { text: '(', class: 'default', tip: 'Abre parênteses do método floor.' },
  { text: '', class: 'default', tip: '' },
  { text: ')', class: 'default', tip: 'Fecha parênteses do método floor.' },

  { text: ' + ', class: 'operator', tip: 'Soma para ajustar o intervalo para começar em 1.' },
  { text: '1', class: 'number', tip: 'Valor para ajustar o intervalo.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\n  ', class: 'default', tip: 'Nova linha e indentação.' },
  { text: 'document', class: 'object', tip: 'Objeto global representando o documento HTML.' },
  { text: '.', class: 'default', tip: 'Acessa um método.' },
  { text: 'getElementById', class: 'method', tip: 'Seleciona um elemento pelo id.' },
  { text: "('resultado')", class: 'string', tip: 'Id do elemento onde será exibido o número gerado.' },
  { text: '.', class: 'default', tip: 'Acessa propriedade.' },
  { text: 'textContent', class: 'property', tip: 'Define o texto interno do elemento.' },
  { text: ' = ', class: 'default', tip: 'Atribui valor.' },
  { text: 'numero', class: 'variable', tip: 'Número aleatório gerado, que será exibido.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\n}', class: 'default', tip: 'Fecha o bloco da função.' }

];
