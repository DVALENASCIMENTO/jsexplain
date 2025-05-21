export const codeParts = [

  { text: 'function calcularIMC() {', class: 'function-name', tip: 'Declara a função que calcula o IMC com base no peso e altura.' },

  { text: '\n  const peso = parseFloat(document.getElementById("peso").value);', class: 'default', tip: 'Obtém o valor do peso e converte para número decimal.' },
  { text: '\n  const altura = parseFloat(document.getElementById("altura").value);', class: 'default', tip: 'Obtém o valor da altura e converte para número decimal.' },

  { text: '\n\n  if (isNaN(peso) || isNaN(altura) || altura <= 0) {', class: 'conditional', tip: 'Verifica se os valores inseridos são válidos.' },
  { text: '\n    document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";', class: 'default', tip: 'Exibe mensagem de erro se os valores forem inválidos.' },
  { text: '\n    return;', class: 'default', tip: 'Encerra a execução da função se houver erro.' },
  { text: '\n  }', class: 'default', tip: 'Fim do bloco de verificação.' },

  { text: '\n\n  const imc = peso / (altura * altura);', class: 'default', tip: 'Fórmula padrão para calcular o IMC.' },
  { text: '\n  let classificacao = "";', class: 'default', tip: 'Inicializa a variável de texto que descreverá a classificação.' },

  { text: '\n\n  if (imc < 18.5) {', class: 'conditional', tip: 'Se o IMC for menor que 18.5, está abaixo do peso.' },
  { text: '\n    classificacao = "Abaixo do peso";', class: 'default', tip: 'Define a classificação.' },
  { text: '\n  } else if (imc < 24.9) {', class: 'conditional', tip: 'Entre 18.5 e 24.9: peso normal.' },
  { text: '\n    classificacao = "Peso normal";', class: 'default', tip: '' },
  { text: '\n  } else if (imc < 29.9) {', class: 'conditional', tip: 'Entre 25 e 29.9: sobrepeso.' },
  { text: '\n    classificacao = "Sobrepeso";', class: 'default', tip: '' },
  { text: '\n  } else if (imc < 34.9) {', class: 'conditional', tip: 'Entre 30 e 34.9: obesidade grau I.' },
  { text: '\n    classificacao = "Obesidade grau I";', class: 'default', tip: '' },
  { text: '\n  } else if (imc < 39.9) {', class: 'conditional', tip: 'Entre 35 e 39.9: obesidade grau II.' },
  { text: '\n    classificacao = "Obesidade grau II";', class: 'default', tip: '' },
  { text: '\n  } else {', class: 'conditional', tip: '40 ou mais: obesidade grau III.' },
  { text: '\n    classificacao = "Obesidade grau III";', class: 'default', tip: '' },
  { text: '\n  }', class: 'default', tip: 'Fim dos testes de classificação.' },

  { text: '\n\n  document.getElementById("resultado").textContent =', class: 'default', tip: 'Exibe o resultado na tela.' },
  { text: ' `IMC: ${imc.toFixed(2)} - ${classificacao}`;', class: 'string', tip: 'Mostra o valor do IMC com duas casas decimais e a classificação correspondente.' },

  { text: '\n}', class: 'default', tip: 'Fim da função calcularIMC.' }

];
