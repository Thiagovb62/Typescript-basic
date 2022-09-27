function withoutReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'thelios',
  sobrenome: 'barbosa',

  showName(): void {
    console.log(this.nome + ' ', this.sobrenome);
  },
};
withoutReturn('Thelios', 'Barbosa');
pessoa.showName();
export { pessoa };
