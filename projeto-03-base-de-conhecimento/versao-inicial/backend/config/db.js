const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) //Não é aconselhavel deixar assim.
module.exports = knex 

