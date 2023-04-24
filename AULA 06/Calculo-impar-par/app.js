var calculoImpar = require('./modulo/imparPar.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número Inicial: \n', function (numeroInicio) {
    numeroInicial = numeroInicio;

    entradaDados.question('Digite o número Final: \n', function (numeroFim) {
        numeroFinal = numeroFim;

        console.log('1 - PAR');
        console.log('2 - IMPAR');
        console.log('3 - PAR E IMPAR');
        entradaDados.question('Digite a sua opção: ', function (opcaoEscolhida) {
            opcao = opcaoEscolhida;

            calculoImpar.getImparPar(numeroInicial, numeroFinal, opcao);

        })
    })
})