//  Importar express
const express = require('express');
const multer = require('multer');

const AdmController = require('./controllers/AdmController');
const PaginasController = require('./controllers/PaginasController');
const PizzasController = require('./controllers/PizzasController');
const registraRequisicao = require('./middlewares/registraRequisicao');
const verificaSeLogado = require('./middlewares/verificaSeLogado');

const fabricaDeMiddlewares = multer({dest:'public/img'})

// Criar o roteador
const router = express.Router();

// Definir as rotas para o roteador
router.get('/', PaginasController.showIndex);

router.get('/carrinho', PaginasController.showCarrinho);

router.get('/perfil', PaginasController.showPerfil);

router.get('/cadastro', PaginasController.showCadastro);

router.get('/pizzas/:idDaPizza', PaginasController.showPizza);

router.get('/api/pizzas', PizzasController.index);

router.get('/adm/login', AdmController.showLogin);
router.post('/adm/login', AdmController.login);

router.use('/adm', verificaSeLogado);
router.get('/adm/pizzas', verificaSeLogado, AdmController.listarPizzas); // Mostrar lista das pizzas cadastradas
router.get('/adm/pizzas/create', verificaSeLogado, registraRequisicao, AdmController.criarPizza); // Mostrar form para add pizza
router.post('/adm/pizzas/store', verificaSeLogado, fabricaDeMiddlewares.single('img'), AdmController.gravarPizza); // Receber info digitadas para criação de um pizza
router.get('/adm/pizzas/:id/edit', verificaSeLogado, AdmController.showEditPizza); // Mostrar form para alterar pizza
router.post('/adm/pizzas/update', verificaSeLogado, ()=>{}); // Receber info digitadas para alteração de uma pizza
router.post('/adm/pizzas/delete', verificaSeLogado, ()=>{}); // Receber o id da pizza a ser removida

// Exportar o roteador
module.exports = router;