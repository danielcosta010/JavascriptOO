import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nasc, role = 'docente', ativo = true) {
    super(nome, email, nasc, role, ativo)
  }

  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} aprovado(a) no curso de ${curso}`
  }
}

const novoDocente = new Docente('Isabella', 'isabella@email.com', '02/05/2014')
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Isabella', 'Juiza'));