var matematica = require('./modulo/media.js');
var exame = require('./modulo/exame.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do aluno: \n', function (nomeDoAluno) {
    let nomeAluno = nomeDoAluno;

    entradaDados.question('Digite o nome do professor: \n', function (nomeDoProfessor) {
        let nomeProfessor = nomeDoProfessor;

        entradaDados.question('Digite o sexo do professor: [1 - MASCULINO 2 - FEMININO]\n', function (sexoDoProfessor) {
            let sexoProfessor = Number(sexoDoProfessor);

            entradaDados.question('Digite o sexo do aluno: [1 - MASCULINO 2 - FEMININO]\n', function (sexoDoAluno) {
                let sexoAluno = Number(sexoDoAluno);

                entradaDados.question('Digite o nome do curso: \n', function (nomeDoCurso) {
                    let nomeCurso = nomeDoCurso;

                    entradaDados.question('Digite o nome da disciplina: \n', function (nomeDaDisciplina) {
                        let nomeDisciplina = nomeDaDisciplina;

                        entradaDados.question('Digite a nota 1: \n', function (nota1) {
                            let valor1 = nota1.replace(',','.');

                            entradaDados.question('Digite a nota 2: \n', function (nota2) {
                                let valor2 = nota2.replace(',','.');

                                entradaDados.question('Digite a nota 3: \n', function (nota3) {
                                    let valor3 = nota3.replace(',','.');

                                    entradaDados.question('Digite a nota 4: \n', function (nota4) {
                                        let valor4 = nota4.replace(',','.');

                                        if (nomeAluno == '' || nomeProfessor == '' || sexoProfessor == '' || sexoAluno == '' || nomeCurso == '' || nomeDisciplina == '' || valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '') {
                                            console.log('ERRO: Você deixou de entrar com algum valor.');
                                        } else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
                                            console.log('ERRO: Você não digitou um número.');
                                        } else if (valor1 < 0 || valor1 > 100 || valor2 < 0 || valor2 > 100 || valor3 < 0 || valor3 > 100 || valor4 < 0 || valor4 > 100) {
                                            console.log('ERRO: Você não digitou um número válido.');
                                        } else if (sexoProfessor < 1 || sexoProfessor > 2 || sexoAluno < 1 || sexoAluno > 2 || isNaN(sexoProfessor) || isNaN(sexoAluno)) {
                                            console.log('ERRO: Você deve escolher entre os números 1 e 2 para selecionar o sexo.');
                                        } else {

                                            let resultado = matematica.getCalculo(nota1, nota2, nota3, nota4);
                                            let sexoP;
                                            let sexoA;
                                            let status;

                                            if (sexoProfessor == 1) {
                                                sexoP = "Professor";
                                            } else {
                                                sexoP = "Professora";
                                            } if (sexoAluno == 1) {
                                                sexoA = "O aluno";
                                            } else {
                                                sexoA = "A aluna";
                                            }

                                            if (resultado >= 50 && resultado <= 69) {
                                                console.log('O aluno precisará fazer o exame');
                                                entradaDados.question('Digite a nota do exame: \n', function (notaDoExame) {
                                                    notaExame = notaDoExame.replace(',','.');  

                                                    resultado = exame.getExame(resultado, notaExame);
                                                    
                                                    if (resultado >= 60) {
                                                        status = 'APROVADO';
                                                    } else if (resultado <= 59) {
                                                        status = 'REPROVADO';
                                                    }

                                                    console.log(
                                                        sexoA + ' ' + nomeAluno + ' foi ' + status + ' na disciplina ' + nomeDisciplina + '\n' +
                                                        'Curso: ' + nomeCurso + '\n' +
                                                        sexoP + ' : ' + nomeProfessor + '\n' +
                                                        'Notas do Aluno: ' + valor1 + ',' + valor2 + ',' + valor3 + ',' + valor4 + '\n' +
                                                        'Media Final: ' + resultado
                                                    )
                                                })
                                                
                                            } else {
                                                resultado = matematica.exibir(sexoA, nomeAluno, status, nomeDisciplina, nomeCurso, sexoP, nomeProfessor, nota1, nota2, nota3, nota4, resultado);
                                            }
                                        }

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})