//DESAFIO 1

const nome = 'Carlos';
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);
let message = "";

if(imc >= 30){
    message = `${nome} você não está acima do peso`;
}else{
    message = `${nome} você não está acima do peso`;
}

console.log(message);