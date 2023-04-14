//código do jogo

function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarros();
  movimentaCarros();
  voltaCarrosPosicaoInicial();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}