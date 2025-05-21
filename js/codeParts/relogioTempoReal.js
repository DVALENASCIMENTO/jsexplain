export const codeParts = [

  { text: 'function', class: 'keyword', tip: 'Declara uma nova função.' },
  { text: ' atualizarRelogio()', class: 'function-name', tip: 'Função que atualiza o horário exibido na tela.' },
  { text: ' {', class: 'default', tip: 'Início do bloco da função.' },

  { text: '\n  const agora = new Date();', class: 'default', tip: 'Cria um objeto com a data e hora atual.' },

  { text: '\n  const horas = agora.getHours()', class: 'default', tip: 'Obtém a hora atual (0–23).' },
  { text: '.toString().padStart(2, \'0\');', class: 'method', tip: 'Converte em string e preenche com zero à esquerda se necessário.' },

  { text: '\n  const minutos = agora.getMinutes()', class: 'default', tip: 'Obtém os minutos atuais (0–59).' },
  { text: '.toString().padStart(2, \'0\');', class: 'method', tip: 'Formata os minutos com dois dígitos.' },

  { text: '\n  const segundos = agora.getSeconds()', class: 'default', tip: 'Obtém os segundos atuais (0–59).' },
  { text: '.toString().padStart(2, \'0\');', class: 'method', tip: 'Formata os segundos com dois dígitos.' },

  { text: '\n\n  const horario = `${horas}:${minutos}:${segundos}`;', class: 'string', tip: 'Monta a string do horário completo no formato HH:MM:SS.' },

  { text: '\n  document.getElementById(\'relogio\').textContent = horario;', class: 'default', tip: 'Exibe o horário no elemento com id "relogio".' },

  { text: '\n}', class: 'default', tip: 'Fim da função atualizarRelogio.' },

  { text: '\n\nsetInterval', class: 'method', tip: 'Executa uma função repetidamente em um intervalo fixo.' },
  { text: '(atualizarRelogio, 1000);', class: 'default', tip: 'Chama a função atualizarRelogio a cada 1000 milissegundos (1 segundo).' }

];
