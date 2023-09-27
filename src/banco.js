import mysql2 from 'mysql2';


// const conexao = mysql2.createConnection({
//    host:  'localhost',
//    user: 'root',
//    password: '',
//    database: 'escola'
// });

// BANCO DE DADOS DB4FREE
const conexao = mysql2.createConnection({
    host:  'db4free.net',
    user: 'sengasgue',
    password: 'senac123',
    database: 'apiescola25'
 });


// Efetivando a conexão
conexao.connect(erro => {
    if (erro) {
        console.error(`Erro ao conectar: ${erro.code}`)
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}`);
    }
});

export default conexao;