export const codeParts = [
  { text: 'const', class: 'keyword', tip: 'Declara uma constante com escopo de bloco.' },
  { text: ' textarea ', class: 'variable', tip: 'Variável que irá armazenar a referência à área de texto.' },
  { text: '= document.getElementById("markdown-input");', class: 'function', tip: 'Seleciona o elemento HTML com id "markdown-input".' },

  { text: '\nconst', class: 'keyword', tip: 'Declara outra constante.' },
  { text: ' preview ', class: 'variable', tip: 'Variável que irá conter o elemento de visualização renderizada.' },
  { text: '= document.getElementById("preview");', class: 'function', tip: 'Seleciona o elemento HTML com id "preview".' },

  { text: '\n\nfunction', class: 'keyword', tip: 'Declara uma nova função chamada parseMarkdown.' },
  { text: ' parseMarkdown(text)', class: 'function-name', tip: 'Função que recebe o texto e converte de Markdown para HTML.' },
  { text: ' {', class: 'default', tip: 'Abre o bloco da função.' },

  { text: '\n  return text', class: 'return', tip: 'Retorna o texto processado.' },
  { text: '\n    .replace(/^### (.*$)/gim, "<h3>$1</h3>")', class: 'method', tip: 'Converte títulos de nível 3 (###) em tags <h3>.' },
  { text: '\n    .replace(/^## (.*$)/gim, "<h2>$1</h2>")', class: 'method', tip: 'Converte títulos de nível 2 (##) em <h2>.' },
  { text: '\n    .replace(/^# (.*$)/gim, "<h1>$1</h1>")', class: 'method', tip: 'Converte títulos de nível 1 (#) em <h1>.' },
  { text: '\n    .replace(/\\*\\*(.*)\\*\\*/gim, "<b>$1</b>")', class: 'method', tip: 'Converte texto entre ** para negrito.' },
  { text: '\n    .replace(/\\*(.*)\\*/gim, "<i>$1</i>")', class: 'method', tip: 'Converte texto entre * para itálico.' },
  { text: '\n    .replace(/\\[(.*?)\\]\\((.*?)\\)/gim, \'<a href="$2" target="_blank">$1</a>\')', class: 'method', tip: 'Converte links Markdown em <a>.' },
  { text: '\n    .replace(/\\n$/gim, "<br>");', class: 'method', tip: 'Converte nova linha em quebra de linha HTML.' },

  { text: '\n}', class: 'default', tip: 'Fecha o bloco da função parseMarkdown.' },

  { text: '\n\nfunction', class: 'keyword', tip: 'Declara a função updatePreview.' },
  { text: ' updatePreview()', class: 'function-name', tip: 'Atualiza a visualização sempre que o conteúdo mudar.' },
  { text: ' {', class: 'default', tip: '' },

  { text: '\n  const markdown = textarea.value;', class: 'default', tip: 'Pega o valor digitado no textarea.' },
  { text: '\n  localStorage.setItem("markdownDraft", markdown);', class: 'default', tip: 'Salva o rascunho no armazenamento local.' },
  { text: '\n  preview.innerHTML = parseMarkdown(markdown);', class: 'default', tip: 'Renderiza o Markdown convertido no elemento preview.' },

  { text: '\n}', class: 'default', tip: 'Fecha a função updatePreview.' },

  { text: '\n\ntextarea.addEventListener("input", updatePreview);', class: 'event', tip: 'Adiciona um ouvinte para atualizar a visualização quando o usuário digitar.' },

  { text: '\n\nwindow.addEventListener("load", () => {', class: 'event', tip: 'Executa essa função quando a página for carregada.' },
  { text: '\n  const saved = localStorage.getItem("markdownDraft");', class: 'default', tip: 'Pega o conteúdo salvo anteriormente.' },
  { text: '\n  if (saved) {', class: 'condition', tip: 'Verifica se há rascunho salvo.' },
  { text: '\n    textarea.value = saved;', class: 'default', tip: 'Preenche o textarea com o conteúdo salvo.' },
  { text: '\n    updatePreview();', class: 'default', tip: 'Atualiza a visualização.' },
  { text: '\n  }', class: 'default', tip: '' },
  { text: '\n});', class: 'default', tip: 'Fecha o bloco do evento onload.' }
];
