const mariadb = require('mariadb/callback')

const conexao = mariadb.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'agenda_petshop'
})

//faz com que essa conexão possa se conectar a outros módulos
module.exports = conexao