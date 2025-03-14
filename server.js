const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const livros = [
    {
         "id": "1",
        "nome": "O diário de Anne Frank",
        "autor": "Anne Frank",
        "descricao": "O diário de Anne Frank, o depoimento da pequena Anne, morta pelos nazistas após passar anos escondida no sótão de uma casa em Amsterdã, ainda hoje emociona leitores no mundo inteiro. Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto.",
        "avaliacao": 4,
        "capa": "./img/anneFrank.png",
       
      },
      {
         "id": "2",
        "nome": "Harry Potter e a Pedra Filosofal",
        "autor": "J.K Rowling ",
        "descricao": "Harry recebe uma carta convite para estudar na Escola de Magia e Bruxaria de Hogwarts  Harry conhece Rony Weasley e Hermione Granger, seus novos amigos  Harry e seus amigos descobrem que a pedra filosofal está guardada na escola  A trama gira em torno do desejo de Voldemort de conseguir a pedra para se tornar imortal ",
        "avaliacao": 4,
        "capa": "./img/harrypotter1.jpg",
       
      },
      {
        "id": "3",
        "nome": "As Crônicas De Nárnia (volume único)",
        "autor": "C.S Lewis",
        "descricao": "Reinos mágicos, criaturas inesquecíveis e batalhas épicas entre o bem o mal: essas histórias são narradas em As Crônicas de Nárnia — uma série de sete livros que acompanha crianças curiosas e suas aventuras entre o nosso mundo e outros universos mágicos e que, por décadas, encanta leitores de todas as idades.O Leão, a Feiticeira e o Guarda-roupa conta a história dos irmãos Pedro, Susana, Edmundo e Lúcia. Em meio a brincadeiras na casa de um velho professor, eles descobrem um misterioso guarda-roupa que os leva a Nárnia, um reino que sofre de um inverno sem fim desde que a temida Feiticeira Branca tomou o poder. Mas uma antiga profecia — que envolve justamente quatro crianças, além de um fantástico leão — afirma que há esperança para o reino, contanto que se tenha coragem.",
        "capa": "./img/ascronicasdenarnia.jpg",
        "avaliacao": 5
      },
      {
        "id": "4",
        "nome": "Meus dias na Livraria Morisaki ",
        "autor": "Satoshi Yagisawa",
        "descricao": "Meus Dias na Livraria Morisaki é um livro de Satoshi Yagisawa pertencente ao gênero da ficção de cura. A história gira em torno de Takako, uma jovem que, após passar por dificuldades pessoais e profissionais, se muda para a livraria de seu tio na tradicional região de Jimbocho, em Tóquio.",
        "capa": "./img/meusdiasnalivrariamorisaki.jpg",
        "avaliacao": 4
      },
      {
         "id": "5",
        "nome": "Amor de redenção",
        "autor": "Francine Rivers",
        "descricao": "O relacionamento de um jovem casal se choca com as duras realidades da Corrida do Ouro na Califórnia de 1850. Angel, experimentando o amor pela primeira vez e enfrentando demônios que parecem insuperáveis, foge da nova vida que ela acha que não merece. No entanto, durante a busca de Michael pela sua amada, Angel descobre que ela tem o poder de escolher a vida que quer.",
        "avaliacao": 4,
        "capa": "./img/amorderedencao.jpg",
    
      },
      {
        "id": "6",
        "nome": "Teste ",
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

// Rota para adicionar um novo livro
app.post('/livros', (req, res) => {
  const novoLivro = req.body;

  novoLivro.id = (livros.length + 1).toString(); 

  livros.push(novoLivro);

  res.status(201).json(novoLivro);
});

// Rota para atualizar um livro existente
app.put('/livros/:id', (req, res) => {
  const livroId = req.params.id;
  const livroAtualizado = req.body;

  const index = livros.findIndex(livro => livro.id === livroId);

  if (index === -1) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  // Atualizando as informações do livro
  livros[index] = { ...livros[index], ...livroAtualizado };

  res.status(200).json(livros[index]);
});

// Rota para excluir um livro
app.delete('/livros/:id', (req, res) => {
  const livroId = req.params.id;
  const index = livros.findIndex(livro => livro.id === livroId);

  if (index === -1) {
    return res.status(404).json({ error: "Livro não encontrado" });
  }

  livros.splice(index, 1); 

  res.status(200).json({ message: "Livro excluído com sucesso" });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});