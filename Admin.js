import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nasc, role = 'admin', ativo = true) {
    super(nome, email, nasc, role, ativo)
  }

  criaCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
  }
}

// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '02/09/2022');
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());

// console.log(novoAdmin.criaCurso("JavaScript", "20"));