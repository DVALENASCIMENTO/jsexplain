// js/codeParts/todo.js
export const codeParts = [
  { text: 'const', class: 'keyword', tip: 'Declara constante.' },
  { text: ' taskInput = document.getElementById(\'task-input\');', class: 'default', tip: 'Seleciona o campo de entrada da tarefa.' },

  { text: '\nconst addBtn = document.getElementById(\'add-btn\');', class: 'default', tip: 'Seleciona o botão de adicionar tarefa.' },
  { text: '\nconst taskList = document.getElementById(\'task-list\');', class: 'default', tip: 'Seleciona a lista onde as tarefas serão exibidas.' },

  { text: '\n\ndocument.addEventListener(\'DOMContentLoaded\', () => {', class: 'default', tip: 'Aguarda o carregamento do DOM para iniciar.' },
  { text: '\n  const saved = localStorage.getItem(\'tasks\');', class: 'default', tip: 'Recupera tarefas salvas localmente.' },
  { text: '\n  if (saved) taskList.innerHTML = saved;', class: 'default', tip: 'Se houver, insere tarefas na lista.' },
  { text: '\n});', class: 'default', tip: 'Fim do carregamento inicial.' },

  { text: '\n\naddBtn.addEventListener(\'click\', () => {', class: 'default', tip: 'Escuta o clique no botão de adicionar.' },
  { text: '\n  const text = taskInput.value.trim();', class: 'default', tip: 'Lê e limpa os espaços do valor digitado.' },
  { text: '\n  if (!text) return;', class: 'default', tip: 'Se estiver vazio, cancela.' },

  { text: '\n\n  const li = document.createElement(\'li\');', class: 'default', tip: 'Cria um novo item de lista.' },
  { text: '\n  li.textContent = text;', class: 'default', tip: 'Adiciona o texto da tarefa.' },

  { text: '\n\n  const del = document.createElement(\'button\');', class: 'default', tip: 'Cria um botão para excluir.' },
  { text: '\n  del.textContent = \'🗑\';', class: 'default', tip: 'Adiciona o ícone de lixeira ao botão.' },

  { text: '\n  del.addEventListener(\'click\', () => {', class: 'default', tip: 'Adiciona evento de clique no botão de deletar.' },
  { text: '\n    li.remove();', class: 'default', tip: 'Remove a tarefa da lista.' },
  { text: '\n    saveTasks();', class: 'default', tip: 'Salva a lista atualizada.' },
  { text: '\n  });', class: 'default', tip: 'Fim do evento do botão excluir.' },

  { text: '\n\n  li.appendChild(del);', class: 'default', tip: 'Adiciona o botão ao item da tarefa.' },
  { text: '\n  taskList.appendChild(li);', class: 'default', tip: 'Adiciona o item à lista.' },
  { text: '\n  taskInput.value = \'\';', class: 'default', tip: 'Limpa o campo de entrada.' },
  { text: '\n  saveTasks();', class: 'default', tip: 'Salva as tarefas após adicionar.' },
  { text: '\n});', class: 'default', tip: 'Fim do clique de adicionar tarefa.' },

  { text: '\n\nfunction saveTasks() {', class: 'function-name', tip: 'Função que salva a lista no armazenamento local.' },
  { text: '\n  localStorage.setItem(\'tasks\', taskList.innerHTML);', class: 'default', tip: 'Grava as tarefas como HTML no localStorage.' },
  { text: '\n}', class: 'default', tip: 'Fim da função saveTasks.' }
];
