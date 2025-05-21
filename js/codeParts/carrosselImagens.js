export const codeParts = [

  { text: 'const', class: 'keyword', tip: 'Declara uma constante.' },
  { text: ' imagens = [', class: 'default', tip: 'Array com nomes dos arquivos de imagem.' },
  { text: '"img1.jpg", "img2.jpg", "img3.jpg"', class: 'string', tip: 'Nomes das imagens que serão exibidas.' },
  { text: '];', class: 'default', tip: 'Finaliza o array.' },

  { text: '\n\nlet', class: 'keyword', tip: 'Declara uma variável que pode mudar.' },
  { text: ' indice = 0;', class: 'default', tip: 'Indica qual imagem está sendo exibida.' },

  { text: '\n\nfunction mostrarImagem() {', class: 'function-name', tip: 'Mostra a imagem atual no elemento <img>.' },
  { text: '\n  const img = document.getElementById("carrossel-img");', class: 'default', tip: 'Seleciona o elemento de imagem na página.' },
  { text: '\n  img.src = imagens[indice];', class: 'default', tip: 'Define a imagem exibida com base no índice atual.' },
  { text: '\n}', class: 'default', tip: 'Fim da função mostrarImagem.' },

  { text: '\n\nfunction anterior() {', class: 'function-name', tip: 'Mostra a imagem anterior no carrossel.' },
  { text: '\n  indice = (indice - 1 + imagens.length) % imagens.length;', class: 'default', tip: 'Decrementa o índice e garante que ele fique dentro dos limites (com rotação).' },
  { text: '\n  mostrarImagem();', class: 'default', tip: 'Chama a função para exibir a nova imagem.' },
  { text: '\n}', class: 'default', tip: 'Fim da função anterior.' },

  { text: '\n\nfunction proxima() {', class: 'function-name', tip: 'Mostra a próxima imagem no carrossel.' },
  { text: '\n  indice = (indice + 1) % imagens.length;', class: 'default', tip: 'Incrementa o índice com rotação circular.' },
  { text: '\n  mostrarImagem();', class: 'default', tip: 'Atualiza a imagem exibida.' },
  { text: '\n}', class: 'default', tip: 'Fim da função proxima.' },

  { text: '\n\ndocument.getElementById("btn-anterior").onclick = anterior;', class: 'default', tip: 'Associa o botão "anterior" à função correspondente.' },
  { text: '\ndocument.getElementById("btn-proxima").onclick = proxima;', class: 'default', tip: 'Associa o botão "próxima" à função correspondente.' },

  { text: '\n\nmostrarImagem();', class: 'default', tip: 'Exibe a imagem inicial ao carregar a página.' }

];
