const PizzasServices = require("../services/PizzasServices");

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

        // Criar um objeto pizza
        let pizza = {
            nome: req.body.nome,
            preco: Number(req.body.preco),
            ingredientes: req.body.ingredientes,
            img: req.img
        }

        // Salvar esse objeto no array de pizzas
        PizzasServices.adicionarPizza(pizza);

        // Redirecionar o usuário para a lista de pizzas
        res.redirect('/adm/pizzas'); //
    }

}

module.exports = AdmController;