import express from 'express';

const app = express();

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

// EXIBINDO DADOS DE UM ALUNO 
app.get('/alunos/:id', (req, res) => {
    res.send(`Dados de um aluno`);
});

// INSERINDO NOVO ALUNO
app.post('/alunos', (req, res) => {
    res.send(`INSERINDO um aluno`);
});

// ATUALIZANDO DADOS DE UM ALUNO
app.patch('/alunos/:id', (req, res) => {
    res.send(`ATUALIZANDO DADOS DE um aluno`);
});

// EXCLUIDO ALUNOS
app.delete('/alunos/:id', (req, res) => {
    res.send(`EXCLUINDO alunos`);
});