var express = require('express');
var router = express.Router();
var Cliente = require('../models/cliente');

/* GET home page. */
router.get('/', function(req, res, next) {
  let cpf = req.query.cpf
  var cliente = new Cliente()
  cliente.cpf = cpf
  let cpfValidado = cliente.validarCPF()
  res.render('index', { title: 'Suppi Store', cpfValidado:cpfValidado, cpf:cpf });
});

module.exports = router;
