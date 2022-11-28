const UsuariosServices = require('../services/UsuariosServices');

UsuariosServices.listar();

let usuarioDeTeste = {
    nome:"Rafael Silva",
    email: "rafinha@silva.com",
    senha: "1234567",
    endereco: "Rua itú, 99. SBC",
    formasDePagamento: "1234 3434 2534 8736"
}

// UsuariosServices.cadastrar(usuarioDeTeste);
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

// UsuariosServices.alteraEndereco(0, enderecoAlteradoTeste, 123);

let novaFormaDePagamentoTeste = "1234 4567 8989 5456";

// UsuariosServices.addFormaDePagamento(novaFormaDePagamentoTeste, 2);

// UsuariosServices.removerFormaDePagamento(1, 2);

let formaDePagamentoAlteradoTeste = "9876 6543 3210 0123";

// UsuariosServices.alterarFormaDePagamento(formaDePagamentoAlteradoTeste, 2, 2);
