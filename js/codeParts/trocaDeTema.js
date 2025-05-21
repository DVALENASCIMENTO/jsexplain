export const codeParts = [

  { text: 'function', class: 'keyword', tip: 'Declara uma função nomeada.' },
  { text: ' ', class: 'default', tip: '' },
  { text: 'toggleTema', class: 'function-name', tip: 'Nome da função que altera o tema da página.' },
  { text: '()', class: 'default', tip: 'Indica que a função não recebe argumentos.' },
  { text: ' {', class: 'default', tip: 'Abre o bloco da função.' },

  { text: '\n  ', class: 'default', tip: 'Indentação para melhor organização do código.' },

  { text: 'document', class: 'object', tip: 'Objeto global que representa o conteúdo HTML da página.' },
  { text: '.', class: 'default', tip: 'Operador para acessar propriedades ou métodos.' },
  { text: 'body', class: 'property', tip: 'Refere-se ao elemento <body> do documento.' },
  { text: '.', class: 'default', tip: 'Operador para acessar propriedades.' },
  { text: 'classList', class: 'property', tip: 'Propriedade que retorna a lista de classes CSS do elemento.' },
  { text: '.', class: 'default', tip: 'Operador para chamar um método.' },
  { text: 'toggle', class: 'method', tip: 'Método que adiciona a classe se não existe ou remove se já existe.' },
  { text: "('escuro')", class: 'string', tip: 'Nome da classe CSS que será adicionada ou removida para alterar o tema.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\n}', class: 'default', tip: 'Fecha o bloco da função.' }

];
