// 1 - Importar o express
const express = require('express');
const path = require('path');

// 2 - Criar o servidor ou aplicação -> basta executar a função express, a mesma retorna um servidor
const servidor = express();

// Define a pasta public como a pasta de arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')))

// 3 - Definir rota neste servidor
// Endereço, método (get post put patch delete), função callback (a ação que o servidor vai realizar quando a req chegar)
servidor.get('/', (req, res)=>{
    return res.sendFile(__dirname + "/views/index.html");
});

servidor.get('/carrinho', (req, res)=>{
    return res.sendFile(__dirname + "/views/carrinho.html");
});

servidor.get('/perfil', (req, res)=>{
    return res.sendFile(__dirname + "/views/perfil.html")
});

// 4 - Por o servidor no modo "aguardando requisição"
servidor.listen(3000);