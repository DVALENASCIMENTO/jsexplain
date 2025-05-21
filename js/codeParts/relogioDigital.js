export const codeParts = [

  { text: 'setInterval', class: 'function', tip: 'Função nativa do JavaScript que executa um bloco de código repetidamente a cada intervalo de tempo.' },
  { text: '(', class: 'default', tip: 'Abre o parêntese para passar argumentos para a função.' },

  { text: '() => {', class: 'function-arrow', tip: 'Declaração de uma função anônima do tipo arrow function, que será executada no intervalo.' },
  { text: '\n  ', class: 'default', tip: 'Quebra de linha e indentação.' },

  { text: 'const', class: 'keyword', tip: 'Declara uma variável de escopo de bloco, cujo valor não pode ser reatribuído.' },
  { text: ' agora', class: 'variable', tip: 'Nome da variável que vai guardar o objeto de data atual.' },
  { text: ' = ', class: 'default', tip: 'Operador de atribuição, para definir o valor da variável.' },
  { text: 'new ', class: 'keyword', tip: 'Operador para criar uma nova instância de um objeto.' },
  { text: 'Date', class: 'class', tip: 'Construtor de objeto que representa data e hora atuais.' },
  { text: '();', class: 'default', tip: 'Chama o construtor sem argumentos, gerando o momento atual.' },

  { text: '\n  ', class: 'default', tip: 'Quebra de linha e indentação.' },

  { text: 'const', class: 'keyword', tip: 'Declara variável constante.' },
  { text: ' horas', class: 'variable', tip: 'Nome da variável que armazenará as horas.' },
  { text: ' = ', class: 'default', tip: 'Operador de atribuição.' },
  { text: 'agora.getHours()', class: 'method-call', tip: 'Método do objeto Date que retorna as horas atuais (0-23).' },
  { text: '.toString()', class: 'method-call', tip: 'Converte o número para string.' },
  { text: '.padStart(2, ', class: 'method-call', tip: 'Método que adiciona caracteres no início da string até atingir tamanho 2.' },
  { text: "'0')", class: 'string', tip: 'Adiciona o caractere "0" no começo se necessário.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\n  ', class: 'default', tip: 'Quebra de linha e indentação.' },

  { text: 'const', class: 'keyword', tip: 'Declara variável constante.' },
  { text: ' minutos', class: 'variable', tip: 'Nome da variável que armazenará os minutos.' },
  { text: ' = ', class: 'default', tip: 'Operador de atribuição.' },
  { text: 'agora.getMinutes()', class: 'method-call', tip: 'Método do objeto Date que retorna os minutos atuais (0-59).' },
  { text: '.toString()', class: 'method-call', tip: 'Converte o número para string.' },
  { text: '.padStart(2, ', class: 'method-call', tip: 'Preenche a string à esquerda com "0" até tamanho 2.' },
  { text: "'0')", class: 'string', tip: 'Caractere usado para preenchimento.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' },

  { text: '\n  ', class: 'default', tip: 'Quebra de linha e indentação.' },

  { text: 'const', class: 'keyword', tip: 'Declara variável constante.' },
  { text: ' segundos', class: 'variable', tip: 'Nome da variável que armazenará os segundos.' },
  { text: ' = ', class: 'default', tip: 'Operador de atribuição.' },
  { text: 'agora.getSeconds()', class: 'method-call', tip: 'Método que retorna os segundos atuais (0-59).' },
  { text: '.toString()', class: 'method-call', tip: 'Converte o número para string.' },
  { text: '.padStart(2, ', class: 'method-call', tip: 'Preenche com zeros à esquerda até tamanho 2.' },
  { text: "'0')", class: 'string', tip: 'Caractere usado para preencher.' },
  { text: ';', class: 'default', tip: 'Finaliza instrução.' },

  { text: '\n  ', class: 'default', tip: 'Quebra de linha e indentação.' },

  { text: 'document', class: 'object', tip: 'Objeto global que representa a página HTML.' },
  { text: '.', class: 'default', tip: 'Acessa propriedade ou método do objeto.' },
  { text: 'getElementById', class: 'method', tip: 'Método que seleciona um elemento HTML pelo seu id.' },
  { text: "('relogio')", class: 'string', tip: 'Id do elemento onde o relógio será exibido.' },
  { text: '.', class: 'default', tip: 'Acessa propriedade do elemento selecionado.' },
  { text: 'textContent', class: 'property', tip: 'Propriedade que define o texto exibido no elemento.' },
  { text: ' = ', class: 'default', tip: 'Atribui valor à propriedade.' },
  { text: '`', class: 'template-literal', tip: 'Início de template string para interpolar variáveis.' },
  { text: '${horas}', class: 'template-expression', tip: 'Insere o valor da variável horas na string.' },
  { text: ':', class: 'default', tip: 'Caracter literal para separar horas, minutos e segundos.' },
  { text: '${minutos}', class: 'template-expression', tip: 'Insere minutos.' },
  { text: ':', class: 'default', tip: 'Separador.' },
  { text: '${segundos}', class: 'template-expression', tip: 'Insere segundos.' },
  { text: '`;', class: 'template-literal', tip: 'Fim do template string.' },

  { text: '\n', class: 'default', tip: 'Fim da função anônima.' },
  { text: '}', class: 'default', tip: 'Fecha o bloco da arrow function.' },
  { text: ',', class: 'default', tip: 'Separador entre argumentos.' },
  { text: ' ', class: 'default', tip: 'Espaço em branco.' },
  { text: '1000', class: 'number', tip: 'Intervalo em milissegundos (1 segundo).' },
  { text: ')', class: 'default', tip: 'Fecha a chamada da função setInterval.' },
  { text: ';', class: 'default', tip: 'Finaliza a instrução.' }

];
