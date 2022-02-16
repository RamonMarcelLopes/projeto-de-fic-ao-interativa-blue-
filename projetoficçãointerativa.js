const prompt = require("prompt-sync")();

let saude = 100;
let fome = 100;

let horas = 7;
let minutos = 0;
let dias = 0;

let dif = [578, 267, 188];

function addmins(minuto, hora, dia) {
  minutos = minutos + minuto;
  horas = horas + hora;
  dias = dias + dia;
  if (minutos >= 60) {
    minutos = minutos - 60;
    horas = horas + 1;
  } else if (horas >= 24) {
    dias = dias + 1;
    horas = horas - 24;
  }
  return minutos, horas, dias;
}

let numeroaleatorio = Math.floor(Math.random() * 10);

function chover() {
  console.log("esta chovendo");
}

function addfome() {
  fome = fome - 12;
}

console.clear();
for (let rc = 1; rc < 2; ) {
  let nome = prompt("digite seu nome ");

  console.log(`Em Busca Do Celta II A Volta De  ${nome}`);

  console.log(`dificuldade 0 = facil `);
  console.log(`dificuldade 1 = medio`);
  console.log(`dificuldade 2 = dificil`);
  let dif1 = prompt("qual a dificuldade que você quer jogar");
  if (dif1 == 0) {
    var d1 = dif[0];
  } else if (dif1 == 1) {
    var d1 = dif[1];
  } else if (dif1 == 2) {
    var d1 = dif[2];
  }

  let ganhos = 0;
  while (ganhos < 1000) {
    console.log("  você acabou de acordar  ");
    horas = 7;
    console.log(
      `${nome} agora são ${horas}  e voce tem que ir trabalhar e tem 3 opçõens `
    );
    console.log("escolha (1):  ir trabalhar ");
    console.log("escolha (2):  comer  ");
    console.log("escolha (3):  não ir trabalhar ");
    console.log(`esses são seus status: fome:${fome}% saude:${saude}% `);

    let respostapergunta1 = +prompt("faça uma das 3 escolhas ");

    if (respostapergunta1 == 2) {
      fome = 100;
      console.log(
        `você comeu e demorou 15mins agora seus status são fome:${fome}% saude:${saude}% `
      );
      addmins(15, 0, 0);
      console.log(" e então você foi para o  trabalho ");
      console.log(" você foi trabalha e demorou 30 mins  para chegar até la ");
      addmins(30, 0, 0);
      console.log(
        `você chegou ao trabalho e trabalhou muito bem por isso ganhou 100R$ `
      );
      ganhos = ganhos + 100;
      fome = fome - 70;
      console.log(
        "voce chegou em casa cansado apos trabalhar  o dia todo por isso você esta com muita fome"
      );
      addmins(0, 8, 0);
      console.log(
        `nesse momento seus status  estão em fome:${fome}% e saude: ${saude}%`
      );
      let comer = prompt("voce deseja  comer sim ou nao ");
      if (comer == "sim") {
        fome = 100;
      } else {
        fome = fome - 30;
      }

      if (fome <= 25) {
        saude = saude - 15;
      }
    } else if (respostapergunta1 == 1) {
      console.log(" você foi trabalha e demorou 30 mins  para chegar até la ");
      addmins(30, 0, 0);
      if (numeroaleatorio >= 10) {
        chover();
      }
      console.log(
        `você chegou ao trabalho e trabalhou muito bem por isso ganhou ${d1}R$ `
      );
      ganhos = ganhos + d1;
      fome = fome - 70;
      console.log(
        "voce chegou em casa cansado apos trabalhar  o dia todo por isso você esta com muita fome"
      );
      addmins(0, 8, 0);
      console.log(
        `nesse momento seus status  estão em fome:${fome}% e saude: ${saude}%`
      );
      let comer = prompt("voce deseja  comer sim ou nao");
      if (comer == "sim") {
        fome = 100;
      } else if (comer == "nao") {
        fome = fome - 30;
      }

      if (fome <= 25) {
        saude = saude - 15;
      }
    } else if (respostapergunta1 == 3) {
      console.log("voce ficou em casa e  dormiu agora são 6 horas da tarde ");
      addmins(0, 11, 0);
      fome = fome - 70;
      console.log(` seus status estão em fome: ${fome}% saude: ${saude}%`);
      let comer = prompt("você deseja comer algo?" );
      if ((comer = "sim")) {
        fome = 100;
      } else {
        fome = fome - 30;
      }
    }

    console.log("e então você foi dormir");

    dias = dias + 1;
  }
  ganhos = ganhos - 1000;
  let objstats = {};
  objstats.saude = saude;
  objstats.fome = fome;
  objstats.dinheiro = ganhos;
  console.log(
    " voçe chegou  a 1000R$ de dinheiro e realizou seu sonho de comprar um celta de 4 portas rebaixado  e com som -1000reais de sua conta "
  );
  console.log("porem a policia te pegou e você foi parar na cadeia ");
  console.log(
    `você demorou ${dias} dias ${horas}horas e ${minutos}minutos para zerar o jogo`
  );
  console.log("esses são seu status apos terminar o jogo ", objstats);
  saude = 100;
  fome = 100;
  ganhos = 0;
  horas = 7;
  minutos = 0;
  dias = 0;

  rc = +prompt("você deseja jogar novamente 1 para sim ou 2 para nao ");
}

console.log(`
 ‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗
|                                                           |                                                           
|                                                           |
| ˋ( ° ▽、° )   muito obrigado por jogar!!!!  ˋ( ° ▽、° )   |
|                                                           |
|‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗‗|
`);