export const codeParts = [

  { text: 'function', class: 'keyword', tip: 'Declara uma função nomeada.' },
  { text: ' ', class: 'default', tip: '' },
  { text: 'validarFormulario', class: 'function-name', tip: 'Nome da função que fará a validação dos dados do formulário.' },
  { text: '()', class: 'default', tip: 'Função não recebe argumentos.' },
  { text: ' {', class: 'default', tip: 'Abre o bloco da função.' },

  { text: '\n  ', class: 'default', tip: 'Indentação.' },
  { text: 'const', class: 'keyword', tip: 'Declara uma variável constante.' },
  { text: ' nome', class: 'variable', tip: 'Variável que armazenará o valor do campo nome.' },
  { text: ' = ', class: 'default', tip: 'Atribuição.' },
  { text: 'document', class: 'object', tip: 'Objeto que representa a página HTML.' },
  { text: '.', class: 'default', tip: 'Acessa propriedade ou método.' },
  { text: 'getElementById', class: 'method', tip: 'Seleciona um elemento HTML pelo id.' },
  { text: "('nome')", class: 'string', tip: 'Id do campo input do nome.' },
  { text: '.', class: 'default', tip: 'Acessa propriedade do elemento.' },
  { text: 'value', class: 'property', tip: 'Valor atual do campo de texto.' },
  { text: '.', class: 'default', tip: 'Acessa método.' },
  { text: 'trim', class: 'method', tip: 'Remove espaços em branco no início e no fim da string.' },
  { text: '();', class: 'default', tip: 'Chama o método.' },

  { text: '\n  ', class: 'default', tip: 'Nova linha com indentação.' },
  { text: 'if', class: 'keyword', tip: 'Estrutura condicional para verificar uma condição.' },
  { text: ' (', class: 'default', tip: 'Abre condição.' },
  { text: 'nome', class: 'variable', tip: 'Valor do campo nome.' },
  { text: ' === ', class: 'operator', tip: 'Operador de comparação estrita, compara valor e tipo.' },
  { text: "''", class: 'string', tip: 'String vazia.' },
  { text: ') {', class: 'default', tip: 'Abre bloco do if.' },

  { text: '\n    ', class: 'default', tip: 'Indentação.' },
  { text: 'alert', class: 'function', tip: 'Exibe uma caixa de alerta no navegador.' },
  { text: "('Por favor, preencha seu nome.')", class: 'string', tip: 'Mensagem que será mostrada ao usuário.' },
  { text: ';', class: 'default', tip: 'Finaliza instrução.' },

  { text: '\n    ', class: 'default', tip: 'Indentação.' },
  { text: 'return', class: 'keyword', tip: 'Retorna um valor e interrompe a função.' },
  { text: ' false;', class: 'boolean', tip: 'Retorna falso indicando que a validação falhou.' },

  { text: '\n  }', class: 'default', tip: 'Fecha o bloco do if.' },

  { text: '\n  ', class: 'default', tip: 'Nova linha e indentação.' },
  { text: 'return', class: 'keyword', tip: 'Retorna um valor.' },
  { text: ' true;', class: 'boolean', tip: 'Retorna verdadeiro indicando que a validação foi bem-sucedida.' },

  { text: '\n}', class: 'default', tip: 'Fecha o bloco da função.' }

];
