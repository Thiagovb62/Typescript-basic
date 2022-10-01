//const dadosClient: readonly[number, string] = [1, 'luiz']; deixa tupla imutável
const dadosClient: [number, string] = [1, 'luiz'];
const dadosClient2: [number, string, string] = [1, 'luiz', 'inacio'];
const dadosClient3: [number, string, string?, ...number[]] = [
  1,
  'luiz',
  ``,
  3,
  4,
  5,
  7,
]; //...number[] para reoresentar o resto que vem dps ,serao somente numeros

dadosClient[0] = 100;
dadosClient2[1] = 'Carlos';
dadosClient2[0] = 1;
dadosClient2.pop();

// readonly Arrays
const array1: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6, 7];
const array2: readonly string[] = [`luiz`, `carlos`, `joao`];

console.log(dadosClient2);
console.log(dadosClient3);
