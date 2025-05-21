export const codeParts = [

  { text: 'function validarCPF(cpf) {', class: 'function-name', tip: 'Declara uma função que verifica se o CPF é válido.' },

  { text: '\n  cpf = cpf.replace(/\\D/g, "");', class: 'default', tip: 'Remove todos os caracteres que não são dígitos (como pontos e traços).' },

  { text: '\n\n  if (cpf.length !== 11 || /^(\\d)\\1+$/.test(cpf)) {', class: 'conditional', tip: 'Verifica se o CPF tem 11 dígitos e se não é formado por números repetidos.' },
  { text: '\n    return false;', class: 'default', tip: 'CPF inválido se não atender às condições.' },
  { text: '\n  }', class: 'default', tip: 'Fim do bloco de validação básica.' },

  { text: '\n\n  let soma = 0;', class: 'default', tip: 'Inicializa a soma para o primeiro dígito verificador.' },
  { text: '\n  for (let i = 0; i < 9; i++) {', class: 'loop', tip: 'Percorre os primeiros 9 dígitos do CPF.' },
  { text: '\n    soma += parseInt(cpf.charAt(i)) * (10 - i);', class: 'default', tip: 'Multiplica cada dígito pela posição inversa e soma.' },
  { text: '\n  }', class: 'default', tip: 'Fim do primeiro laço.' },

  { text: '\n\n  let resto = (soma * 10) % 11;', class: 'default', tip: 'Calcula o resto da divisão para o 1º dígito verificador.' },
  { text: '\n  if (resto === 10 || resto === 11) resto = 0;', class: 'conditional', tip: 'Converte valores 10 e 11 para 0.' },
  { text: '\n  if (resto !== parseInt(cpf.charAt(9))) return false;', class: 'conditional', tip: 'Verifica se o 1º dígito verificador é válido.' },

  { text: '\n\n  soma = 0;', class: 'default', tip: 'Zera a soma para o 2º dígito verificador.' },
  { text: '\n  for (let i = 0; i < 10; i++) {', class: 'loop', tip: 'Percorre os primeiros 10 dígitos agora.' },
  { text: '\n    soma += parseInt(cpf.charAt(i)) * (11 - i);', class: 'default', tip: 'Multiplica cada dígito pela posição inversa e soma.' },
  { text: '\n  }', class: 'default', tip: 'Fim do segundo laço.' },

  { text: '\n\n  resto = (soma * 10) % 11;', class: 'default', tip: 'Calcula o resto para o 2º dígito verificador.' },
  { text: '\n  if (resto === 10 || resto === 11) resto = 0;', class: 'conditional', tip: 'Converte valores 10 e 11 para 0 novamente.' },

  { text: '\n\n  return resto === parseInt(cpf.charAt(10));', class: 'default', tip: 'Retorna true se o 2º dígito for válido, senão false.' },
  { text: '\n}', class: 'default', tip: 'Fim da função validarCPF.' }

];
