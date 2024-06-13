const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configurar a conexão com o banco de dados
const db = mysql.createConnection({
  host: '127.0.0.1', // IP do servidor MySQL
  user: 'root',      // Nome de usuário do MySQL
  password: '',  // Senha do MySQL
  database: 'tcc',
  port: 3306         // Porta do MySQL
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Definir uma rota para obter dados
app.get('/dados', (req, res) => {
  const sql = 'SELECT * FROM tb_alunos';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Erro ao buscar dados');
      return;
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
