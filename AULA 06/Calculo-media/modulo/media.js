function getCalculo(nota1, nota2, nota3, nota4) {

    let valor1 = nota1;
    let valor2 = nota2;
    let valor3 = nota3;
    let valor4 = nota4;
    let media;

    media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4)) / 4;

    return media;

}

function exibir(sexoAluno, nomeA, statusfinal, nomeDaDisciplina, nomeC, sexoProf, nomeProf, num1, num2, num3, num4, resMedia) {

    let sexoA = sexoAluno
    let nomeAluno = nomeA
    let status = statusfinal
    let nomeDisciplina = nomeDaDisciplina
    let nomeCurso = nomeC
    let sexoP = sexoProf
    let nomeProfessor = nomeProf
    let valor1 = num1
    let valor2 = num2
    let valor3 = num3
    let valor4 = num4
    let resultado = resMedia
    let media;

    media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4)) / 4;

    if (media < 50) {
        status = 'REPROVADO'
    } else if (media >= 70) {
        status = 'APROVADO'
    }

    console.log(
        sexoA + ' ' + nomeAluno + ' Foi ' + status + ' na disciplina ' + nomeDisciplina + '\n' +
        'Curso: ' + nomeCurso + '\n' +
        sexoP + ' : ' + nomeProfessor + '\n' +
        'Notas do Aluno: ' + valor1 + ',' + valor2 + ',' + valor3 + ',' + valor4 + '\n' +
        'Media Final: ' + resultado
    )
}

module.exports = {
    getCalculo,
    exibir
}