//importar a dependência do SQLITE

const sqlite3 = require("sqlite3").verbose()
//criar o que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
//utilizar o objeto de banco de dados para as operações
/*db.serialize(()=>{
    //Criar uma tabela 
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name TEXT,
           image TEXT,
           address TEXT,
           address2 TEXT,
           state TEXT,
           city TEXT,
           itens TEXT 
        );

    `)

    //Inserir dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            itens
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santan Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso!")
        console.log(this)
    }
    db.run(query, values, afterInsertData)

    //Consultar dados na tabela
    /*db.all(`SELECT * FROM places`,function(err,rows){
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão seus registros")
        console.log(rows)
    })

    //Deletar um dado na tabela

    db.run(`DELETE FROM places WHERE id = ?`,[1], function(err){
        if(err){
            return console.log(err)
        }
        console.log("Registro deeletado com sucesso")
    })
})*/