/**********************************************************************************************************
 * Objetivo: Responsável pela manipulação de dados dos ALUNOS no Banco de Dados
 * Data: 14/04/2023
 * Autor: Thiago
 * Versão: 1.0
 *********************************************************************************************************/

// Import da bibilioteca do prisma client
var { PrismaClient } = require('@prisma/client')

// Instancia da classe PrismaClient
var prisma = new PrismaClient()

// Inserir dados do aluno no Banco de Dados
const insertAluno = async function(dadosAluno){

    // ScriptSQL para inserir dados
    let sql = `insert into tbl_aluno (
                        nome,
                        rg,
                        cpf,
                        data_nascimento,
                        email
                        ) values (
                        '${dadosAluno.nome}',
                        '${dadosAluno.rg}',
                        '${dadosAluno.cpf}',
                        '${dadosAluno.data_nascimento}',
                        '${dadosAluno.email}'
                        )`

    // Executa o scriptSQL no BD
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }

}

// Atualizar dados do aluno no Banco de Dados
const updateAluno = async function(dadosAluno){
    
    // ScriptSQL para atualizar os dados no BD
    let sql = `update tbl_aluno set
                        nome = '${dadosAluno.nome}',
                        rg = '${dadosAluno.rg}',
                        cpf = '${dadosAluno.cpf}',
                        data_nascimento = '${dadosAluno.data_nascimento}',
                        email = '${dadosAluno.email}'
                where id = ${dadosAluno.id}
    `
    
    // Executa o script no BD
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }

}

// Deletar dados do aluno no Banco de Dados
const deleteAluno = async function(id){
    
    // ScriptSQL para deletar os dados no BD
    let sql = `delete from tbl_aluno where id = ${id}`

    // Executa o script no BD
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}

// Retornar todos os alunos do Banco de Dados
const selectAllAlunos = async function(){

    // ScriptSQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno'

    // $queryRawUnsafe(sql) - Permite interpretar uma variavel como sendo um scriptSQL
    // $queryRaw('select * from tbl_aluno') - Permite interpretar o scriptSQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    // Valida se o BD retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }

}

// Retornar o aluno filtrando pelo ID
const selectByIdAluno = async function(id){

    let idAluno = id

    // ScriptSQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno where id=' + idAluno

    // $queryRawUnsafe(sql) - Permite interpretar uma variavel como sendo um scriptSQL
    // $queryRaw('select * from tbl_aluno') - Permite interpretar o scriptSQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    // Valida se o BD retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }

}

// Retornar o aluno filtrando pelo nome
const selectByNameAluno = async function(name){

    let nomeAluno = name

    // ScriptSQL para buscar todos os itens no BD
    let sql = `select * from tbl_aluno where nome like '%${nomeAluno}%'`

    // $queryRawUnsafe(sql) - Permite interpretar uma variavel como sendo um scriptSQL
    // $queryRaw('select * from tbl_aluno') - Permite interpretar o scriptSQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    // Valida se o BD retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }

}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNameAluno,
    insertAluno,
    updateAluno,
    deleteAluno
}