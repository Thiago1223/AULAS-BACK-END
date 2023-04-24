var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Digite 1 - Somar\n' + 'Digite 2 - Subtrair\n' + 'Digite 3 - Multiplicar\n' + 'Digite 4 - Dividir\n')

entradaDados.question('Digite o número da operação: ', function (numero1) {
    let operacao = numero1;

    if(isNaN(operacao)){
        console.log('ERRO: Você não digitou um número');
    } else if(operacao == ''){
        console.log('ERRO: Você deixou de entrar com algum valor.');
    } else if(operacao < 1 || operacao > 4){
        console.log('ERRO: Você digitou um número inválido');
    }

    if (operacao == 1) {
        entradaDados.question('Digite o primeiro número que você quer somar: ', function (soma1) {
            let somar = soma1.replace(',','.');

            entradaDados.question('Digite o segundo número que você quer somar: ', function (soma2) {
                let somar2 = soma2.replace(',','.');

                if(isNaN(somar) || isNaN(somar2)){
                    console.log('ERRO: Você não digitou um número');
                } else if(somar == '' || somar2 == ''){
                    console.log('ERRO: Você deixou de entrar com algum valor.');
                } else {
                    console.log(parseFloat(somar) + parseFloat(somar2));
                }

            });

        });
    } else if (operacao == 2) {
        entradaDados.question('Digite o primeiro número que você quer subtrair: ', function (subtrair1) {
            let subtrair2 = subtrair1.replace(',','.');

            entradaDados.question('Digite o segundo número que você quer subtrair: ', function (subtrair3) {
                let subtrair4 = subtrair3.replace(',','.');

                if(isNaN(subtrair2) || isNaN(subtrair4)){
                    console.log('ERRO: Você não digitou um número');
                } else if(subtrair2 == '' || subtrair4 == ''){
                    console.log('ERRO: Você deixou de entrar com algum valor.');
                } else {         
                    console.log(parseFloat(subtrair2) - parseFloat(subtrair4));
                }

            });

        });
    } else if (operacao == 3) {
        entradaDados.question('Digite o primeiro número que você quer multiplicar: ', function (multiplicar1) {
            let multiplicar2 = multiplicar1.replace(',','.');

            entradaDados.question('Digite o segundo número que você quer multiplicar: ', function (multiplicar3) {
                let multiplicar4 = multiplicar3.replace(',','.');

                if(isNaN(multiplicar2) || isNaN(multiplicar4)){
                    console.log('ERRO: Você não digitou um número');
                } else if(multiplicar2 == '' || multiplicar4 == ''){
                    console.log('ERRO: Você deixou de entrar com algum valor.');
                } else {
                    console.log(parseFloat(multiplicar2) * parseFloat(multiplicar4));
                }

            });

        });
    } else if (operacao == 4) {
        entradaDados.question('Digite o primeiro número que você quer dividir: ', function (dividir1) {
            let dividir2 = dividir1.replace(',','.');

            entradaDados.question('Digite o segundo número que você quer dividir: ', function (dividir3) {
                let dividir4 = dividir3.replace(',','.');

                if(isNaN(dividir2) || isNaN(dividir4)){
                    console.log('ERRO: Você não digitou um número');
                } else if(dividir2 == '' || dividir4 == ''){
                    console.log('ERRO: Você deixou de entrar com algum valor.');
                } else if(dividir2 == 0 || dividir4 == 0) {
                    console.log('ERRO: não é possivel dividir por 0');
                } else {
                    console.log(parseFloat(dividir2) / parseFloat(dividir4));
                }

            });

        });
    }

});