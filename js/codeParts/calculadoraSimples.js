export const codeParts = [

  { text: 'function', class: 'keyword', tip: 'Declara uma nova função.' },
  { text: ' calcular', class: 'function-name', tip: 'Função que executa o cálculo com base na operação passada.' },
  { text: '(operacao)', class: 'default', tip: 'Parâmetro que representa o tipo de operação matemática ("+", "-", "*", "/").' },
  { text: ' {', class: 'default', tip: 'Início do bloco da função.' },

  { text: '\n  const', class: 'keyword', tip: 'Declara uma constante.' },
  { text: ' n1 = parseFloat(document.getElementById(\'num1\').value);', class: 'default', tip: 'Captura o valor do primeiro número do input e converte para número decimal.' },

  { text: '\n  const n2 = parseFloat(document.getElementById(\'num2\').value);', class: 'default', tip: 'Captura o valor do segundo número do input e converte para número decimal.' },

  { text: '\n  let', class: 'keyword', tip: 'Declara uma variável que pode ser alterada.' },
  { text: ' resultado;', class: 'variable', tip: 'Armazenará o resultado da operação.' },

  { text: '\n\n  if', class: 'keyword', tip: 'Inicia uma verificação condicional.' },
  { text: ' (operacao === \'+\')', class: 'default', tip: 'Se a operação for soma...' },
  { text: ' { resultado = n1 + n2; }', class: 'default', tip: '...calcula a soma.' },

  { text: '\n  else if (operacao === \'-\') { resultado = n1 - n2; }', class: 'default', tip: 'Se for subtração, calcula a diferença.' },

  { text: '\n  else if (operacao === \'*\') { resultado = n1 * n2; }', class: 'default', tip: 'Se for multiplicação, calcula o produto.' },

  { text: '\n  else if (operacao === \'/\') { resultado = n1 / n2; }', class: 'default', tip: 'Se for divisão, calcula o quociente.' },

  { text: '\n\n  document.getElementById(\'resultado\').textContent = `Resultado: ${resultado}`;', class: 'default', tip: 'Exibe o resultado no elemento HTML com id "resultado".' },

  { text: '\n}', class: 'default', tip: 'Fim da função.' }

];
