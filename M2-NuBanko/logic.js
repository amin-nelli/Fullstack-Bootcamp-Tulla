class conta {
    constructor(nome, saldo, pix) {
        this.nome = nome;
        this.saldo = saldo;
        this.pix = pix;
    }
}
var contas = [];
var contaAtual = 0;
var visibilidade = true;
contas.push(new conta("Amin", 1000, "amin@gmail.com"));
contas.push(new conta("Renan", 1000, "renan@gmail.com"));
contas.push(new conta("Ricardo", 1000, "ricardo@gmail.com"));
contas.push(new conta("Nick", 1000, "nick@gmail.com"));

function atualizaTela() {
    var name_Acount = document.querySelector(".name-acount");
    name_Acount.innerHTML = '<h2>Olá, ' + contas[contaAtual].nome + '</h2>';
}
function mostrarDinheiro() {
    telaDinheiro = document.querySelector(".tela-olho");
    if (visibilidade == true) {
        telaDinheiro.innerHTML = '<span class="material-symbols-outlined" > visibility </span >';
        visibilidade = false;
    } else {
        telaDinheiro.innerHTML = '<span class="material-symbols-outlined" > visibility_off </span >';
        visibilidade = true;
    }
}
function vaiContas() {
    var home = document.querySelector(".home");
    var contas = document.querySelector(".contas");

    atualizaContas();

    home.style.display = "none";
    contas.style.display = "block";
}
function vaiHome() {
    var home = document.querySelector(".home");
    var contas = document.querySelector(".contas");
    home.style.display = "block";
    contas.style.display = "none";
}
function atualizaContas() {
    var conta = document.querySelector(".container-profile");
    conta.innerHTML = "";
    contas.forEach((item, indice) => {
        
        var htmlContent = `
            <div class="card">
                <a href="#" onclick="selecionarConta(${indice})"><span class="material-symbols-outlined">
                    arrow_back_ios
                </span></a> ${item.nome} </a>
            </div>
        `
        conta.innerHTML += htmlContent;
    });
}
function selecionarConta(id) {
    contaAtual = id;

    atualizaTela()
    vaiHome();
}

atualizaTela();
mostrarDinheiro(false);
