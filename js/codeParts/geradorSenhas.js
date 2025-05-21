export const codeParts = [

  { text: 'function gerarSenha(tamanho = 12) {', class: 'function-name', tip: 'Declara uma função que gera uma senha aleatória. Se nenhum valor for passado, o tamanho padrão será 12.' },

  { text: '\n  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";', class: 'string', tip: 'Define os caracteres possíveis que podem aparecer na senha.' },

  { text: '\n  let senha = "";', class: 'default', tip: 'Inicializa a variável onde a senha será construída.' },

  { text: '\n  for (let i = 0; i < tamanho; i++) {', class: 'loop', tip: 'Laço que irá adicionar um caractere aleatório por vez até atingir o tamanho desejado.' },
  { text: '\n    const indice = Math.floor(Math.random() * caracteres.length);', class: 'default', tip: 'Gera um índice aleatório para acessar um caractere da string.' },
  { text: '\n    senha += caracteres[indice];', class: 'default', tip: 'Adiciona o caractere aleatório à senha.' },
  { text: '\n  }', class: 'default', tip: 'Fecha o laço for.' },

  { text: '\n  document.getElementById("resultado").textContent = senha;', class: 'default', tip: 'Exibe a senha gerada no elemento com id "resultado".' },

  { text: '\n}', class: 'default', tip: 'Fim da função gerarSenha.' }

];
