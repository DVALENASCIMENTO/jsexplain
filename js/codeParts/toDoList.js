export const codeParts = [
  { text: 'function', class: 'keyword', tip: 'Declara uma função nomeada.' },
  { text: ' ', class: 'default', tip: '' },
  { text: 'adicionarTarefa', class: 'function-name', tip: 'Função chamada quando o usuário clica no botão “Adicionar”.' },
  { text: '()', class: 'default', tip: 'Parênteses vazios ⇢ a função não recebe parâmetros.' },
  { text: ' {', class: 'default', tip: 'Início do bloco da função.' },

  { text: '\n  const', class: 'keyword', tip: 'Declara uma constante — o valor não será reatribuído.' },
  { text: ' input', class: 'variable', tip: 'Referência ao campo de texto onde o usuário digita a tarefa.' },
  { text: ' = ', class: 'default', tip: 'Atribuição.' },
  { text: 'document.getElementById', class: 'method', tip: 'Seleciona um elemento do DOM pelo atributo id.' },
  { text: "('tarefa')", class: 'string', tip: 'Id do <input> que contém o texto da tarefa.' },
  { text: ';', class: 'default', tip: 'Termina a instrução.' },

  { text: '\n  const lista = document.getElementById(\'lista\');', class: 'default', tip: 'Seleciona a <ul> (ou <ol>) onde as tarefas serão inseridas.' },

  { text: '\n  const item = document.createElement(\'li\');', class: 'default', tip: 'Cria dinamicamente um novo elemento <li> para a lista.' },

  { text: '\n  item.textContent = input.value;', class: 'default', tip: 'Define o texto do <li> com o conteúdo que o usuário digitou.' },

  { text: '\n  item.onclick = () => item.remove();', class: 'default', tip: 'Ao clicar no item, executa uma arrow-function que remove o próprio <li> da lista.' },

  { text: '\n  lista.appendChild(item);', class: 'default', tip: 'Adiciona o novo <li> como filho da lista.' },

  { text: '\n  input.value = \'\';', class: 'default', tip: 'Limpa o campo de texto para permitir digitar outra tarefa.' },

  { text: '\n}', class: 'default', tip: 'Fecha o bloco da função.' }
];
