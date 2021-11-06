class Tabelas{
        init(conexao){
                this.conexao = conexao
                this.criarTabelaDeAtendimentos()
        }

        criarTabelaDeAtendimentos(){
                const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet VARCHAR(20), servico VARCHAR(20) NOT NULL, status VARCHAR(20) NOT NULL, observacoes TEXT, PRIMARY KEY(id))'

                this.conexao.query(sql, erro => {
                        if(erro){
                                console.log(erro)
                        }else{
                                console.log('Tabela atendimentos criada com sucesso!')
                        }

                })
        }
}

//permite usar a classe em outro lugar
module.exports = new Tabelas