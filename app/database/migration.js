var mysql = require('mysql')

var migrate = (() => {
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    //database: 'node-st'
  })

  connection.query('CREATE DATABASE IF NOT EXISTS `node-st`', (error, result) => {
    if(error != null) {
      console.log('Erro na criação do banco! ', error)
    } else {
      console.log('Banco criado com sucesso!')
    }
  })

  connection.query('USE `node-st`')

  let query = "CREATE TABLE IF NOT EXISTS `figures` ("+
  "`id` int(11) NOT NULL auto_increment, "+
  "`name` varchar(100)  NOT NULL default '',"+
  "`path` varchar(150) NOT NULL default '',"+
  "`obs`  varchar(100) NOT NULL default '',"+
  "PRIMARY KEY  (`id`));"

  connection.query(query, (error, result) => {
    if(error != null) {
      console.log('Erro na criação da tabela! ', error)
    } else {
      console.log('Tabela "Figures" criada com sucesso!')
    }
  })
  connection.end()
})

migrate()
