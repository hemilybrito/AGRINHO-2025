let telaAtual = 0; // 0 para a tela inicial, 1 para a segunda, etc.
let totalTelas = 3; // Número total de telas na nossa apresentação

function setup() {
  createCanvas(1000, 800); // Tamanho ideal para uma apresentação
  textAlign(CENTER, CENTER); // Centraliza o texto
  textSize(32); // Tamanho padrão do texto
}

function draw() {
  background(240); // Fundo claro para todas as telas

  // Usa uma estrutura 'switch' para desenhar a tela correta
  switch (telaAtual) {
    case 0:
      telaBoasVindas();
      break;
    case 1:
      telaIntroducao();
      break;
    case 2:
      telaExemplo();
      break;
    case 3:
      telaFinal();
      break;
    default:
      // Caso algum erro aconteça e telaAtual tenha um valor inesperado
      text("Erro: Tela não encontrada", width / 2, height / 2);
      break;
  }
}

// --- Funções de Tela ---

function telaBoasVindas() {
  fill(50); // Cor do texto
  text("Bem-vindo à Minha Apresentação sobre campo e tecnologia!", width / 2, height / 2 - 50);
  textSize(20);
  text("Clique para continuar...", width / 2, height / 2 + 50);
  textSize(32); // Volta ao tamanho padrão para as próximas telas
}

function telaIntroducao() {
  fill(0, 100, 200); // Azul
  text("O que é o campo e a tecnologia", width / 2, 100);
  textSize(24);
  fill(50);
  text("O campo na agricultura se refere a parcelas de terra não urbanizadas, A tecnologia tem revolucionado o campo, trazendo mais eficiência, produtividade e sustentabilidade para o agronegócio. Conhecida como Agricultura 4.0, essa transformação digital otimiza as operações e a tomada de decisões. Veja como a tecnologia contribui:destinadas ao uso agrícola, como o cultivo de lavouras ou a criação de animais (pastoreio). É a área rural onde se desenvolvem as atividades econômicas do setor primário, como agricultura, pecuária e silvicultura. Geralmente, o campo tem baixa densidade.", width / 100, 300);
  text('A tecnologia tem revolucionado o campo, trazendo mais eficiência, produtividade e sustentabilidade para o agronegócio. Conhecida como Agricultura 4.0, essa transformação digital otimiza as operações e a tomada de decisões. Veja como a tecnologia contribui:', width / 2, 250);
  textSize(32);
}

function telaExemplo() {
  fill(0, 150, 0); // Verde
  text("Exemplo Interativo", width / 2, 100);
  textSize(24);
  fill(50);
  text("Um círculo segue o mouse", width / 2, 200);

  // Exemplo de interatividade: um círculo que segue o mouse
  fill(255, 100, 0); // Laranja
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
  textSize(32);
  
}



function telaFinal() {
  fill(150, 0, 150); // Roxo
  text("Obrigado por assistir!", width / 2, height / 2 - 50);
  textSize(20);
  text("Pressione R para recomeçar", width / 2, height / 2 + 50);
  textSize(32);
}

// --- Funções de Interação ---

function mouseClicked() {
  // Avança para a próxima tela ao clicar
  if (telaAtual < totalTelas) {
    telaAtual++;
  } else {
    // Se estiver na última tela, não faz nada ao clicar (ou pode resetar)
    // Para resetar com clique, descomente a linha abaixo:
    // telaAtual = 0;
  }
}

function keyPressed() {
  // Pressiona 'R' para resetar a apresentação
  if (key === 'r' || key === 'R') {
    telaAtual = 0;
  }
  // Pressiona a seta para a direita para avançar
  if (keyCode === RIGHT_ARROW) {
    if (telaAtual < totalTelas) {
      telaAtual++;
    }
  }
  // Pressiona a seta para a esquerda para voltar
  if (keyCode === LEFT_ARROW) {
    if (telaAtual > 0) {
      telaAtual--;
    }
  }
}