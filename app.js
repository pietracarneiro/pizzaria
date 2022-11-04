// 1 - Importar o express
const express = require('express');

// 2 - Criar o servidor ou aplicação -> basta executar a função express, a mesma retorna um servidor
const servidor = express();

// 3 - Definir rota neste servidor
// Endereço, método (get post put patch delete), função callback (a ação que o servidor vai realizar quando a req chegar)
servidor.get('/usuarios', (req, res)=>{
    console.log("chegou uma requisição!");
    return res.send("Permaneça em linha... Sua ligação é muito importante!");
});

// 4 - Por o servidor no modo "aguardando requisição"
servidor.listen(3000);