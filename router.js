//  Importar express
const express = require('express');
const AdmController = require('./controllers/AdmController');
const PaginasController = require('./controllers/PaginasController');

// Criar o roteador
const router = express.Router();

// Definir as rotas para o roteador
router.get('/', PaginasController.showIndex);

router.get('/carrinho', PaginasController.showCarrinho);

router.get('/perfil', PaginasController.showPerfil);

router.get('/cadastro', PaginasController.showCadastro);

router.get('/pizzas/:idDaPizza', PaginasController.showPizza);

router.get('/adm/pizzas', AdmController.listarPizzas); // Mostrar lista das pizzas cadastradas
router.get('/adm/pizzas/create', AdmController.criarPizza); // Mostrar form para add pizza
router.get('/adm/pizzas/edit', ()=>{}); // Mostrar form para alterar pizza
router.post('/adm/pizzas/store', AdmController.gravarPizza); // Receber info digitadas para criação de um pizza
router.post('/adm/pizzas/update', ()=>{}); // Receber info digitadas para alteração de uma pizza
router.post('/adm/pizzas/delete', ()=>{}); // Receber o id da pizza a ser removida


// Exportar o roteador
module.exports = router;