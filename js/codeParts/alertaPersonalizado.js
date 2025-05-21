export const codeParts = [

  { text: 'function', class: 'keyword', tip: 'Declara uma nova função.' },
  { text: ' mostrarAlerta()', class: 'function-name', tip: 'Nome da função que será chamada para exibir o alerta.' },
  { text: ' {', class: 'default', tip: 'Início do bloco da função.' },

  { text: '\n  const', class: 'keyword', tip: 'Declara uma constante.' },
  { text: ' nome', class: 'variable', tip: 'Variável que armazenará o nome digitado pelo usuário.' },
  { text: ' = ', class: 'default', tip: 'Atribuição de valor.' },
  { text: 'prompt', class: 'method', tip: 'Exibe uma caixa de entrada para o usuário digitar algo.' },
  { text: "('Qual é o seu nome?');", class: 'string', tip: 'Texto exibido na caixa de prompt.' },

  { text: '\n  if', class: 'keyword', tip: 'Inicia uma estrutura condicional.' },
  { text: ' (nome)', class: 'default', tip: 'Verifica se a variável nome contém algum valor (não é nula ou vazia).' },
  { text: ' {', class: 'default', tip: 'Início do bloco do if.' },

  { text: '\n    alert', class: 'method', tip: 'Exibe uma caixa de alerta com uma mensagem.' },
  { text: '(`Olá, ${nome}! Bem-vindo!`);', class: 'string', tip: 'Template string que exibe o nome digitado com uma saudação.' },

  { text: '\n  }', class: 'default', tip: 'Fim do bloco do if.' },
  { text: '\n}', class: 'default', tip: 'Fim da função mostrarAlerta.' }

];
