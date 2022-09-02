import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User('Isabella', 'isabella@email.com', '02/05/2014');
// console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin('Polliana', 'polliana@email.com', '11/02/1982');
// console.log(novoAdmin.nome);
// novoAdmin.nome = '';
// console.log(novoAdmin.nome);

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'
