/**********************************************************************************************************
 * Objetivo: Responsável pela regra de negócios referente ao CRUD de ALUNOS
 * Data: 14/04/2023
 * Autor: Thiago
 * Versão: 1.0
 *********************************************************************************************************/

// Inserir um novo aluno
const inserirAluno = function(dadosAluno){

}

// Atualizar um aluno existente
const atualizarAluno = function(dadosAluno){

}

// Excluir um aluno existente
const deletarAluno = function(id){

}

// Retorna a lista de todos os alunos
const getAlunos = async function(){

    let dadosAlunosJSON = {}

    // Import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')

    // Chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if (dadosAluno) {
        // Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }

}

// Retorna o aluno filtrando pelo ID
const getBuscarAlunoID = async function(id){

    let idAluno = id

    let dadosAlunosJSON = {}

    // Import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')

    // Chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectByIdAluno(idAluno)

    if (dadosAluno) {
        // Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }

}

// Retorna o aluno filtrando pelo nome
const getBuscarAlunoNome = async function(nome){

    let nomeAluno = nome

    let dadosAlunosJSON = {}

    // Import do arquivo DAO para acessar dados do aluno no BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')

    // Chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectByNameAluno(nomeAluno)

    if (dadosAluno) {
        // Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }

}

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    getBuscarAlunoNome
}