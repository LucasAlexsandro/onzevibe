const express = require("express");
const routes = express.Router();

const connection = require("../database/db");

// Pega todos os assinantes

routes.get("/", (req, res) => {
  connection.query(`SELECT * FROM Assinantes`, (err, result) => {
    if (err) res.status(400).json({ error: "erro na consulta" });
    res.send(result);
  });
});

// Cadastra os assinantes

routes.post("/", (req, res) => {
  const { email } = req.body;

  const sql = "INSERT INTO assinantes (email) VALUES (?)";
  const values = email;

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

module.exports = routes;
