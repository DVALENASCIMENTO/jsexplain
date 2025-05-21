export const codeParts = [

  { text: 'let', class: 'keyword', tip: 'Declara uma variável que pode ser atualizada.' },
  { text: ' numeroSecreto = Math.floor(Math.random() * 100) + 1;', class: 'default', tip: 'Gera um número aleatório entre 1 e 100.' },

  { text: '\n\nfunction', class: 'keyword', tip: 'Declara uma função.' },
  { text: ' verificarPalpite()', class: 'function-name', tip: 'Função que será chamada ao enviar um palpite.' },
  { text: ' {', class: 'default', tip: 'Início do bloco da função.' },

  { text: '\n  const palpite = parseInt(document.getElementById(\'palpite\').value);', class: 'default', tip: 'Obtém e converte o valor digitado para número inteiro.' },

  { text: '\n  const resultado = document.getElementById(\'resultado\');', class: 'default', tip: 'Seleciona o elemento onde o resultado será exibido.' },

  { text: '\n\n  if (palpite === numeroSecreto) {', class: 'keyword', tip: 'Verifica se o palpite é igual ao número secreto.' },
  { text: '\n    resultado.textContent = \'Parabéns! Você acertou!\';', class: 'default', tip: 'Exibe mensagem de sucesso.' },

  { text: '\n  } else if (palpite < numeroSecreto) {', class: 'keyword', tip: 'Verifica se o palpite é menor que o número secreto.' },
  { text: '\n    resultado.textContent = \'Tente um número maior.\';', class: 'default', tip: 'Orienta o jogador a tentar um número maior.' },

  { text: '\n  } else {', class: 'default', tip: 'Caso contrário, o palpite é maior.' },
  { text: '\n    resultado.textContent = \'Tente um número menor.\';', class: 'default', tip: 'Orienta o jogador a tentar um número menor.' },

  { text: '\n  }', class: 'default', tip: 'Fim da estrutura condicional.' },
  { text: '\n}', class: 'default', tip: 'Fim da função verificarPalpite.' }

];
