const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    
    adiciona(atendimento, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

    //restorna um boolean true caso a data seja válida
    const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
    //retorna um boolean true caso o cliente seja válido
    const clienteEhValido = atendimento.cliente.length >= 5
    
    //array que  contém as validações
    const validacoes = [
        {
            nome: 'data',
            valido: dataEhValida,
            mensagem: 'Não é possível fazer um agendamento para o passado'
        },

        {
            nome: 'cliente',
            valido: clienteEhValido,
            mensagem: 'O nome do cliente deve ter pelo menos 5 caracters'
        }
    ]
    //filtra as validações para pegar só o que está errado
    const erros = validacoes.filter(campo => !campo.valido)
    //verifica se há erros
    const existemErros = erros.length

    if(existemErros){
        res.status(400).json(erros)
    }else{
        conexao.query("INSERT INTO atendimentos (cliente,pet,servico,status,data,dataCriacao,observacoes) values (?,?,?,?,?,?,?)",[atendimento.cliente,atendimento.pet,atendimento.servico,atendimento.status, data, dataCriacao, atendimento.observacoes], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(resultados)
            }
        })
    }


    }
}

module.exports = new Atendimento