console.log("teste");
const alunoJoao = {
  nome: "João Carlos",
  matricula: 22001,
  ativo: true,
  responderChamada: () => {
    console.log("aluno", this.nome, "presente");
  },
};

const alunoMaria = {
  nome: "João Carlos",
  matricula: 22001,
  ativo: true,
  responderChamada: () => {
    console.log("aluno", this.nome, "presente");
  }, //Esse this é referente a esse objeto
  //"Nesse objeto tem a propriedade nome"
  //Quando acessa aqui dentro é "esse objeto . nome"
};

console.log(alunoJoao.nome);
console.log(alunoMaria.nome);
//Quando acessado aqui fora é o nome da var . nome
aluno.responderChamada();

//Não é possível acessar a propriedade de um objeto
//dentro de uma function porque esse obj tá
//fora da function. Por isso, a importância
//da palavra chave this
