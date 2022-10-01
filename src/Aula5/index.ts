export function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, values) => ac * values, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, values) => ac + values);
}

export function toUpper(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const multiply = multiplicaArgs(1, 2, 3);
const concat = concatenaStrings('1 ', ' 2 ', 'feijao com arroz');
const upper = toUpper('a', 'b', 'c');

console.log(multiply);
console.log(concat);
console.log(upper);
