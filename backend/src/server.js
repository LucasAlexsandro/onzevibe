require('dotenv').config()
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Import rotas
const assinantes = require("./routes/assinantes.routes");

// TOKEN

const TOKEN = "teste1";

// Database

const connection = require("./database/db");

// Config segurança token 

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

// Rotas

app.use("/assinantes", assinantes)



// Liga servidor
app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
