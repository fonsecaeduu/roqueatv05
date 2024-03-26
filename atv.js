//--------------------------------- Questão 1

const prompt = require('prompt-sync')();
const nome = prompt("Digite seu nome: ")
console.log("Olá, " + nome)

function verifpar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//--------------------------------- Questão 2

var numeroUsuario = parseInt(prompt("Insira um número: "));

if (verifpar(numeroUsuario)) {
    console.log("O número " + numeroUsuario + " é par.");
} else {
    console.log("O número " + numeroUsuario + " é ímpar.");
}

//--------------------------------- Questão 3

function calcularMedia(array) {
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma / array.length;
}

var entrada = prompt("Insira uma lista de números (separados por vírgula): ");

var numeros = entrada.split(",").map(function(item) {
    return parseInt(item.trim());
});

var media = calcularMedia(numeros);
console.log("A média dos números inseridos é: " + media);

//--------------------------------- Questão 4

function maiusculas(string) {
    return string.toUpperCase();
}

var entradaUsuario = prompt("Insira o texto: ");

console.log(maiusculas(entradaUsuario));

//--------------------------------- Questão 5

function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

var numeroUsuario = parseInt(prompt("Insira um número: "));

console.log(verificarPrimo(numeroUsuario));

//--------------------------------- Questão 6

function inverterArray(array) {
    return array.reverse();
}

var entrada = prompt("Insira os elementos do array (separados por vírgula): ");

var elementos = entrada.split(",");

console.log("Array original:", elementos);

var arrayInvertido = inverterArray(elementos);

console.log("Array invertido:", arrayInvertido);

//--------------------------------- Questão 7

function porcent() {
    var valor = parseFloat(prompt("Digite o valor: "));
    var porcentagem = parseFloat(prompt("Digite a porcentagem: "));
    
    var valorAcrescido = valor * (1 + porcentagem / 100);
    
    return valorAcrescido;
}

var result = porcent();
console.log("O valor acrescido da porcentagem indicada é: " + result);

//--------------------------------- Questão 8

function palindromo() {
    var palavra = prompt("Digite uma palavra para verificar se é um palíndromo: ").toLowerCase();
    palavra = palavra.replace(/[^a-zA-Z0-9]/g, "");
    var palavraInvertida = palavra.split('').reverse().join('');
    if (palavra === palavraInvertida) {
        return "é um palíndromo";
    } else {
        return "não é um palíndromo";
    }
}

var resultado = palindromo();
console.log(resultado);

//--------------------------------- Questão 9

function decimalBin(numero) {
    return numero.toString(2);
}

var numeroDecimal = parseInt(prompt("Digite um número decimal para converter em binário: "));
var resultadoBinario = decimalBin(numeroDecimal);
console.log("A representação binária de " + numeroDecimal + " é: " + resultadoBinario);

//--------------------------------- Questão 10

function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * fatorial(numero - 1);
    }
}

var numero = parseInt(prompt("Digite um número para calcular o fatorial: "));
var resultado = fatorial(numero);
console.log("O fatorial de " + numero + " é: " + resultado);