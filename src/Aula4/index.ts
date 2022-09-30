/*const objectA: Record<string, unknown> = {
  keyA: 'valor A',
  keyB: 'valor B',
  keyf: 2,
};

objectA.keyA = 'valor novo';
objectA.keyB = 'valor novo';
*/
const objectA: {
  readonly keyA: string;
  keyB: string;
  [key: string]: unknown;
} = {
  keyA: 'keyA',
  keyB: 'keyB',
};

objectA.keyA = 'valor 1'; // nao pode mais ser alterada
objectA.keyB = 'valor novo';

console.log(objectA);
