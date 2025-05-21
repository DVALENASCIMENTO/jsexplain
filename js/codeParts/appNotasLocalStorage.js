export const codeParts = [

  { text: 'function salvarNota() {', class: 'function-name', tip: 'Função para salvar uma nova nota.' },
  { text: '\n  const nota = document.getElementById("nova-nota").value;', class: 'default', tip: 'Obtém o valor digitado no campo de nota.' },
  { text: '\n  if (nota.trim() === "") return;', class: 'default', tip: 'Evita salvar notas vazias.' },

  { text: '\n\n  const notas = JSON.parse(localStorage.getItem("notas")) || [];', class: 'default', tip: 'Carrega as notas do LocalStorage ou inicia um array vazio.' },
  { text: '\n  notas.push(nota);', class: 'default', tip: 'Adiciona a nova nota ao array.' },
  { text: '\n  localStorage.setItem("notas", JSON.stringify(notas));', class: 'default', tip: 'Salva as notas atualizadas no LocalStorage.' },

  { text: '\n\n  document.getElementById("nova-nota").value = "";', class: 'default', tip: 'Limpa o campo de entrada.' },
  { text: '\n  exibirNotas();', class: 'default', tip: 'Atualiza a lista exibida na tela.' },
  { text: '\n}', class: 'default', tip: 'Fim da função salvarNota.' },

  { text: '\n\nfunction exibirNotas() {', class: 'function-name', tip: 'Função que mostra as notas salvas.' },
  { text: '\n  const container = document.getElementById("lista-notas");', class: 'default', tip: 'Seleciona o container da lista de notas.' },
  { text: '\n  container.innerHTML = "";', class: 'default', tip: 'Limpa a lista atual para reexibir.' },

  { text: '\n\n  const notas = JSON.parse(localStorage.getItem("notas")) || [];', class: 'default', tip: 'Recarrega as notas do LocalStorage.' },

  { text: '\n\n  notas.forEach((nota, index) => {', class: 'default', tip: 'Percorre cada nota e seu índice.' },
  { text: '\n    const item = document.createElement("li");', class: 'default', tip: 'Cria um item de lista para a nota.' },
  { text: '\n    item.textContent = nota;', class: 'default', tip: 'Define o texto da nota no item.' },

  { text: '\n\n    const botaoExcluir = document.createElement("button");', class: 'default', tip: 'Cria o botão de exclusão.' },
  { text: '\n    botaoExcluir.textContent = "Excluir";', class: 'default', tip: 'Define o texto do botão.' },
  { text: '\n    botaoExcluir.onclick = () => excluirNota(index);', class: 'default', tip: 'Define o comportamento de clique do botão.' },

  { text: '\n\n    item.appendChild(botaoExcluir);', class: 'default', tip: 'Adiciona o botão ao item de lista.' },
  { text: '\n    container.appendChild(item);', class: 'default', tip: 'Adiciona o item de nota à lista na tela.' },
  { text: '\n  });', class: 'default', tip: 'Fim do loop forEach.' },
  { text: '\n}', class: 'default', tip: 'Fim da função exibirNotas.' },

  { text: '\n\nfunction excluirNota(indice) {', class: 'function-name', tip: 'Função para remover uma nota pelo índice.' },
  { text: '\n  const notas = JSON.parse(localStorage.getItem("notas")) || [];', class: 'default', tip: 'Carrega notas novamente.' },
  { text: '\n  notas.splice(indice, 1);', class: 'default', tip: 'Remove a nota pelo índice.' },
  { text: '\n  localStorage.setItem("notas", JSON.stringify(notas));', class: 'default', tip: 'Atualiza as notas no LocalStorage.' },
  { text: '\n  exibirNotas();', class: 'default', tip: 'Atualiza a tela após exclusão.' },
  { text: '\n}', class: 'default', tip: 'Fim da função excluirNota.' },

  { text: '\n\nexibirNotas();', class: 'default', tip: 'Exibe notas salvas quando a página carrega.' }

];
