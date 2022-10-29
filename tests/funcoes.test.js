const UsuariosServices = require('../services/UsuariosServices');

// UsuarioServices.listar();

let usuarioDeTeste = {
    nome:"Rafael Silva",
    email: "rafinha@silva.com",
    senha: "1234567",
    endereco: "Rua itú, 99. SBC",
    formasDePagamento: "1234 3434 2534 8736"
}

// UsuarioServices.cadastrar(usuarioDeTeste);
// UsuariosServices.detalhar(2);
// UsuariosServices.remover(4);

let novoUsuarioDeTeste = {
    nome: "Rafinha Barbosa",
    email: "rafael@barbosa.com",
    senha: "19990119"
}

// UsuariosServices.alterar(novoUsuarioDeTeste, 2);

let novoEnderecoTeste = "Rua Avaré, 55. SBC";

// UsuariosServices.addEndereco(novoEnderecoTeste, 2);

// UsuariosServices.removerEndereco(3, 2);

let enderecoAlteradoTeste = "Rua do Raul, 91. SBC";

UsuariosServices.alteraEndereco(0, enderecoAlteradoTeste, 123);
