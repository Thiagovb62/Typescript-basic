let x = 10; // eslint-disable-line
x = 0b1010;
const a = 100;

// const user = {
//   nome: 'luiz' as const, // nao permite mudar depois de declarado,mas o motivo de usar eh pq dentro de arrays e objetos tudo eh mutável
// };

function choiceColor(color: 'Vermelho' | 'Verde' | 'Azul'): string {
  return color;
}

console.log(choiceColor);

export default 1;
