let iene = document.querySelector("#valorIene");
let realDolar = document.querySelector("#valorRealDolar");
let selecaoClicavel = document.querySelector("#clicavel");
let selecaoMoedas = document.querySelector("#selecaoMoeda");
let opcoesMoedas = document.querySelector("#opcoesMoedas");
let opcaoUSD = document.querySelector("#opcaoUSD");

setTimeout(function(){
    document.body.className="";
},500);

function isNumberKey(evt) {
    if (evt.ctrlKey && (evt.key === 'a' || evt.key === 'A')) {
        return true;
    }
    let charCode = (evt.which) ? evt.which : evt.keyCode
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

selecaoClicavel.addEventListener("click", () => {
    if (opcoesMoedas.className === "") {
        selecaoClicavel.addEventListener("click", () => {
            opcoesMoedas.classList.add("active");
            selecaoMoedas.classList.add("active");
        })
    }
    if (opcoesMoedas.className === "active") {
        selecaoClicavel.addEventListener("click", () => {
            opcoesMoedas.classList.remove("active");
            selecaoMoedas.classList.remove("active");
        })
    }
})

opcaoUSD.addEventListener("mouseover", () => {
    opcaoUSD.classList.add("hover");
})

opcaoUSD.addEventListener("mouseout", () => {
    opcaoUSD.classList.remove("hover");
})

/*
    let ienes = document.querySelector('#Iene');
    let reais = document.querySelector('#Real');
    let ieneR = 0.04;
    let realI = 25;

    ienes.addEventListener("input", converterReal);
    reais.addEventListener("input", converterIene);

    function converterReal() {
        const valor1 = parseFloat(ienes.value);
        document.getElementById("Real").value = (valor1 * ieneR).toFixed(2);
    }
    function converterIene() {
        const valor2 = parseFloat(reais.value);
        document.getElementById("Iene").value = (valor2 * realI).toFixed(2);
    }
*/