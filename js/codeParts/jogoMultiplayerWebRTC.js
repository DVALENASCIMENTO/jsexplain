// js/codeParts/webrtc-jogo.js
export const codeParts = [
  { text: 'let', class: 'keyword', tip: 'Declara variáveis com escopo de bloco.' },
  { text: ' localConnection, remoteConnection;', class: 'default', tip: 'Referência para as conexões WebRTC dos dois lados (peer-to-peer).' },
  { text: '\nlet sendChannel, receiveChannel;', class: 'default', tip: 'Canais de comunicação WebRTC para enviar e receber dados.' },
  { text: '\nlet localPlayerPos = 0;', class: 'default', tip: 'Posição do jogador local no eixo X (horizontal).' },
  { text: '\nlet remotePlayerPos = 0;', class: 'default', tip: 'Posição do jogador remoto.' },

  { text: '\n\nfunction', class: 'keyword', tip: 'Início da declaração da função.' },
  { text: ' startGame()', class: 'function-name', tip: 'Função que configura e inicia a conexão WebRTC entre os dois jogadores.' },
  { text: ' {', class: 'default', tip: '' },

  { text: '\n  localConnection = new RTCPeerConnection();', class: 'default', tip: 'Cria uma nova conexão WebRTC para o jogador local.' },
  { text: '\n  sendChannel = localConnection.createDataChannel("game");', class: 'default', tip: 'Cria canal de dados para envio das posições.' },

  { text: '\n\n  sendChannel.onopen = () => console.log("Canal aberto");', class: 'default', tip: 'Callback que informa quando o canal está pronto para uso.' },
  { text: '\n  sendChannel.onmessage = (e) => {', class: 'default', tip: 'Evento que escuta mensagens recebidas do oponente.' },
  { text: '\n    remotePlayerPos = parseInt(e.data);', class: 'default', tip: 'Atualiza a posição do jogador remoto.' },
  { text: '\n    updateGame();', class: 'default', tip: 'Atualiza visualmente o jogo com novas posições.' },
  { text: '\n  };', class: 'default', tip: '' },

  { text: '\n\n  remoteConnection = new RTCPeerConnection();', class: 'default', tip: 'Cria a conexão WebRTC para o jogador remoto (simulado).' },
  { text: '\n  remoteConnection.ondatachannel = (event) => {', class: 'default', tip: 'Captura o canal de dados criado pelo jogador local.' },
  { text: '\n    receiveChannel = event.channel;', class: 'default', tip: 'Armazena o canal para escutar mensagens.' },
  { text: '\n    receiveChannel.onmessage = (e) => {', class: 'default', tip: 'Evento de recepção de dados.' },
  { text: '\n      localPlayerPos = parseInt(e.data);', class: 'default', tip: 'Atualiza a posição local conforme enviada pelo remoto.' },
  { text: '\n      updateGame();', class: 'default', tip: '' },
  { text: '\n    };', class: 'default', tip: '' },
  { text: '\n  };', class: 'default', tip: '' },

  { text: '\n\n  localConnection.createOffer().then((offer) => {', class: 'default', tip: 'Cria uma oferta SDP (descrição da conexão) para iniciar o handshake WebRTC.' },
  { text: '\n    localConnection.setLocalDescription(offer);', class: 'default', tip: 'Define a descrição local com a oferta.' },
  { text: '\n    remoteConnection.setRemoteDescription(offer);', class: 'default', tip: 'Entrega a oferta ao peer remoto.' },
  { text: '\n    return remoteConnection.createAnswer();', class: 'default', tip: 'Peer remoto cria uma resposta para a oferta.' },
  { text: '\n  }).then((answer) => {', class: 'default', tip: 'Encadeia a resposta.' },
  { text: '\n    remoteConnection.setLocalDescription(answer);', class: 'default', tip: 'Define a descrição local para o peer remoto.' },
  { text: '\n    localConnection.setRemoteDescription(answer);', class: 'default', tip: 'Entrega a resposta ao peer local.' },
  { text: '\n  });', class: 'default', tip: '' },
  { text: '\n}', class: 'default', tip: 'Fim da função de inicialização.' },

  { text: '\n\nfunction', class: 'keyword', tip: 'Declaração de função.' },
  { text: ' movePlayer(player, distance)', class: 'function-name', tip: 'Função que move o jogador e envia a nova posição se for o local.' },
  { text: ' {', class: 'default', tip: '' },
  { text: '\n  if (player === "local") {', class: 'default', tip: 'Se o jogador for o local, atualiza a posição e envia pelo canal.' },
  { text: '\n    localPlayerPos += distance;', class: 'default', tip: 'Incrementa a posição do jogador local.' },
  { text: '\n    sendChannel.send(localPlayerPos);', class: 'default', tip: 'Envia a nova posição para o jogador remoto.' },
  { text: '\n  } else {', class: 'default', tip: 'Se for o remoto (simulado), apenas atualiza.' },
  { text: '\n    remotePlayerPos += distance;', class: 'default', tip: '' },
  { text: '\n  }', class: 'default', tip: '' },
  { text: '\n  updateGame();', class: 'default', tip: 'Re-renderiza a tela com as posições atualizadas.' },
  { text: '\n}', class: 'default', tip: '' },

  { text: '\n\nfunction', class: 'keyword', tip: 'Declaração de função.' },
  { text: ' updateGame()', class: 'function-name', tip: 'Atualiza a interface gráfica com a posição dos jogadores.' },
  { text: ' {', class: 'default', tip: '' },
  { text: '\n  document.getElementById("local").style.left = localPlayerPos + "px";', class: 'default', tip: 'Move o jogador local na tela.' },
  { text: '\n  document.getElementById("remote").style.left = remotePlayerPos + "px";', class: 'default', tip: 'Move o jogador remoto na tela.' },
  { text: '\n}', class: 'default', tip: '' }
];
