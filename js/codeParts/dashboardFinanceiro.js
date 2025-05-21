export const codeParts = [
  { text: 'const chart = document.getElementById("chart").getContext("2d");', class: 'default', tip: 'Obtém o contexto do canvas para renderizar o gráfico com Chart.js.' },
  { text: '\nlet theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";', class: 'default', tip: 'Detecta se o usuário está usando tema escuro ou claro automaticamente.' },

  { text: '\n\nconst prices = [];', class: 'default', tip: 'Array que armazenará os valores dos preços recebidos.' },
  { text: '\nconst labels = [];', class: 'default', tip: 'Array que armazenará os horários das atualizações.' },

  { text: '\n\nconst financialChart = new Chart(chart, {', class: 'default', tip: 'Inicializa um novo gráfico do tipo linha (line chart) com Chart.js.' },
  { text: '\n  type: "line",', class: 'default', tip: 'Define o tipo de gráfico como linha.' },
  { text: '\n  data: {', class: 'default', tip: 'Objeto de dados usado para alimentar o gráfico.' },
  { text: '\n    labels,', class: 'default', tip: 'Eixo X — os horários das medições.' },
  { text: '\n    datasets: [{', class: 'default', tip: 'Lista de conjuntos de dados — neste caso, um para o preço do BTC.' },
  { text: '\n      label: "Preço BTC/USD",', class: 'default', tip: 'Legenda do gráfico.' },
  { text: '\n      data: prices,', class: 'default', tip: 'Eixo Y — os preços coletados da API.' },
  { text: '\n      borderColor: theme === "dark" ? "#00f7ff" : "#007bff",', class: 'default', tip: 'Cor da linha muda dependendo do tema do sistema.' },
  { text: '\n      borderWidth: 2,', class: 'default', tip: 'Espessura da linha do gráfico.' },
  { text: '\n      fill: false', class: 'default', tip: 'Desativa o preenchimento abaixo da linha do gráfico.' },
  { text: '\n    }]', class: 'default', tip: '' },
  { text: '\n  },', class: 'default', tip: '' },
  { text: '\n  options: {', class: 'default', tip: 'Opções de visualização do gráfico.' },
  { text: '\n    responsive: true,', class: 'default', tip: 'Torna o gráfico adaptável ao tamanho da tela.' },
  { text: '\n    animation: false,', class: 'default', tip: 'Desativa animações para atualizar em tempo real sem atrasos.' },
  { text: '\n    scales: {', class: 'default', tip: 'Configurações dos eixos X e Y.' },
  { text: '\n      x: { display: true },', class: 'default', tip: 'Exibe o eixo X (tempo).' },
  { text: '\n      y: { display: true }', class: 'default', tip: 'Exibe o eixo Y (valores).' },
  { text: '\n    }', class: 'default', tip: '' },
  { text: '\n  }', class: 'default', tip: '' },
  { text: '\n});', class: 'default', tip: 'Finaliza a criação do gráfico.' },

  { text: '\n\nasync function fetchPrices() {', class: 'default', tip: 'Função assíncrona que busca os dados da API.' },
  { text: '\n  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json");', class: 'default', tip: 'Faz a requisição para a API de preços do Bitcoin.' },
  { text: '\n  const data = await res.json();', class: 'default', tip: 'Converte a resposta para formato JSON.' },
  { text: '\n  const price = data.bpi.USD.rate_float;', class: 'default', tip: 'Extrai o valor em dólar (float).' },
  { text: '\n  const now = new Date().toLocaleTimeString();', class: 'default', tip: 'Pega o horário atual para exibir no eixo X.' },

  { text: '\n\n  labels.push(now);', class: 'default', tip: 'Adiciona o horário no eixo X.' },
  { text: '\n  prices.push(price);', class: 'default', tip: 'Adiciona o preço ao eixo Y.' },

  { text: '\n\n  if (labels.length > 10) {', class: 'default', tip: 'Limita o gráfico a 10 pontos por vez.' },
  { text: '\n    labels.shift();', class: 'default', tip: 'Remove o item mais antigo do eixo X.' },
  { text: '\n    prices.shift();', class: 'default', tip: 'Remove o item mais antigo do eixo Y.' },
  { text: '\n  }', class: 'default', tip: '' },

  { text: '\n\n  financialChart.update();', class: 'default', tip: 'Atualiza o gráfico com os novos dados.' },
  { text: '\n}', class: 'default', tip: 'Fim da função fetchPrices().' },

  { text: '\n\nsetInterval(fetchPrices, 5000);', class: 'default', tip: 'Chama fetchPrices a cada 5 segundos para manter os dados em tempo real.' }
];
