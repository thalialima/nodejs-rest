//contém as configurações do Express
//bibliotecas externas
const express = require('express')
const consign = require('consign')
//const bodyParser = require('body-parser')

module.exports = () => {
   const app = express()

    //transformando em JSON
   //app.use(bodyParser.json())
   app.use(express.json())

   //use() vem do express
   //app.use(bodyParser.urlencoded({extended: true}))
   //body-parser deprecated
   app.use(express.urlencoded({extended: true}));
  

   consign()
        .include('controllers')
        .into(app)     
   return app     
}
