/*****************************************************************
 * Objetivo: Utilizar códigos e métodos de array
 * Data: 24/02/2023
 * Autor: Thiago
 * Versão: 1.0
******************************************************************/

// [] - representa um objeto do tipo array
// {} - representa um objeto do tipo JSON

const listaNomes = ['José', 'Maria', 'Luiz', 'Antonio', 'Ana', 'Carlos'];
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memória'];

/**************
 *  JSON é composto: chave (atributo) e valor
 * 
 *    Chave   Valor  Chave       Valor       Chave      Valor   
 *   {nome : 'José', celular : '219371873', email : 'jose@gmail.com'}
 * 
 **************/

const exibindoDados = function () {

    // Verifica o tipo de dados do elemento listaNomes
    console.log(typeof (listaNomes));

    // Verifica o tipo de dados dos itens do array
    console.log(typeof (listaNomes[0]));

    // Exibe o conteúdo de um indice
    console.log(listaNomes[0]);

    // Exibe todos os itens do array
    console.log(listaNomes);

    // table - permite visualizar o conteúdo do array em formato de tabela
    console.table(listaNomes);

    console.log('O nome do aluno é: ' + listaNomes[0]);
    console.log(`O nome do aluno é: ${listaNomes[0]}`);

    // length - retorna a quantidade de itens de um array
    console.log(listaNomes.length);

    // Percorrendo um array com While
    console.log('Exemplo com While');
    let cont = 0; // Start
    let qtdeItens = listaNomes.length; // Stop

    while (cont < qtdeItens) {
        console.log(`O nome do aluno é: ${listaNomes[cont]}`);
        cont += 1;
    }

    // Percorrendo um array com FOR
    console.log('Exemplo com FOR');
    for (let cont = 0; cont < qtdeItens; cont++) {
        console.log(`O nome do aluno é: ${listaNomes[cont]}`);
    }

    // Percorrendo um array com FOREACH
    console.log('Exemplo com FOREACH (forma mais antiga)');
    for (itemProduto in listaNomes) {
        console.log(`O nome do aluno é: ${listaNomes[itemProduto]}`);
    }

    console.log('Exemplo com FOREACH');
    listaNomes.forEach(function (nome) {
        console.log(`O nome do aluno é: ${nome}`);
    });

};

const manipulandoDados = function () {
    // push - Adiciona novos itens no final do Array, preservando os elementos anteriores
    listaProdutos.push('Memória');
    listaProdutos.push('WebCam', 'Gabinete', 'Fone');
    console.table(listaProdutos);

    // unshift - Adiciona novos itens no inicio do Array, re-organizando todos os elementos
    listaProdutos.unshift('HD', 'Placa-Mãe', 'SSD');
    console.table(listaProdutos);

    // pop - Remove o último itemProduto do Array, preservando os elementos anteriores
    listaProdutos.pop();
    console.table(listaProdutos);

    // shift - Remove o itemProduto do inicio do Array, re-organizando os elementos anteriores
    listaProdutos.shift();
    console.table(listaProdutos);

    // slice - Permite criar uma cópia de um Array
    const novosProdutos = listaProdutos.slice()
    console.log(novosProdutos);

    // indexOf - Permite buscar dentro de um Array um itemProduto
    // Se o retorno for -1, o itemProduto não foi encontrado
    // Se o retorno for maior ou igual 0, o itemProduto foi encontrado e ele retorna o indice
    console.log(listaProdutos.indexOf('PC'));

    // Exemplo de utilização do indexOf
    if (listaProdutos.indexOf('PC') >= 0) {
        console.log('Item encontrado');
    } else {
        console.log('Item não encontrado');
    }

};

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto;
    let indice = listaProdutos.indexOf(nome);
    let status;

    // splice - Permite apagar um ou mais itens de um array através do indice
    // Se for encaminhado somente o indice ele irá apagar todos os itens
    // para baixo
    // Para limitar a qtde de itens a ser apagado, devemos informar como segundo parametro
    if (indice >= 0) {
        listaProdutos.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }

    return status;

};

const removerItem = function (array, nomeItem) {
    // Entrada
    let nome = nomeItem;
    let listaItens = array.slice();
    let indice = listaItens.indexOf(nome);
    let status;

    // Processamento da função
    if (indice >= 0) {
        listaItens.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }

    // Saída
    if (status == true) {
        return listaItens;
    } else {
        return status;
    }

};

