// OBJETIVO: mostrar alerta caso o campo de nome
// seja abandonado sem ser preenchido

// 1 - Representar/capturar o campo "nome" p o mundo JS
let inputNome = document.getElementById("nome");

// 2 - Associar uma ação a ser realizada ao evento
//     "deixou o campo"
inputNome.addEventListener('blur', verificaSeCampoDigitado)

// 3 - Definir a ação (função) que será executada...
// let div = document.createElement("div");
// div.innerHTML = "Texto adicionado dinamicamente..."
// document.body.appendChild(div);

function verificaSeCampoDigitado() {
    if(inputNome.value == '') {
        alert("Preencha o campo");
    }
}