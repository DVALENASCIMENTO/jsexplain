export const codeParts = [

  { text: 'function', class: 'keyword', tip: 'Declara uma função.' },
  { text: ' jogar(escolhaUsuario)', class: 'function-name', tip: 'Função que recebe a jogada do usuário.' },
  { text: ' {', class: 'default', tip: 'Início da função.' },

  { text: '\n  const opcoes = [\'pedra\', \'papel\', \'tesoura\'];', class: 'array', tip: 'Array com as opções válidas do jogo.' },

  { text: '\n  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];', class: 'default', tip: 'Escolhe aleatoriamente uma jogada para o computador.' },

  { text: '\n  const resultado = document.getElementById(\'resultado\');', class: 'default', tip: 'Seleciona o elemento onde o resultado será exibido.' },

  { text: '\n\n  if (escolhaUsuario === escolhaComputador) {', class: 'keyword', tip: 'Verifica se houve empate.' },
  { text: '\n    resultado.textContent = \'Empate!\';', class: 'default', tip: 'Exibe a mensagem de empate.' },

  { text: '\n  } else if (', class: 'keyword', tip: 'Verifica as condições de vitória do usuário.' },
  { text: '\n    (escolhaUsuario === \'pedra\' && escolhaComputador === \'tesoura\') ||', class: 'default', tip: 'Pedra vence Tesoura.' },
  { text: '\n    (escolhaUsuario === \'papel\' && escolhaComputador === \'pedra\') ||', class: 'default', tip: 'Papel vence Pedra.' },
  { text: '\n    (escolhaUsuario === \'tesoura\' && escolhaComputador === \'papel\')', class: 'default', tip: 'Tesoura vence Papel.' },
  { text: '\n  ) {', class: 'default', tip: 'Se alguma condição de vitória for verdadeira...' },
  { text: '\n    resultado.textContent = \'Você venceu!\';', class: 'default', tip: 'Exibe a mensagem de vitória.' },

  { text: '\n  } else {', class: 'default', tip: 'Caso contrário, o usuário perdeu.' },
  { text: '\n    resultado.textContent = \'Você perdeu!\';', class: 'default', tip: 'Exibe a mensagem de derrota.' },

  { text: '\n  }', class: 'default', tip: 'Fim do bloco condicional.' },
  { text: '\n}', class: 'default', tip: 'Fim da função jogar.' }

];
