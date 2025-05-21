export const codeParts = [

  { text: 'function', class: 'keyword', tip: 'Declara uma função.' },
  { text: ' converterMoeda()', class: 'function-name', tip: 'Função que realiza a conversão de moedas.' },
  { text: ' {', class: 'default', tip: '' },

  { text: '\n  const valor = parseFloat(document.getElementById("valor").value);', class: 'default', tip: 'Obtém e converte para número o valor digitado.' },
  { text: '\n  const de = document.getElementById("de").value;', class: 'default', tip: 'Obtém o código da moeda de origem.' },
  { text: '\n  const para = document.getElementById("para").value;', class: 'default', tip: 'Obtém o código da moeda de destino.' },

  { text: '\n\n  const taxas = {', class: 'default', tip: 'Objeto com as taxas de conversão entre moedas.' },
  { text: '\n    USD: { BRL: 5.2, EUR: 0.9 },', class: 'default', tip: 'Taxas de conversão do dólar para real e euro.' },
  { text: '\n    BRL: { USD: 0.19, EUR: 0.17 },', class: 'default', tip: 'Taxas de conversão do real para dólar e euro.' },
  { text: '\n    EUR: { USD: 1.1, BRL: 5.9 }', class: 'default', tip: 'Taxas de conversão do euro para dólar e real.' },
  { text: '\n  };', class: 'default', tip: 'Fecha o objeto taxas.' },

  { text: '\n\n  const taxa = taxas[de][para];', class: 'default', tip: 'Seleciona a taxa com base nas moedas escolhidas.' },
  { text: '\n  const convertido = valor * taxa;', class: 'default', tip: 'Calcula o valor convertido.' },

  { text: '\n\n  document.getElementById("resultado").innerText = ', class: 'default', tip: 'Exibe o resultado da conversão na tela.' },
  { text: '`', class: 'string', tip: 'Template literal para montar a string com o valor convertido.' },
  { text: '${valor} ${de} = ${convertido.toFixed(2)} ${para}', class: 'default', tip: 'Mensagem com valor original, moeda de origem, valor convertido e moeda de destino.' },
  { text: '`;', class: 'default', tip: 'Fecha o template literal.' },

  { text: '\n}', class: 'default', tip: 'Fim da função converterMoeda.' }

];
