export const codeParts = [
  { text: 'const editor = document.getElementById("code-editor");', class: 'default', tip: 'Seleciona o textarea do editor.' },
  { text: 'const runBtn = document.getElementById("run-btn");', class: 'default', tip: 'Seleciona o botão Executar.' },
  { text: 'const preview = document.getElementById("preview");', class: 'default', tip: 'Seleciona o iframe onde o código será executado.' },

  { text: '\nrunBtn.addEventListener("click", () => {', class: 'default', tip: 'Quando o usuário clicar em Executar:' },
  { text: '  const userCode = editor.value;', class: 'default', tip: 'Pega o código digitado no textarea.' },

  { text: '  const wrappedCode = `', class: 'default', tip: 'Cria um template HTML para rodar o código dentro do iframe.' },
  { text: '    <script>', class: 'default', tip: 'Abre tag script no template.' },
  { text: '      try {', class: 'default', tip: 'Tenta executar o código para capturar erros.' },
  { text: '        ${userCode}', class: 'default', tip: 'Insere o código do usuário.' },
  { text: '      } catch (e) {', class: 'default', tip: 'Captura erros de execução.' },
  { text: '        document.body.innerHTML = \'<pre style="color: red;">\' + e + \'</pre>\';', class: 'default', tip: 'Mostra erro na tela do iframe.' },
  { text: '      }', class: 'default', tip: 'Fim do try/catch.' },
  { text: '    <\\/script>', class: 'default', tip: 'Fecha tag script, com escape para evitar fechamento precoce no template.' },
  { text: '  `;', class: 'default', tip: 'Fim do template.' },

  { text: '  preview.srcdoc = wrappedCode;', class: 'default', tip: 'Define o conteúdo do iframe com o código para execução.' },
  { text: '});', class: 'default', tip: 'Fim do event listener.' },
];
