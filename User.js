export default class User {
  constructor(nome, email, nasc, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nasc = nasc;
    this.role = role || 'estudante';
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`
  }
}

// const novoUser = new User('Daniel', 'daniel@gmail.com', '02/09/2022',)

// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));