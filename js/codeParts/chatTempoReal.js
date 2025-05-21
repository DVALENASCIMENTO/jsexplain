// js/codeParts/chat.js
export const codeParts = [
  { text: 'const', class: 'keyword', tip: 'Declara uma constante de escopo de bloco.' },
  { text: ' socket = io();', class: 'default', tip: 'Cria uma conexão WebSocket com o servidor Socket.IO.' },

  { text: '\nconst form = document.getElementById(\'form\');', class: 'default', tip: 'Seleciona o <form> responsável pelo envio da mensagem.' },
  { text: '\nconst input = document.getElementById(\'input\');', class: 'default', tip: 'Seleciona o campo de texto da mensagem.' },
  { text: '\nconst messages = document.getElementById(\'messages\');', class: 'default', tip: 'Seleciona a <ul>/<ol> onde as mensagens serão listadas.' },

  { text: '\n\nform.addEventListener(\'submit\', (e) => {', class: 'default', tip: 'Intercepta o evento de envio do formulário.' },
  { text: '\n  e.preventDefault();', class: 'default', tip: 'Impede que o navegador recarregue a página.' },
  { text: '\n  if (input.value.trim() === \'\') return;', class: 'default', tip: 'Cancela se o usuário não digitou nada além de espaços.' },
  { text: '\n  socket.emit(\'chat message\', input.value);', class: 'default', tip: 'Envia o texto da mensagem ao servidor em um evento chamado "chat message".' },
  { text: '\n  input.value = \'\';', class: 'default', tip: 'Limpa o campo de entrada para a próxima mensagem.' },
  { text: '\n});', class: 'default', tip: 'Fecha o callback do listener.' },

  { text: '\n\nsocket.on(\'chat message\', (msg) => {', class: 'default', tip: 'Escuta mensagens vindas do servidor no mesmo canal "chat message".' },
  { text: '\n  const li = document.createElement(\'li\');', class: 'default', tip: 'Cria um novo elemento de lista para exibir a mensagem.' },
  { text: '\n  li.textContent = msg;', class: 'default', tip: 'Define o texto recebido no <li>.' },
  { text: '\n  messages.appendChild(li);', class: 'default', tip: 'Adiciona o <li> ao final da lista de mensagens.' },
  { text: '\n  messages.scrollTop = messages.scrollHeight;', class: 'default', tip: 'Rola a área de mensagens para mostrar a mais recente.' },
  { text: '\n});', class: 'default', tip: 'Fecha o callback do listener de mensagens.' }
];
