var matematica = require('./modulo/tabuada.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número da tabuada inicial: ', function (tabuadaInicio){
    tabuadaInicial = tabuadaInicio;

    entradaDados.question('Digite o número da tabuada final: ', function (tabuadaFim) {
        tabuadaFinal = tabuadaFim;

        entradaDados.question('Digite o número do contador inicial: ', function (contadorInicio) {
            contadorInicial = contadorInicio;
            
            entradaDados.question('Digite o número do contador final: ', function (contadorFim) {
                contadorFinal = contadorFim;
        
                let resultado = matematica.getTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal);
        
            })
    
        })

    })

})