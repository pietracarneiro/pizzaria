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
    let usuarioPosicao = usuarios.findIndex(u => u.id == idDoUsuarioParaRemover); // gerando o index/posição a partir do id do usuário a ser removido
    
    // console.log(usuarioPosicao);
   
    let remove = usuarios.splice(usuarioPosicao, 1); // removendo o usuário da posição encontrada a partir do id passado como parâmetro

    // console.log(usuarios);

    salvar(usuarios); // salvando e sobrescrevendo o array atualizando no arquivo de usuarios.json

}

function alterar(novosDados, idUsuario){
    let senhaCriptografada = bcrypt.hashSync(novosDados.senha, 10);
    let usuarioPosicao = usuarios.findIndex(u => u.id == idUsuario);
    
    let novoUsuario = {
        id: usuarios[usuarioPosicao].id,
        nome: novosDados.nome,
        email: novosDados.email,
        senha: senhaCriptografada,
        enderecos: usuarios[usuarioPosicao].enderecos,
        formasDePagamento: usuarios[usuarioPosicao].formasDePagamento
    }
    
    if(usuarioPosicao !== -1) {
        usuarios[usuarioPosicao] = novoUsuario;
    }    
    
    salvar(usuarios); // salvando e sobrescrevendo o array atualizando no arquivo de usuarios.json

}

function addEndereco(novoEndereco, idUsuario){
    let usuarioPosicao = usuarios.findIndex(u => u.id == idUsuario); // gerando o index/posição a partir do id do usuário a ser removido
    
    let adicionandoEndereco = usuarios[usuarioPosicao].enderecos.push(novoEndereco);
    
    salvar(usuarios); // salvando e sobrescrevendo o array atualizando no arquivo de usuarios.json
    
}

function removerEndereco(posicaoDoEndereco, idUsuario){
    let usuarioPosicao = usuarios.findIndex(u => u.id == idUsuario); // gerando o index/posição a partir do id do usuário a ter o endereço removido
    
    let remover = usuarios[usuarioPosicao].enderecos.splice(posicaoDoEndereco, 1); // removendo o usuário da posição encontrada a partir do id passado como parâmetro
    
    salvar(usuarios); // salvando e sobrescrevendo o array atualizando no arquivo de usuarios.json

}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
    let usuarioPosicao = usuarios.findIndex(u => u.id == idUsuario); // gerando o index/posição a partir do id do usuário a ter o endereço alterado
    
    let enderecoPosicao = usuarios[usuarioPosicao].enderecos[posicaoDoEndereco]; // atribuindo a posição do array de endereço a uma variável
    
    if(enderecoPosicao !== -1) {
        usuarios[usuarioPosicao].enderecos[posicaoDoEndereco] = novoEndereco;
    }

    salvar(usuarios); // salvando e sobrescrevendo o array atualizando no arquivo de usuarios.json

}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    let usuarioPosicao = usuarios.findIndex(u => u.id == idUsuario); // gerando o index/posição a partir do id do usuário a ter uma nova forma de pagamento a ser adicionada
    
    let adicionandoFormaDePagamento = usuarios[usuarioPosicao].formasDePagamento.push(novaFormaDePagamento);

    salvar(usuarios); // salvando e sobrescrevendo o array atualizando no arquivo de usuarios.json
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    let usuarioPosicao = usuarios.findIndex(u => u.id == idUsuario); // gerando o index/posição a partir do id do usuário a ter forma de pagamento removido
    
    let remover = usuarios[usuarioPosicao].formasDePagamento.splice(posicaoDaFormaDePagamento, 1);

    salvar(usuarios); // salvando e sobrescrevendo o array atualizando no arquivo de usuarios.json
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    let usuarioPosicao = usuarios.findIndex(u => u.id == idUsuario); // gerando o index/posição a partir do id do usuário a ter a forma de pagamento a ser alterado
    
    let formaDePagamentoPosicao = usuarios[usuarioPosicao].formasDePagamento[posicaoDaFormaDePagamento]; // atribuindo a posição do array de forma de pagamentos a uma variável
    
    if(formaDePagamentoPosicao !== -1) {
        usuarios[usuarioPosicao].formasDePagamento[posicaoDaFormaDePagamento] = novaFormaDePagamento;
    }

    salvar(usuarios); // salvando e sobrescrevendo o array atualizando no arquivo de usuarios.json
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