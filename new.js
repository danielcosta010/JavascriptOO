  // FUNÇÃO CONSTRUTORAS

// function User(nome, email) {
//   this.nome = nome;
//   this.email = email;

//   this.exibirInfos = function() {
//     return `Meu nome é ${this.nome}, ${this.email}`;
//   }
// }

// const novoUser = new User('Daniel', 'daniel@email');
// console.log(novoUser.exibirInfos());

// function Admin(role) {
//   User.call(this, 'Daniel1', 'daniel@email.com');
//   this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin('admin');
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

const user = {
  init: function(nome, email) {
    this.nome = nome;
    this.email = email;
  },
  exibirInfos: function(nome) {
    return this.nome;
  }
}
const novoUser = Object.create(user);
novoUser.init('Daniel', 'daniel@email.com');
console.log(novoUser.exibirInfos());
console.log(user.isPrototypeOf(novoUser));

// FACTORY FUNCTIONS (FUNÇÃO CONSTRUTORA)
function criaUser(nome, email) {
  return {
    nome,
    email,
    exibeInfo() {
      return `${nome}, ${email}`
    }
  }
 }

 const novoCliente = criaUser('Polliana', 'polliana@email.com');


 console.log(novoCliente);
 console.log(novoCliente.exibeInfo());
