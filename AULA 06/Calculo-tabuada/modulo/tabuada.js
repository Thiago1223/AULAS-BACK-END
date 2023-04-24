const getTabuada = function (tabuadaInicio, tabuadaFim, contadorInicio, contadorFim) {

    let tabuadaInicial = Number(String(tabuadaInicio).replace(',', '.'));
    let tabuadaFinal = Number(String(tabuadaFim).replace(',', '.'));
    let contadorInicial = Number(String(contadorInicio).replace(',', '.'));
    let contadorFinal = Number(String(contadorFim).replace(',', '.'));
    let resultado;

    if (tabuadaInicial < 2 || tabuadaInicial > 100 || tabuadaFinal < 2 || tabuadaFinal > 100) {
        console.log('ERRO: O valor da tabuada deverá ser entre 2 e 100.');
    } else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(contadorInicial) || isNaN(contadorFinal)) {
        console.log('ERRO: Você não digitou um número.');
    } else if (tabuadaInicial == '' || tabuadaFinal == '' || contadorInicial == '' || contadorFinal == '') {
        console.log('ERRO: Você deixou de entrar com algum valor.');
    } else if (contadorInicial >= contadorFinal || tabuadaInicial >= tabuadaFinal) {
        console.log('ERRO: Você não digitou um número válido.');    
    } else if (contadorInicial < 1 || contadorInicial > 50 || contadorFinal < 1 || contadorFinal > 50) {
        console.log('ERRO: O valor do contador deverá ser entre 1 e 50.'); 
    } else {
        for (let contador = tabuadaInicial; contador <= tabuadaFinal; contador++) {

            for (let i = contadorInicial; i <= contadorFinal; i++){
                
                resultado = contador * i;

                console.log(`${contador} x ${i} = ${resultado}`);
            }
        }
    }
    return resultado;
}

module.exports = {
    getTabuada
}