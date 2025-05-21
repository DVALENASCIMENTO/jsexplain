// js/codeParts/algovis.js
export const codeParts = [
  { text: 'const', class: 'keyword', tip: 'Declaração de constante.' },
  { text: ' ARRAY_SIZE = 30;', class: 'number', tip: 'Define quantas barras serão exibidas.' },

  { text: '\nconst DELAY_MS = 100;', class: 'number', tip: 'Intervalo (ms) entre cada quadro da animação.' },

  { text: '\n\nlet', class: 'keyword', tip: 'Declara variável que mudará durante o programa.' },
  { text: ' data = [];', class: 'default', tip: 'Array que guarda os valores a ordenar.' },

  { text: '\nconst container = document.getElementById(\'array\');', class: 'default', tip: 'Div onde as barras serão desenhadas.' },
  { text: '\nconst sortBtn  = document.getElementById(\'sort-btn\');', class: 'default', tip: 'Botão que inicia a ordenação.' },
  { text: '\nconst resetBtn = document.getElementById(\'reset-btn\');', class: 'default', tip: 'Botão que gera novos valores.' },

  { text: '\n\nreset();', class: 'default', tip: 'Cria um array inicial aleatório.' },
  { text: '\ndraw();',  class: 'default', tip: 'Desenha as barras na tela.' },

  { text: '\n\nsortBtn.onclick  = () => bubbleSort();', class: 'default', tip: 'Liga o botão “Ordenar” à função de animação.' },
  { text: '\nresetBtn.onclick = () => { reset(); draw(); };', class: 'default', tip: 'Liga “Reset” para gerar novo array e redesenhar.' },

  { text: '\n\nfunction reset() {', class: 'function-name', tip: 'Preenche o array com números aleatórios.' },
  { text: '\n  data = Array.from({ length: ARRAY_SIZE }, () => rand(20, 200));', class: 'default', tip: 'Cria ARRAY_SIZE valores entre 20 e 200.' },
  { text: '\n}', class: 'default', tip: 'Fecha reset().' },

  { text: '\n\nfunction draw(highA = -1, highB = -1) {', class: 'function-name', tip: 'Desenha/atualiza as barras; pode destacar duas posições.' },
  { text: '\n  container.innerHTML = \'\';', class: 'default', tip: 'Limpa o conteúdo anterior.' },
  { text: '\n  data.forEach((v, i) => {', class: 'loop', tip: 'Cria uma barra para cada valor.' },
  { text: '\n    const bar = document.createElement(\'div\');', class: 'default', tip: 'Cria o elemento visual da barra.' },
  { text: '\n    bar.className = \'bar\';', class: 'default', tip: 'Classe base para estilos.' },
  { text: '\n    bar.style.height = v + \'px\';', class: 'default', tip: 'Define altura proporcional ao valor.' },
  { text: '\n    if (i === highA || i === highB) bar.classList.add(\'highlight\');', class: 'default', tip: 'Destaca barras comparadas.' },
  { text: '\n    container.appendChild(bar);', class: 'default', tip: 'Adiciona barra ao DOM.' },
  { text: '\n  });', class: 'default', tip: 'Fim do forEach.' },
  { text: '\n}', class: 'default', tip: 'Fecha draw().' },

  { text: '\n\nasync function bubbleSort() {', class: 'function-name', tip: 'Algoritmo Bubble Sort animado (usa await para pausar).' },
  { text: '\n  for (let i = 0; i < data.length; i++) {', class: 'loop', tip: 'Laço externo do Bubble Sort.' },
  { text: '\n    for (let j = 0; j < data.length - i - 1; j++) {', class: 'loop', tip: 'Compara pares adjacentes.' },
  { text: '\n      draw(j, j + 1);', class: 'default', tip: 'Destaca as duas barras analisadas.' },
  { text: '\n      await sleep(DELAY_MS);', class: 'async', tip: 'Pausa para exibir animação.' },
  { text: '\n      if (data[j] > data[j + 1]) {', class: 'conditional', tip: 'Se fora de ordem, troca.' },
  { text: '\n        [data[j], data[j + 1]] = [data[j + 1], data[j]];', class: 'default', tip: 'Swap usando desestruturação.' },
  { text: '\n        draw(j, j + 1);', class: 'default', tip: 'Redesenha após a troca.' },
  { text: '\n        await sleep(DELAY_MS);', class: 'async', tip: 'Mostra troca antes de seguir.' },
  { text: '\n      }', class: 'default', tip: 'Fecha if.' },
  { text: '\n    }', class: 'default', tip: 'Fecha laço interno.' },
  { text: '\n  }', class: 'default', tip: 'Fecha laço externo.' },
  { text: '\n  draw();', class: 'default', tip: 'Remove destaques ao término.' },
  { text: '\n}', class: 'default', tip: 'Fecha bubbleSort().' },

  { text: '\n\nfunction sleep(ms) {', class: 'function-name', tip: 'Retorna promessa que resolve após ms milissegundos.' },
  { text: '\n  return new Promise(r => setTimeout(r, ms));', class: 'default', tip: 'Implementação de pausa assíncrona.' },
  { text: '\n}', class: 'default', tip: 'Fecha sleep().' },

  { text: '\n\nfunction rand(min, max) {', class: 'function-name', tip: 'Gera inteiro aleatório entre min e max inclusive.' },
  { text: '\n  return Math.floor(Math.random() * (max - min + 1)) + min;', class: 'default', tip: 'Cálculo do valor aleatório.' },
  { text: '\n}', class: 'default', tip: 'Fecha rand().' }
];
