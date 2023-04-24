/**********************************************************************************************************
 * Objetivo: Responsável pela manipulação de dados dos ALUNOS no Banco de Dados
 * Data: 14/04/2023
 * Autor: Thiago
 * Versão: 1.0
 *********************************************************************************************************/

// Inserir dados do aluno no Banco de Dados
const insertAluno = function(dadosAluno){

}

// Atualizar dados do aluno no Banco de Dados
const updateAluno = function(dadosAluno){
    
}

// Deletar dados do aluno no Banco de Dados
const deleteAluno = function(id){
    
}

// Retornar todos os alunos do Banco de Dados
const selectAllAlunos = async function(){

    // Import da bibilioteca do prisma client
    let { PrismaClient } = require('@prisma/client')

    // Instancia da classe PrismaClient
    let prisma = new PrismaClient()

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
    
    // Import da bibilioteca do prisma client
    let { PrismaClient } = require('@prisma/client')

    // Instancia da classe PrismaClient
    let prisma = new PrismaClient()

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

    // Import da bibilioteca do prisma client
    let { PrismaClient } = require('@prisma/client')

    // Instancia da classe PrismaClient
    let prisma = new PrismaClient()

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
    selectByNameAluno
}