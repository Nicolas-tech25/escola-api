import express from 'express';
import { inserir, ler, lerUm, atualizar, excluir } from './src/aluno.js'

const app = express();
const porta = process.env.PORT || 3306;

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
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});

// EXIBINDO DADOS TODOS ALUNOS
app.get('/alunos', (req, res) => {
    // 
    ler(res);
    
});

app.get('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    lerUm(id,res);
});


// INSERINDO NOVO ALUNO
app.post('/alunos', (req, res) => {
    // res.send(`INSERINDO um aluno`);
    const novoAluno = req.body;
    inserir(novoAluno, res);
});

// ATUALIZANDO DADOS DE UM ALUNO
app.patch('/alunos/:id', (req, res) => {
    // res.send(`ATUALIZANDO DADOS DE um aluno`);    
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id,aluno,res);
});

// EXCLUIDO ALUNOS
app.delete('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    excluir(id,res);
}); 