const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// TOKEN

const TOKEN = "teste1";

// Database

const connection = require("../database/db");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
  const token = req.header("Authorization");

  if (token === TOKEN) {
    next(); // Token válido, continue para a rota
  } else {
    res.status(401).json({ message: "Token de autorização inválido" });
  }
});

// Pega todos os assinantes

app.get("/assinantes", (req, res) => {
  connection.query(`SELECT * FROM Assinantes`, (err, result) => {
    if (err) res.status(400).json({ error: "erro na consulta" });
    res.send(result);
  });
});

// Cadastra os assinantes

app.post("/news", (req, res) => {
  const { email } = req.body;

  const sql = "INSERT INTO Assinantes (email) VALUES (?)";
  const values = email

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Erro ao inserir dados no MySQL:", err);
      res
        .status(500)
        .json({ error: "Erro ao inserir dados no banco de dados" });
    } else {
      console.log("Dados inseridos com sucesso no MySQL");
      res.json({ message: "Dados inseridos com sucesso" });
    }
  });
});

// Liga servidor
app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
