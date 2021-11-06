
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento) {

         conexao.query("INSERT INTO atendimentos (cliente,pet,servico,status,observacoes) values (?,?,?,?,?)",[atendimento.cliente,atendimento.pet,atendimento.servico,atendimento.status,atendimento.observacoes])

    }
}

module.exports = new Atendimento