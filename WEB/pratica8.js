let botao = document.querySelector("#botao");
botao.style.background="red";
let quebrou = false;

botao.addEventListener("mouseout", e => {
    if(!quebrou) {
        botao.style.background="red";
    }
})

botao.addEventListener("mouseover", e => {
    if(!quebrou) {
        botao.style.background="blue";
    }
})

botao.addEventListener("click", e => {
    botao.style.background="yellow";
    botao.innerHTML="Quebrei";
    quebrou = true;
})