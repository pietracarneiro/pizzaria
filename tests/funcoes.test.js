const UsuariosServices = require('../services/UsuariosServices');

//UsuarioServices.listar();


let usuarioDeTeste = {
    nome:"Rafael Silva",
    email: "rafinha@silva.com",
    senha: "1234567",
    endereco: "Rua itú, 99. SBC",
    formasDePagamento: "1234 3434 2534 8736"
}

//UsuarioServices.cadastrar(usuarioDeTeste);


UsuariosServices.detalhar(2);

// UsuariosServices.remover(4);

