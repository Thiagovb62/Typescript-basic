type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  idade: 30,
  sobrenome: 'inacio',
  nome: 'luiz',
};

console.log(pessoa);
