// 1 - Importar o express
const express = require('express');
const path = require('path');
const bloqueiaForaDeHora = require('./middlewares/bloqueiaForaDeHora');
const registraRequisicao = require('./middlewares/registraRequisicao');
const router = require('./router');
const session = require('express-session');

// 2 - Criar o servidor ou aplicação -> basta executar a função express, a mesma retorna um servidor
const servidor = express();
servidor.set('view engine','ejs');

// Define a pasta public como a pasta de arquivos estáticos
servidor.use(session({
    secret: 'SEGREDO',
    resave: false,
    saveUninitialized: true
}))
servidor.use(express.static(path.join(__dirname, 'public')))
servidor.use(express.urlencoded({ extended: false }));

// Configurando middlewares
servidor.use(registraRequisicao)
// servidor.use(bloqueiaForaDeHora)

servidor.use(

    (req, res, next) => {
        if(req.session.admLogado){
            console.log("Administrador logado....");
        } else {
            console.log("Visita qualquer... ");
        }
        next();
    }

)

// 3 - Definir rota neste servidor
// Endereço, método (get post put patch delete), função callback (a ação que o servidor vai realizar quando a req chegar)
servidor.use(router);

// 4 - Por o servidor no modo "aguardando requisição"
servidor.listen(3001);