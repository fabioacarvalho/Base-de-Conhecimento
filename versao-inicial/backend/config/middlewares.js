//Aqui vamos configurar os middlewares do express.

//BodyParse para interpretar os arquivos.
//Cors - permite que possamos acessar de outra api o backend

const bodyParser = require('body-parser')
const cors = require('cors')

/** 
 * Para nao precisarmos fazer o require de todos os arquivos da nossa aplicação o consign vai nos ajudar nisso. 
 * Ele tem um padrão que é exportar usando module exports uma função que recbe como parâmetro um deternminado parametro nesse caso chamado de "app" e esse parâmetro será exatamente o app que criamos em index.js na linha 1 ( const app = require('express')() )para rodar nossa aplicação com o nodemon.
 * Então esse app que é uma instancia do express ele vai servir como centralizador de tudo aquilo que nós vamos usar na nossa aplicação.
 * E o consign vai ser responsavel por colocar nossos métodos, toda nossa API dentro de app, 
 * e ele vai nos ajudar muito na hora de definir nossas relações.
 */

module.exports = app => {
    app.use(bodyParser.json()) //aplicando um middlware que vai interpretar o json que vai vir no corpo da requisição.
    app.use(cors())
}
