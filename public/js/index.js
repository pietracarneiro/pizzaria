// FORMAS DE SELECIONAR ELEMENTOS DA PÁGINA
let campoDeBusca = document.getElementById("campo-de-busca");
console.log(campoDeBusca);
 
/**
 *  querySelector:
 *  document.querySelector("#seletor .css");
 */

let btBuscar = document.querySelector(".btBuscar");
console.log(btBuscar);

// Capturar o elemento main (pai de todos os articles)
let main = document.querySelector("main");
// main.style.backgroundColor = "red";
// console.log(main);

let pizzasCardapio = [
    {
        "id": 1,
        "nome": "Calabresa",
        "ingredientes": [
            "mussarela",
            "calabresa",
            "cebola"
        ],
        "preco": 38.5,
        "img": "/img/calabresa.jpg",
        "destaque": true,
        "score": 27
    },
    {
        "id": 2,
        "nome": "Pepperoni",
        "ingredientes": [
            "mussarela",
            "pepperoni",
            "cebola"
        ],
        "preco": 48.55,
        "img": "/img/pepperoni.jpg",
        "destaque": false,
        "score": 24
    },
    {
        "id": 3,
        "nome": "Fracatu",
        "ingredientes": [
            "mussarela",
            "frango",
            "catupiry",
            "cebola"
        ],
        "preco": 38.5,
        "img": "/img/fracatu.jpg",
        "destaque": true,
        "score": 12
    },
    {
        "id": 4,
        "nome": "Marguerita",
        "ingredientes": [
            "mussarela",
            "tomate",
            "manjericão"
        ],
        "preco": 33.5,
        "img": "/img/marguerita.jpg",
        "destaque": false,
        "score": 3
    },
    {
        "id": 5,
        "nome": "Quatro Queijos",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    },
    {
        "id": 6,
        "nome": "Portuguesa",
        "ingredientes": [
            "cebola",
            "pimentão",
            "ovo",
            "mussarela",
            "presunto"
        ],
        "preco": 40.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    },
    {
        "id": 7,
        "nome": "Quatro Queijos",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    },
    {
        "id": 8,
        "nome": "Caipira",
        "ingredientes": [
            "mussarela",
            "milho verde",
            "frango"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 2
    },
    {
        "id": 9,
        "nome": "Napolitana",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 55.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 1
    },
    {
        "id": 10,
        "nome": "Baiana",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 1
    },
    {
        "id": 11,
        "nome": "Meat & Bacon",
        "ingredientes": [
            "mussarela",
            "calabresa",
            "bacon"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true
    },
    {
        "id": 12,
        "nome": "Rúcula",
        "ingredientes": [
            "mussarela",
            "rúcula",
            "tomate seco"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 1
    },
    {
        "id": 13,
        "nome": "Dezoito Queijos",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    }
]

// // CRIAR UM ELEMENTO E ADICIONAR AO FINAL DA MAIN
// let pizzaDePepperoni = {

//     "id": 2,
//     "nome": "Pepperoni",
//     "ingredientes": [
//         "mussarela",
//         "pepperoni",
//         "cebola"
//     ],
//     "preco": 48.55,
//     "img": "/img/pepperoni.jpg",
//     "destaque": false,
//     "score": 24


// }

// FUNÇÕES QUE MANIPULAM A DOM - - - - - - - -
function showPizza(pizza) {
    let article = document.createElement("article");

    article.innerHTML = `
        <img src="${pizza.img}" alt="Pizza de ${pizza.nome}">
        <h2>${pizza.nome}</h2>
        <span>R$ ${pizza.preco}</span>
        <a href="${pizza.id}">Ver mais</a>
        <button>Add+</button>
    `;
    
    main.appendChild(article);
}

function showPizzas(pizzas){
    
    // Forma 1: Elegante, linda e gatinha
    pizzas.forEach(showPizza); // função forEach recebe uma função como parametro

    // // Forma 2: Bonitinha
    // for (const pizza of pizzas) {
    //     showPizza(pizza);
    // }

    // // Forma 3: Feia
    // for (let i = 0; i < pizzas.length; i++) {
    //     showPizza(pizzas[i]);
    // }
}

showPizzas(pizzasCardapio);

function onCampoDeBuscaKeyup(){
    console.log(campoDeBusca.value)
}

// abaixo um modo de documentar funções no VSCODE
/**
 * 
 * @param pizzas: Um array de pizzas
 * @param trechoBuscado : Uma string com um trecho
 * 
 * @returns pizzasFiltradas: As pizzas que possuem o
 * trechoBuscado no seu nome
 */
// FUNÇÕES AUXILIARES -------------------------
function filtrarPizzas(pizzas, trechoBuscado){
    let pizzasFiltradas = pizzas.filter(
        pizza => pizza.nome.toUpperCase().includes(trechoBuscado.toUpperCase())
    );
    return pizzasFiltradas;
}    

// console.log(filtrarPizzas(pizzasCardapio, 'ca'));


// Associoando a execução de uma função a um evento
campoDeBusca.addEventListener(
    'keyup', //evento
    onCampoDeBuscaKeyup); // função que vai ser executada quando acontecer esse evento