const listagemProdutos = function () {
    // Forma nº1 de criar um JSON e já atribuir chaves e valores
    // let listProdutosJSON = {produtos : listaProdutos, clientes : listaNomes};

    // Forma nº2 de criar um JSON, onde as chaves e valores são atribuidas no decorrer do projeto
    // let listProdutosJSON = {};

    // listProdutosJSON.produtos = listaProdutos;
    // listProdutosJSON.clientes = listaNomes;

    // Extraindo valores de um JSON e ARRAY
    // console.log(listProdutosJSON);
    // console.log(listProdutosJSON.produtos[1]);
    // console.log(listProdutosJSON.clientes[5]);

    let listProdutosJSON = {}
    let listProdutosArray = [
        { nome: 'Monitor', quantidade: 300, marca: 'DELL', valor: 1000, codigo: 1 },
        { nome: 'Monitor', quantidade: 280, marca: 'LG', valor: 1300, codigo: 2 },
        { nome: 'Teclado', quantidade: 800, marca: 'DELL', valor: 200, codigo: 3 },
        { nome: 'Teclado', quantidade: 360, marca: 'LG', valor: 230, codigo: 4 },
        { nome: 'Teclado', quantidade: 80, marca: 'Logitech', valor: 120, codigo: 5 },
        { nome: 'Teclado', quantidade: 100, marca: 'Razer', valor: 1230, codigo: 6 },
        { nome: 'Mouse', quantidade: 790, marca: 'DELL', valor: 115, codigo: 7 },
        { nome: 'Mouse', quantidade: 25, marca: 'Razer', valor: 800, codigo: 8 }
    ];

    // Arrays para cores
    let listCoresDellArray = ['Preto', 'Branco', 'Cinza'];
    let listCoresLgArray = ['Preto', 'Cinza'];
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul'];
    let listCoresMouseArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo']

    // Arrays para modelo
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4k', 'IPS'];
    let listModelosTeclado = ['Mecânico', 'Semi-Mecânico', 'Membrana', 'Óptico'];

    // Adiciona o array de produtos dentro de um JSON
    listProdutosJSON.produtos = listProdutosArray;

    // Adicionar cores ao monitor DELL
    listProdutosJSON.produtos[0].cores = listCoresDellArray;

    // Adicionar cores ao monitor lG
    listProdutosJSON.produtos[1].cores = listCoresLgArray;

    // Adicionar cores ao teclado DELL                  
    listProdutosJSON.produtos[2].cores = listCoresDellArray;

    // Adicionar cores ao teclado LG, Logitech e Razer
    listProdutosJSON.produtos[3].cores = listCoresTecladoArray;
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray;
    listProdutosJSON.produtos[5].cores = listCoresTecladoArray;

    // Adicionar cores ao mouse DELL e Razer
    listProdutosJSON.produtos[6].cores = listCoresDellArray;
    listProdutosJSON.produtos[7].cores = listCoresMouseArray;

    // Adicionar modelos aos Monitores
    listProdutosJSON.produtos[0].modelos = listModelosMonitor;
    listProdutosJSON.produtos[1].modelos = listModelosMonitor;

    // Adicionar modelos aos Teclados
    listProdutosJSON.produtos[2].modelos = listModelosTeclado;
    listProdutosJSON.produtos[3].modelos = listModelosTeclado;
    listProdutosJSON.produtos[4].modelos = listModelosTeclado;
    listProdutosJSON.produtos[5].modelos = listModelosTeclado;

    // console.log(listProdutosJSON);

    // Percorre o array de produtos para listar os itens
    listProdutosJSON.produtos.forEach(function (itemProduto) {
        console.log('Nome: ' + itemProduto.nome);
        console.log('Marca: ' + itemProduto.marca);

        // Tratamento de erro para quando não existir array de cores
        if (itemProduto.cores != undefined) {
            // Percorre o array de cores que está dentro do array de produtos(itemProduto)
            itemProduto.cores.forEach(function (itemCor) {
                console.log('Cor: ' + itemCor);
            });
        }

        // Tratamento de erro para quando não existir array de modelos
        if (itemProduto.modelos != undefined) {
            // Percorre o array de modelos que está dentro do array de produtos(itemProduto)
            itemProduto.modelos.forEach(function (itemModelo) {
                console.log('Modelo: ' + itemModelo);
            });
        }
    });

    // for (let contProdutos = 0; contProdutos < listProdutosJSON.produtos.length; contProdutos++) {
    //     console.log('Nome: ' + listProdutosJSON.produtos[contProdutos].nome);
    //     console.log('Marca: ' + listProdutosJSON.produtos[contProdutos].marca);

    //     if (listProdutosJSON.produtos[contProdutos].cores != undefined) {
    //         for (let contCores = 0; contCores < listProdutosJSON.produtos[contProdutos].cores.length; contCores++) {
    //             console.log('Cor: ' + listProdutosJSON.produtos[contProdutos].cores[contCores]);
    //         }   
    //     }

    //     if (listProdutosJSON.produtos[contProdutos].modelos != undefined) {
    //         for (let contModelos = 0; contModelos < listProdutosJSON.produtos[contProdutos].modelos.length; contModelos++) {
    //             console.log('Modelo: ' + listProdutosJSON.produtos[contProdutos].modelos[contModelos]);
    //         }
    //     }
    // }

    // console.log('Nome: ' + listProdutosJSON.produtos[1].nome);
    // console.log('Marca: ' + listProdutosJSON.produtos[1].marca);
    // console.log('Valor: ' + listProdutosJSON.produtos[1].valor);
    // console.log('Cor: ' + listProdutosJSON.produtos[1].cores);
    // console.log('Modelo: ' + listProdutosJSON.produtos[1].modelos[1]);

    // console.log(listProdutosJSON.produtos[1].nome);
    // console.log(listProdutosJSON.produtos[1].marca);
    // console.log(listProdutosJSON.produtos[0]);
    // console.log(listProdutosJSON.produtos[1]);

};

listagemProdutos();

// manipulandoDados();
// console.table(listaProdutos);
// console.log(removerProduto('Monitor'))

// console.log(removerItem(listaProdutos, 'Monitor'))
// console.table(listaProdutos);