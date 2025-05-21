// js/codeParts/kanban.js
export const codeParts = [
  { text: 'const', class: 'keyword', tip: 'Declara uma constante.' },
  { text: ' cards = document.querySelectorAll(\'.card\');', class: 'default', tip: 'Seleciona todos os elementos com a classe ".card".' },

  { text: '\nconst', class: 'keyword', tip: 'Declara uma constante.' },
  { text: ' columns = document.querySelectorAll(\'.column\');', class: 'default', tip: 'Seleciona todas as colunas do quadro Kanban.' },

  { text: '\n\ncards.forEach(card => {', class: 'loop', tip: 'Percorre cada cartão individualmente.' },
  { text: '\n  card.setAttribute(\'draggable\', \'true\');', class: 'default', tip: 'Permite que o elemento seja arrastável (drag and drop).' },

  { text: '\n\n  card.addEventListener(\'dragstart\', e => {', class: 'default', tip: 'Detecta quando o arrasto do cartão começa.' },
  { text: '\n    e.dataTransfer.setData(\'text/plain\', card.id);', class: 'default', tip: 'Armazena o ID do cartão arrastado para ser recuperado depois.' },
  { text: '\n  });', class: 'default', tip: 'Fim do dragstart.' },
  { text: '\n});', class: 'default', tip: 'Fim do loop dos cards.' },

  { text: '\n\ncolumns.forEach(column => {', class: 'loop', tip: 'Percorre cada coluna.' },

  { text: '\n  column.addEventListener(\'dragover\', e => {', class: 'default', tip: 'Permite que o cartão seja solto sobre essa coluna.' },
  { text: '\n    e.preventDefault();', class: 'default', tip: 'Evita o comportamento padrão de bloqueio.' },
  { text: '\n  });', class: 'default', tip: 'Fim do evento dragover.' },

  { text: '\n\n  column.addEventListener(\'drop\', e => {', class: 'default', tip: 'Detecta quando um cartão é solto na coluna.' },
  { text: '\n    e.preventDefault();', class: 'default', tip: 'Evita o comportamento padrão.' },
  { text: '\n    const id = e.dataTransfer.getData(\'text/plain\');', class: 'default', tip: 'Recupera o ID do cartão arrastado.' },
  { text: '\n    const draggedCard = document.getElementById(id);', class: 'default', tip: 'Seleciona o elemento do cartão com base no ID.' },
  { text: '\n    column.appendChild(draggedCard);', class: 'default', tip: 'Move o cartão para a nova coluna.' },
  { text: '\n  });', class: 'default', tip: 'Fim do evento drop.' },
  { text: '\n});', class: 'default', tip: 'Fim do loop das colunas.' }
];
