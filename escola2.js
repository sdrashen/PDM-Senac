class Aluno {
  nome = ""; //essa é uma propriedade do obj alunoJoao
  matricula = 0;
  ativo = true;

  constructor(nome) {
    this.nome = nome;
    //Aqui nome é um parm do constructor
    //Vars com mesmo nome mas em contextos diferentes
    console.log("aluno criado");
  }

  responderChamada() {
    console.log("aluno", this.nome, "presente");
    //Nesse obj tem um param, que é nome
    //esse parm vai receber param da function
  }
}

//Usa a word new porque é uma classe

const alunoJoao = new Aluno("João");

//O valor no constructor é capiturado dentro da
//var nome, no constructor.A info que está na vr nome
//é add ao attr nome da class acima ali

//Quando inserimos o nome de uma var o interpretador do JS
//procura o contexto mais próximo. Nesse caso, o contexto mais próx
//é do parm do método.

const alunoMaria = new Aluno("Maria");

alunoJoao.responderChamada();
alunoMaria.responderChamada();
