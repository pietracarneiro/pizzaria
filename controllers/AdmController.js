const PizzasServices = require("../services/PizzasServices");
const fs = require('fs');


const AdmController = {
    listarPizzas: (req, res) => {
        // Carregar as pizzas
        const pizzas = PizzasServices.carregarPizzas();

        // Renderizar a view listar-pizzas, passando as pizzas para ela
        res.render('lista-de-pizzas.ejs', {pizzas})
    },
    criarPizza: (req, res) => {
        res.render('form-add-pizza.ejs');
    },
    gravarPizza: (req, res) => {
        // res.send(req.body);

        // Renomeando arquivo imagem
        let novoNome = req.body.nome.replace('', '-').toLowerCase() + '.jpg'
        // let novoNome = `${Date.now()}-${req.file.originalname}`
        fs.renameSync(req.file.path, `public/img/${novoNome}`);

        // Criar um objeto pizza
        let pizza = {
            nome: req.body.nome,
            ingredientes: req.body.ingredientes.split(',').map(e => e.trim()),
            preco: Number(req.body.preco),
            img: `/img/${novoNome}`,
            destaque: false,
            score: 0
        }

        // Salvar esse objeto no array de pizzas
        PizzasServices.adicionarPizza(pizza);

        // Redirecionar o usuário para a lista de pizzas
        res.redirect('/adm/pizzas'); //
    },
    showEditPizza: (req, res) => {
        // Capturar o id da pizza a ser editada
        let id = req.params.idDaPizza;
        
        // Encontrar a pizza a ser editada guardando na variável pizza
        const pizza = PizzasServices.carregarPizzas(id);

        // Renderizar a view (ainda inexistente) form-edit-pizza.ejs
        // Passando "pizza" para essa view
        res.render('form-edit-pizza.ejs', {pizza});

    }

}

module.exports = AdmController;