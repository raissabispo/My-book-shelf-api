const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const livros = [
  {
    "nome": "O diário de Anne Frank",
    "autor": "Anne Frank",
    "descricao": "O diário de Anne Frank...",
    "avaliacao": 5,
    "capa": "./img/anneFrank.png",
    "id": "1"
  },
  {
    "nome": "Harry Potter e a Pedra Filosofal",
    "autor": "J.K Rowling",
    "descricao": "Harry recebe uma carta...",
    "avaliacao": 4,
    "capa": "./img/harrypotter1.jpg",
    "id": "2"
  },
  {
    "id": "3",
    "nome": "As Crônicas De Nárnia (volume único)",
    "autor": "C.S Lewis",
    "descricao": "Reinos mágicos, criaturas inesquecíveis...",
    "capa": "./img/ascronicasdenarnia.jpg",
    "avaliacao": 5
  },
  {
    "id": "4",
    "nome": "Meus dias na Livraria Morisaki",
    "autor": "Satoshi Yagisawa",
    "descricao": "Meus Dias na Livraria Morisaki é um livro...",
    "capa": "./img/meusdiasnalivrariamorisaki.jpg",
    "avaliacao": 4
  },
  {
    "nome": "Amor de redenção",
    "autor": "Francine Rivers",
    "descricao": "O relacionamento de um jovem casal...",
    "avaliacao": 4,
    "capa": "./img/amorderedencao.jpg",
    "id": "5"
  },
  {
    "id": "6",
    "nome": "Teste",
    "autor": "teste",
    "descricao": "teste",
    "capa": "./img/acasadospesadelos.jpg",
    "avaliacao": 1
  }
];

// Rota para listar todos os livros
app.get('/', (req, res) => {
  res.json({ livros });
});

// Rota para pegar um livro específico pelo ID
app.get('/livros/:id', (req, res) => {
  const livroId = req.params.id;
  const livro = livros.find(livro => livro.id === livroId);

  if (!livro) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  res.json(livro);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
