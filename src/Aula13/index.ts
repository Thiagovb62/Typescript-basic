type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salaio: number;
  corPreferida?: string;
};
type corRGB = 'Vermelho' | 'Verde' | 'Azul';
type corCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type corPreferida = corRGB | corCMYK;

const pessoa: Pessoa = {
  nome: 'joao',
  idade: 27,
  salaio: 200000,
};

export function setColor(pessoa: Pessoa, cor: corPreferida) {
  return { ...pessoa, corPreferida: cor };
}

console.log(setColor(pessoa, 'Magenta'));
