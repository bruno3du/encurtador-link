import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello World'))

// Executa o servidor na porta 3000--init

app.listen(3000, ()=>console.log('Running on port 3000'))