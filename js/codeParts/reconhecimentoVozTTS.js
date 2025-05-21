export const codeParts = [
  { text: 'const startBtn = document.getElementById("start");', class: 'default', tip: 'Seleciona o botão que inicia o reconhecimento de voz.' },
  { text: '\nconst stopBtn = document.getElementById("stop");', class: 'default', tip: 'Seleciona o botão que para o reconhecimento de voz.' },
  { text: '\nconst output = document.getElementById("output");', class: 'default', tip: 'Seleciona o elemento onde será exibido o texto reconhecido.' },

  { text: '\n\nconst SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;', class: 'default', tip: 'Obtém a interface de reconhecimento de voz compatível com diferentes navegadores.' },
  { text: '\nconst recognition = new SpeechRecognition();', class: 'default', tip: 'Cria uma nova instância do reconhecimento de voz.' },

  { text: '\n\nrecognition.lang = "pt-BR";', class: 'default', tip: 'Define o idioma para português do Brasil.' },
  { text: '\nrecognition.interimResults = false;', class: 'default', tip: 'Desativa resultados parciais, aguardando a frase completa.' },
  { text: '\nrecognition.continuous = false;', class: 'default', tip: 'Para o reconhecimento após uma frase, não fica contínuo.' },

  { text: '\n\nstartBtn.addEventListener("click", () => {', class: 'default', tip: 'Ao clicar no botão iniciar, começa a escutar.' },
  { text: '\n  recognition.start();', class: 'default', tip: 'Inicia o reconhecimento de voz.' },
  { text: '\n  output.textContent = "Escutando...";', class: 'default', tip: 'Atualiza o texto para informar o usuário.' },
  { text: '\n});', class: 'default', tip: 'Fim do evento de clique do botão iniciar.' },

  { text: '\nstopBtn.addEventListener("click", () => {', class: 'default', tip: 'Ao clicar no botão parar, para a escuta.' },
  { text: '\n  recognition.stop();', class: 'default', tip: 'Para o reconhecimento de voz.' },
  { text: '\n  output.textContent = "Parado.";', class: 'default', tip: 'Atualiza o texto para informar o usuário.' },
  { text: '\n});', class: 'default', tip: 'Fim do evento de clique do botão parar.' },

  { text: '\nrecognition.addEventListener("result", (event) => {', class: 'default', tip: 'Quando o reconhecimento captura um resultado, este evento é disparado.' },
  { text: '\n  const transcript = event.results[0][0].transcript;', class: 'default', tip: 'Extrai o texto reconhecido da fala.' },
  { text: '\n  output.textContent = transcript;', class: 'default', tip: 'Exibe o texto reconhecido na tela.' },
  { text: '\n  speakText(`Você disse: ${transcript}`);', class: 'default', tip: 'Chama a função que irá falar o texto reconhecido.' },
  { text: '\n});', class: 'default', tip: 'Fim do evento de resultado.' },

  { text: '\n\nfunction speakText(text) {', class: 'default', tip: 'Função para sintetizar o texto em voz.' },
  { text: '\n  const utterance = new SpeechSynthesisUtterance(text);', class: 'default', tip: 'Cria um objeto de síntese de fala com o texto.' },
  { text: '\n  utterance.lang = "pt-BR";', class: 'default', tip: 'Define o idioma da fala para português do Brasil.' },
  { text: '\n  speechSynthesis.speak(utterance);', class: 'default', tip: 'Executa a fala do texto.' },
  { text: '\n}', class: 'default', tip: 'Fim da função speakText().' }
];
