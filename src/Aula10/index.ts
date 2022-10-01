let x: unknown; // faz a checagem de tipo antes de fazer qualquer operacao

x = 100;
x = 'luiz';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);
