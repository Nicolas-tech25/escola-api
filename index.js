import express from 'express';
import { inserir, ler } from './src/aluno.js'

const app = express();

/* Adicionando suporte ao formato json
 */
app.use(express.json());

/* Adicionando suporte a dados vindos de formulários */
app.use(express.urlencoded({ extended : true }));

// Criando as totas

// Raiz da aplicação
app.get('/', (req, res) => {
    res.send(`Raiz da API NodeJS + Express + MySQL`);
});

// Executando o servidor
const porta = 8080;
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});

// EXIBINDO DADOS TODOS ALUNO 
app.get('/alunos', (req, res) => {
    ler(res);
    
});

// INSERINDO NOVO ALUNO
app.post('/alunos', (req, res) => {
    // res.send(`INSERINDO um aluno`);
    const novoAluno = req.body;
    inserir(novoAluno, res);
});

// ATUALIZANDO DADOS DE UM ALUNO
app.patch('/alunos/:id', (req, res) => {
    res.send(`ATUALIZANDO DADOS DE um aluno`);
});

// EXCLUIDO ALUNOS
app.delete('/alunos/:id', (req, res) => {
    res.send(`EXCLUINDO alunos`);
}); 