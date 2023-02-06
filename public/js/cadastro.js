// Captura de elemetos de interesse ===========
const inputCep = document.querySelector('#cep');



// ==============================================
//  Funções que lidam com os eventos: handlers
function onInputCepKeyup() {
    // Verificar se a quantidade de caracteres digitos no campo == 9
    if(inputCep.value.length === 9) {
        carregaInfoDoCepAsync(inputCep.value);
    }

    // Se sim: carregaInfoDoCep(cep)
    // Se não
}

function imprimirResultado(resultado) {
    console.log(resultado);
}

//  =============================================
function carregaInfoDoCep(cep){
    // o fecth dispara uma requisição para o endereço que for passado
    // carrega a info de uma url remota
    let url = `https://viacep.com.br/ws/08373340/json/`;
    let promessaDeResponse = fetch(url);

    promessaDeResponse.then(
        (response) => {
            let promessaDeResultado = response.json();
            promessaDeResultado.then(imprimirResultado);
            console.log(promessaDeResultado);
        }
    )
}

async function carregaInfoDoCepAsync(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let response = await fetch(url);
    let resultado = await response.json();
    console.log(resultado);
}

// Criem no html os campos
// Rua, Bairro, Cidade, Estado (SELECT)
// Valorem esses campos com as informações do resultado






//  =============================================
// Associação de eventos e handlers
inputCep.addEventListener('keyup', onInputCepKeyup);

