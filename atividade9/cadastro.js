let filmes = []
let posicao = 0
let editmode = false

function adicionar() {
    let inputs = document.getElementById("formulario").getElementsByTagName("input")
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }
    desblock();
    document.getElementById("nome").focus();
}

function exibirfilme(pfilme) {
    document.getElementById("nome").value = pfilme.nome;
    document.getElementById("ano").value = pfilme.ano;
    document.getElementById("genero").value = pfilme.genero;
    document.getElementById("diretor").value = pfilme.diretor;
    block();
}


function proximo() {
    if (posicao < filmes.length - 1) {
        posicao++;
        exibirfilme(filmes[posicao]);
    }
}

function anterior() {
    if (posicao > 0) {
        posicao--;
        exibirfilme(filmes[posicao]);
    }
}

function primeiro() {
    if (filmes.length > 0) {
        posicao = 0
        exibirfilme(filmes[posicao]);
    }
}

function ultimo() {
    if (filmes.length > 0) {
        posicao = filmes.length - 1;
        exibirfilme(filmes[posicao]);
    }
}

function excluir() {

    filmes.splice(posicao, 1);
    let inputs = document.getElementById("formulario").getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    desblock();
    document.getElementById("nome").focus();
}

function block() {
    let inputs = document.getElementById("formulario").getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }
    editmode = false
}

function desblock() {
    let inputs = document.getElementById("formulario").getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }
    document.getElementById("nome").focus();
}

function editar() {
    editmode = true
    desblock();
}

function salvar() {

    let filme = {
        nome: document.getElementById("nome").value,
        ano: Number(document.getElementById("ano").value),
        genero: document.getElementById("genero").value,
        diretor: document.getElementById("diretor").value
    }
    if (editmode == false) {
        filmes.push(filme);
        posicao = filmes.length - 1;
    } else {
        filmes[posicao] = filme
    }

    let inputs = document.getElementById("formulario").getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }
    exibirfilme(filmes[posicao]);

}

function cancelar() {
    block();
}