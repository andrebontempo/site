const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index', { title: 'Minha Empresa de TI' });
});

app.post('/contato', (req, res) => {
  const { nome, email, mensagem } = req.body;
  console.log(`Contato recebido:\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
  res.render('index', { title: 'Minha Empresa de TI', sucesso: true });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
