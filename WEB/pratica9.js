const campo1 = document.querySelector("#valor1");
const campo2 = document.querySelector("#valor2");
const seletor = document.querySelector("#operacao");
const botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta");

botao.addEventListener("click", calcular);

function calcular() {
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);

    const operacao = seletor.value;

    if (operacao === "somar") {
        resposta.innerHTML = valor1 + valor2;
    }
    if (operacao === "subtrair") {
        resposta.innerHTML = valor1 - valor2;
    }
    if (operacao === "dividir") {
        resposta.innerHTML = valor1 / valor2;
    }
    if (operacao === "multiplicar") {
        resposta.innerHTML = valor1 * valor2;
    }

}