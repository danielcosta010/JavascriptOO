const user = {
  nome: 'Daniel',
  email: 'daniel@email.com',
  nasc: '02/09/2022',
  role: 'estudante',
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email);
  }
}

const admin = {
  nome: 'Isabella',
  email: 'isabella@email.com',
  role: 'admin',
  criarCurso() {
    console.log('Curso criado');
  }
}

console.log(user);
Object.setPrototypeOf(admin, user);
admin.exibirInfos();
admin.criarCurso();




let user1 = {
  perfil: 'estudante',
  escola: 'Drummond'
 }
 
 let estudante = {
  nome: 'juliana'
 }
 
 Object.setPrototypeOf(estudante, user1)

 console.log(estudante.nome) // 'juliana'
 console.log(estudante.perfil) //'estudante'
 console.log(estudante.escola) //'estudante'
