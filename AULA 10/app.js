/**********************************************************************************************************
 * Objetivo: API para integração entre Back e Banco de Dados(GET, POST, PUT, DELETE)
 * Data: 14/04/2023
 * Autor: Thiago
 * Versão: 1.0
 *********************************************************************************************************/

// Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Cria o objeto app conforme a classe do express
const app = express()

// Permissões do cors
app.use((request, response, next) => {
    // Define quem poderá acessar a API
    response.header('Access-Control-Allow-Origin', '*')
    // Define quais métodos serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    // Atribui as permissões ao cors
    app.use(cors())

    next()
})

// CRUD (Create, Read, Update e Delete)

/************************************************************************************
 * Objetivo: API de controle de ALUNOS
 * Data: 14/01/2023
 * Autor: Thiago
 * Versão: 1.0
 ***********************************************************************************/

    /*
    Instalação do PRISMA no projeto (biblioteca para conexão com BD)
        npm install prisma --save
        npx prisma
        npx prisma init
        npm install @prisma/client 

        npx prisma migrate dev #### Serve para realizar o sincronismo entre o prisma e o BD
    */

    // EndPoint: Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function(request, response){

        // Import do arquivo da controller que irá solicitar a model os dados do BD
        let controllerAluno = require('./controller/controller_aluno.js')

        // Recebe os dados da controller do aluno
        let dadosAluno = await controllerAluno.getAlunos()

        // Valida se existe registros de aluno
        if (dadosAluno) {
            response.json(dadosAluno)
            response.status(200)
        } else {
            response.json()
            response.status(404)
        }

    })

    // EndPoint: Retorna o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/id/:id', cors(), async function(request, response){

        let idAluno = request.params.id

        // Import do arquivo da controller que irá solicitar a model os dados do BD
        let controllerAluno = require('./controller/controller_aluno.js')

        // Recebe os dados da controller do aluno
        let dadosAluno = await controllerAluno.getBuscarAlunoID(idAluno)

        // Valida se existe registros de aluno
        if (dadosAluno) {
            response.status(200)
            response.json(dadosAluno)
        } else {
            response.status(404)
            response.json()
        }

    })

    app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function(request, response){

        let nomeAluno = request.params.nome

        // Import do arquivo da controller que irá solicitar a model os dados do BD
        let controllerAluno = require('./controller/controller_aluno.js')

        // Recebe os dados da controller do aluno
        let dadosAluno = await controllerAluno.getBuscarAlunoNome(nomeAluno)

        // Valida se existe registros de aluno
        if (dadosAluno) {
            response.status(200)
            response.json(dadosAluno)
        } else {
            response.status(404)
            response.json()
        }

    })

    // EndPoint: Insere um dado novo 
    app.post('/v1/lion-school/aluno', cors(), async function(request, response){

    })

    // EndPoint: Atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    })

    // EndPoint: Exclui um aluno, filtrando pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    })

    app.listen(8080, function(){
        console.log('Servidor aguardando requisições na porta 8080')
    })