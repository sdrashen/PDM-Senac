class Jogador {
  nome;
  hp = 100;
  xp = 0;
  envenenado = false;

  //Esse construtor recebe um param (nome) porque ali na classe ñ foi definido um nome
  //Então no momento de construir o jogador, que criar o objeto deverá nomear o jogador
  constructor(nome) {
    //O método constructor é executado quando o objeto é criado
    this.nome = nome;
    //O attr nome da classe jogador recebe o param nome que é passado pelo construtor
  }
}
//A palavra chave new é usada para criar um obj a aprtir da classe jogador
//Esse nome passa na crição é recebido no costructor e attr ao jogador
let jogador1 = new Jogador("Gandalf");
let jogador2 = new Jogador("Aragorn");
let jogador3 = new Jogador("Legolas");

jogador1.xp = jogador1.xp + 10;

console.log(jogador1);
console.log(jogador2);
console.log(jogador3);
