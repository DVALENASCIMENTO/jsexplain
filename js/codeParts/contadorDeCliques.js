export const codeParts = [

  { text: 'let', class: 'keyword', tip: 'Declara uma variável que pode ser alterada (escopo de bloco).' },
  { text: ' ', class: 'default', tip: '' },
  { text: 'contador', class: 'variable', tip: 'Nome da variável usada para armazenar o número de cliques.' },
  { text: ' = ', class: 'default', tip: 'Operador de atribuição.' },
  { text: '0', class: 'number', tip: 'Valor inicial da variável, começa em zero.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\nfunction', class: 'keyword', tip: 'Declara uma função nomeada.' },
  { text: ' incrementar', class: 'function-name', tip: 'Nome da função que será chamada ao clicar.' },
  { text: '()', class: 'default', tip: 'Parênteses indicam que a função não recebe parâmetros.' },
  { text: ' {', class: 'default', tip: 'Abre o bloco da função.' },

  { text: '\n  ', class: 'default', tip: 'Indentação.' },
  { text: 'contador', class: 'variable', tip: 'Referência à variável que armazena o número de cliques.' },
  { text: '++', class: 'operator', tip: 'Operador de incremento que adiciona 1 ao valor da variável.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\n  ', class: 'default', tip: 'Indentação.' },
  { text: 'document', class: 'object', tip: 'Objeto global que representa o conteúdo HTML da página.' },
  { text: '.', class: 'default', tip: 'Acessa uma propriedade ou método.' },
  { text: 'getElementById', class: 'method', tip: 'Seleciona um elemento pelo atributo id.' },
  { text: "('contador')", class: 'string', tip: 'Id do elemento onde será exibido o valor atual do contador.' },
  { text: '.', class: 'default', tip: 'Acessa uma propriedade do elemento selecionado.' },
  { text: 'textContent', class: 'property', tip: 'Propriedade para definir ou obter o texto dentro do elemento.' },
  { text: ' = ', class: 'default', tip: 'Atribui valor.' },
  { text: 'contador', class: 'variable', tip: 'Atualiza o texto para mostrar o valor atual da variável contador.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\n}', class: 'default', tip: 'Fecha o bloco da função.' }

];
