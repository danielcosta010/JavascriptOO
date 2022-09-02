export default class User {
  #nome
  #sobrenome
  #email
  #nasc
  #role
  #ativo
  constructor(nome, sobrenome, email, nasc, role, ativo = true) {
    this.#nome = nome;
    this.#nome = sobrenome;
    this.#email = email;
    this.#nasc = nasc;
    this.#role = role || 'estudante';
    this.#ativo = ativo;
  }

  get nome() {
    return `${this.#nome} ${this.#sobrenome}`
  }
  get sobrenome() {
    return this.#sobrenome
  }
  get email() {
    return this.#email
  }
  get nasc() {
    return this.#nasc
  }
  get role() {
    return this.#role
  }
  get ativo() {
    return this.#ativo
  }

  set nome(novoNome) {
    if(novoNome === '') {
      throw new Error('Formato inválido')
    }
    let [nome, ...sobrenome] = novoNome.split(" ")
    sobrenome = sobrenome.join(' ')
    this.#nome = nome;
    this.#sobrenome = sobrenome;
  }


  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nasc}, ${this.role}, ${this.ativo}`
  }
}

// const novoUser = new User('Daniel', 'daniel@gmail.com', '02/09/2022',)

// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));