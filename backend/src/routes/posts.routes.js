const express = require("express");
const routes = express.Router();

const connection = require("../database/db");


// Cria o post no blog

routes.post("/criar", (req, res) => {
  
  let erros = [];

  if(erros.length > 0) res.send("Há alguns erros que não foram corrigidos, por favor corrija!")

  const newPost = {
    title: req.body.title,
    content: req.body.content, 
  }
  
});
