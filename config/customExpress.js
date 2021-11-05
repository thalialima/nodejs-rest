//contém as configurações do Express
//bibliotecas externas
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
   const app = express()

   //use() vem do express
   //app.use(bodyParser.urlencoded({extended: true}))
   //body-parser deprecated
   app.use(express.urlencoded({extended: true}));
   //transformando em JSON
   //app.use(bodyParser.json())
   app.use(express.json())

   consign()
        .include('controllers')
        .into(app)     
   return app     
}
