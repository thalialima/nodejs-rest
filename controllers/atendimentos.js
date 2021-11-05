//controla das rotas

module.exports = app => {
        //requisição GET(pegar dados)
      app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimento, e está realizando um GET'))   

      //requisição POST(enviar dados)
      app.post('/atendimentos', (req, res) => {
              //imprime a requisição
              console.log(req.body)
              res.send('Você está na rota de atendimento, e está realizando um POST')
        })
}