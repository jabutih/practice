document.addEventListener("DOMContentLoaded", function () {

    let iene = document.querySelector("#valorIene");
    let realDolar = document.querySelector("#valorRealDolar");
    let selecaoClicavel = document.querySelector("#clicavel");
    let selecaoMoedas = document.querySelector("#selecaoMoeda");
    let opcoesMoedas = document.querySelector("#opcoesMoedas");
    let opcaoUSD = document.querySelector("#opcaoUSD");

    setTimeout(function(){
        document.body.className="";
    },500);

    iene.addEventListener("focusout", formatarMoeda);
    realDolar.addEventListener("focusout", formatarMoeda);
    iene.addEventListener("focus", desformatarMoeda);
    realDolar.addEventListener("focus", desformatarMoeda);
    iene.addEventListener("keypress", validarNumero);
    realDolar.addEventListener("keypress", validarNumero);

    function validarNumero(e) {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            e.preventDefault();
        }
    }

    function formatarMoeda(e) {
        const input = e.target;
        let valor = input.value.replace(/\D/g, '');

        if (valor === '') {
            input.value = '';
            return;
        }

        const numero = parseFloat(valor) / 100;
        input.value = numero.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    function desformatarMoeda(e) {
        const input = e.target;
        input.value = input.value.replace(/\D/g, '');
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