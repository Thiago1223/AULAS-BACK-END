/*****************************************************************************
 * Objetivo: Arquivo de funções para calcular uma tabuada
 * Data: 06/02/2023
 * Autor: Marcel
 * Versão 1.0
 ****************************************************************************/

// função que gera uma tabuada até um contador especifico
const getTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',', '.'));
    let tabuadaContador = Number(String(maxMultiplicador).replace(',', '.'));
    let status = true;
    let resultado;
    let contador = 0; // Start da repetição

    if (tabuada == 0 || tabuadaContador == 0) {
        status = false;
    } else if (isNaN(tabuada) || isNaN(tabuadaContador)) {
        status = false;
    } else {
        // while (contador <= tabuadaContador) {
        //     // 2 x 0 = 0
        //     resultado = tabuada * contador;
        //     console.log(tabuada + 'x' + contador + '=' + resultado);

        //     // contador = contador + 1;
        //     // contador++;
        //     contador +=1;
        // }
        for (let contador = 0; contador <= tabuadaContador; contador++) {
            resultado = tabuada * contador;
            console.log(`${tabuada} x ${contador} = ${resultado}`);
        }
    }
    return status;
};

getTabuada(2, 10);

module.exports = {
    getTabuada
}