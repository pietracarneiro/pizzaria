const usuarios = require('../databases/usuarios.json');
const fs = require('fs');
const bcrypt = require('bcrypt');

function listar(){
    console.table(usuarios.map(
        u => {
            return {
                id: u.id,
                nome: u.nome,
                email: u.email
            }
        }
    ));
}

function salvar(arrayDeUsuarios){  
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4)); // ***Salvando o ARRAY DE USUARIOS no arquivo 
}

function cadastrar(objeto){
    let senhaCriptografada = bcrypt.hashSync(objeto.senha, 10);
    let novoId = usuarios[usuarios.length - 1].id + 1; 
    
    let usuario = {
        id: novoId,
        nome: objeto.nome,
        email: objeto.email,
        senha: senhaCriptografada,
        enderecos: [objeto.endereco],
        formasDePagamento: [objeto.formasDePagamento]

    }

    usuarios.push(usuario);

    salvar(usuarios);
}

function detalhar(idUsuario){
    let usuario = usuarios.find(u => u.id == idUsuario);
    console.log("\n" + "Nome:" + usuario.nome + "\n \n" + "E-mail:" + usuario.email + "\n");
    console.log("Endereços" + "\n");
    console.table(usuario.enderecos); 
    console.log("Formas de Pagamento" + "\n");
    console.table(usuario.formasDePagamento);    
}

function remover(idDoUsuarioParaRemover){
    let usuarioPosicao = usuarios.findIndex(u => u.id == idDoUsuarioParaRemover);
    
    // console.log(usuarioPosicao);
   
    let remove = usuarios.splice(usuarioPosicao, 1);

    // console.log(usuarios);

    salvar(usuarios);

}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;