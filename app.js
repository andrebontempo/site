// =========================
// 🧠 DEPENDÊNCIAS
// =========================
const express = require("express")
const exphbs = require("express-handlebars")
const path = require("path")
const bodyParser = require("body-parser")

// =========================
// ⚙️ CONFIGURAÇÕES BÁSICAS
// =========================
const app = express()
const PORT = process.env.PORT || 3000

// Configura o Handlebars
app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
  })
)
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))

// =========================
// 🌐 ARQUIVOS ESTÁTICOS
// =========================
// Public = onde estão /css, /js, /img etc.
app.use("/css", express.static(path.join(__dirname, "public", "css")))
app.use("/js", express.static(path.join(__dirname, "public", "js")))
app.use("/img", express.static(path.join(__dirname, "public", "img")))

// Middleware para interpretar formulários
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// =========================
// 🏠 ROTAS
// =========================
app.get("/", (req, res) => {
  res.render("index", {
    title: "BonTech - Helpdesk | Serviços e Automação em TI",
  })
})

app.post("/contato", (req, res) => {
  const { nome, email, mensagem } = req.body
  console.log(`📩 Contato recebido:
Nome: ${nome}
E-mail: ${email}
Mensagem: ${mensagem}`)

  res.render("index", {
    title: "BonTech - Helpdesk | Serviços e Automação em TI",
    sucesso: true,
  })
})

// =========================
// 🚀 INICIALIZAÇÃO DO SERVIDOR
// =========================
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`)
})
