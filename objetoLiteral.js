const user = {
  nome: 'Daniel',
  email: 'daniel@email.com',
  nasc: '02/09/2022',
  role: 'admin',
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email);
  }
}

user.exibirInfos();

// O metodo bind (ligar) "liga" a função que está em escopo global com o objeto user que foi passado como parametro, assim podemos utilizar o this.

const exibirInfo = function() {
  console.log(this.nome, this.email, this.nasc, this.role, user);
}
const exibir = exibirInfo.bind(user);
exibir();