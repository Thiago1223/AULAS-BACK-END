/**********************************************************************************************************
 * Objetivo: Responsável pela regra de negócios referente ao CRUD de ALUNOS
 * Data: 14/04/2023
 * Autor: Thiago
 * Versão: 1.0
 *********************************************************************************************************/

// Import do arquivo de configuração das variáveis, constantes e funções globais
var message = require('./modulo/config.js')

// Import do arquivo DAO para acessar dados do aluno no BD
var alunoDAO = require('../model/DAO/alunoDAO.js')

// Inserir um novo aluno
const inserirAluno = async function(dadosAluno){

    // Validação para tratar campos obrigatórios e quantidade de caracteres
    if (dadosAluno.nome == ''               || dadosAluno.nome == undefined             || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == ''                 || dadosAluno.rg == undefined               || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == ''                || dadosAluno.cpf == undefined              || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == ''    || dadosAluno.data_nascimento == undefined  || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == ''              || dadosAluno.email == undefined            || dadosAluno.email.length > 200
    ) {
        return message.ERROR_REQUIRED_FIELDS // Status code 400
    } else {
        // Enviaos dados para a model inserir no BD
        let resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)

        // Valida se o BD inseriu corretamente os dados
        if (resultDadosAluno) {
            return message.SUCCESS_CREATED_ITEM // Status code 201
        } else {
            return message.ERROR_INTERNAL_SERVER // Status code 500
        }
    }

}

// Atualizar um aluno existente
const atualizarAluno = async function(dadosAluno, idAluno){

    // Validação para tratar campos obrigatórios e quantidade de caracteres
    if (dadosAluno.nome == ''               || dadosAluno.nome == undefined             || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == ''                 || dadosAluno.rg == undefined               || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == ''                || dadosAluno.cpf == undefined              || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == ''    || dadosAluno.data_nascimento == undefined  || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == ''              || dadosAluno.email == undefined            || dadosAluno.email.length > 200
    ) {
        return message.ERROR_REQUIRED_FIELDS // Status code 400
    // Validação de IF incorreto ou não informado
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID // Status code 400
    } else {
        // Adiciona o id do aluno no JSON dos dados
        dadosAluno.id = idAluno

        // Encaminha os dados para a model do aluno
        let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno)

        if (resultDadosAluno) {
            return message.SUCCESS_UPDATED_ITEM // Status code 200
        } else {
            return message.ERROR_INTERNAL_SERVER // Status code 500
        }
    }

}

// Excluir um aluno existente
const deletarAluno = async function(idAluno){

    let buscarAluno = await getBuscarAlunoID(idAluno)

    if (buscarAluno) {
        // Validação de IF incorreto ou não informado
        if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
            return message.ERROR_INVALID_ID // Status code 400
        } else {
            // Encaminha os dados para a model do aluno
            let resultDadosAluno = await alunoDAO.deleteAluno(idAluno)

            if (resultDadosAluno) {
                return message.SUCCESS_DELETE_ITEM // Status code 200
            } else {
                return message.ERROR_INTERNAL_SERVER // Status code 500
            }
        }
    } else {
        return message.ERROR_INVALID_ID_NOT_FOUND
    }

}

// Retorna a lista de todos os alunos
const getAlunos = async function(){

    let dadosAlunosJSON = {}

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
    getBuscarAlunoNome,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}