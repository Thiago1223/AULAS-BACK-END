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

    // Define que os dados que irão chegar no body da requisição será no padrão JSON
    const bodyParserJSON = bodyParser.json()

    // Import do arquivo da controller que irá solicitar a model os dados do BD
    var controllerAluno = require('./controller/controller_aluno.js')
    var message = require('./controller/modulo/config.js')

    // EndPoint: Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function(request, response){

        // Recebe os dados da controller do aluno
        let dadosAluno = await controllerAluno.getAlunos()

        // Valida se existe registros de aluno
        if (dadosAluno) {
            response.status(200)
            response.json(dadosAluno)
        } else {
            response.status(404)
            response.json()
        }

    })

    // EndPoint: Retorna o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/id/:id', cors(), async function(request, response){

        let idAluno = request.params.id

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

    // EndPoint: Retorna o aluno filtrando pelo nome
    app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function(request, response){

        let nomeAluno = request.params.nome

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
    app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function(request, response){

        // Recebe o content-type da requisição
        let contentType = request.headers['content-type']

        // Validação para receber dados apenas no formato JSON
        if (String(contentType).toLowerCase() == 'application/json') {
            // Recebe os dados encaminhados na requisição
            let dadosBody = request.body
            
            let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody)

            response.status(resultDadosAluno.status)
            response.json(resultDadosAluno)
        } else {
            response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
            response.json(message.ERROR_INVALID_CONTENT_TYPE)
        }
    
    })

    // EndPoint: Atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJSON, async function(request, response){

        // Recebe o content-type da requisição
        let contentType = request.headers['content-type']

        // Validação para receber dados apenas no formato JSON
        if (String(contentType).toLowerCase() == 'application/json') {
            // Recebe o ID do aluno pelo parametro
            let idAluno = request.params.id
            // Recebe os dados do aluno encaminhado no corpo da requisição
            let dadosBody = request.body

            // Encaminha os dados para a controller
            let resultDadosAluno = await controllerAluno.atualizarAluno(dadosBody, idAluno)
            
            response.status(resultDadosAluno.status)
            response.json(resultDadosAluno)
        } else {
            response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
            response.json(message.ERROR_INVALID_CONTENT_TYPE)
        }

    })

    // EndPoint: Exclui um aluno, filtrando pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){

        // Recebe o ID do aluno pelo parametro
        let idAluno = request.params.id
        
        // Encaminha os dados para a controller
        let resultDadosAluno = await controllerAluno.deletarAluno(idAluno)

        if (resultDadosAluno.length != 0) {
            response.status(resultDadosAluno.status)
            response.json(resultDadosAluno)
        } else {
            message.ERROR_INVALID_ID_NOT_FOUND
        }
        
    })

    app.listen(8080, function(){
        console.log('Servidor aguardando requisições na porta 8080')
    })