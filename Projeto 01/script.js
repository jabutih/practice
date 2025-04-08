document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function(){
        document.body.className="";
    },500);

    let iene = document.querySelector("#valorIene");
    let realDolar = document.querySelector("#valorRealDolar");
    let selecaoClicavel = document.querySelector("#clicavel");
    let selecaoMoedas = document.querySelector("#selecaoMoeda");
    let opcoesMoedas = document.querySelector("#opcoesMoedas");
    let opcaoUSD = document.querySelector("#opcaoUSD");

    const ieneRealC = 0.037;
    const realIeneC = 27;

    iene.addEventListener("input", rConverterReal);
    realDolar.addEventListener("input", rConverterIene);

    function rConverterReal() {
        const valorIene = parseFloat(iene.value) || 0;
        document.getElementById("valorRealDolar").value = (valorIene * ieneRealC / 100).toFixed(2);
    }
    function rConverterIene() {
        const valorRealDolar = parseFloat(realDolar.value) || 0;
        document.getElementById("valorIene").value = (valorRealDolar * realIeneC / 100).toFixed(2);
    }

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
            input.value = '0.00';
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
                opcoesMoedas.classList.add("active");
                selecaoMoedas.classList.add("active");
        }
        else if (opcoesMoedas.className === "active") {
                opcoesMoedas.classList.remove("active");
                selecaoMoedas.classList.remove("active");
        }
    })

    opcaoUSD.addEventListener("mouseover", () => {
        opcaoUSD.classList.add("hover");
    })

    opcaoUSD.addEventListener("mouseout", () => {
        opcaoUSD.classList.remove("hover");
    })

    /*

    let selecaoEUA = document.querySelector("#selecaoEUA");
    let imagemMoedaBrasil = document.querySelector("#imagemMoedaBrasil")
    let imagemMoedaEUA = document.querySelector("#imagemMoedaEUA");
    let nomesMoedas = document.querySelector(".nomesMoedas");
    let emUSD = false;

    selecaoEUA.addEventListener("click", mudarMoeda)

    function mudarMoeda() {
        if (emUSD !== true) {
            imagemMoedaBrasil.src="united-states.svg";
            imagemMoedaEUA.src="brazil.svg";
            nomesMoedas.innerHTML="BRL";
            emUSD = true
        }
        else if (emUSD === true) {
            imagemMoedaBrasil.src="brazil.svg";
            imagemMoedaEUA.src="united-states.svg";
            nomesMoedas.innerHTML="USD";
            emUSD = false;
        }
    }

    const ieneDolarC = 0.0068;
    const dolarIeneC = 146.99;

    while (emUSD === true) {
        iene.addEventListener("input", dConverterDolar);
        realDolar.addEventListener("input", dConverterIene);

        function dConverterDolar() {
            const valorIene = parseFloat(iene.value) || 0;
            document.getElementById("valorRealDolar").value = (valorIene * ieneDolarC / 100).toFixed(2);
        }
        function dConverterIene() {
            const valorRealDolar = parseFloat(realDolar.value) || 0;
            document.getElementById("valorIene").value = (valorRealDolar * dolarIeneC / 100).toFixed(2);
        }
    }

    */

})