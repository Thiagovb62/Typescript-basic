enum Cores {
  vermelho = 10,
  azul = 100,
  amarelo = 200,
}

enum Cores {
  Roxo = 'ROXO',
  Verde = 201,
  Rosa,
}

function getCores(cor: Cores): void {
  console.log(Cores[cor]);
}

getCores(123456);
