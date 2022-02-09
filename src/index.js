import validator from './validator.js';

console.log(validator)



let botaoConfirma = document.getElementById("botao");


botaoConfirma.addEventListener("click", function () {
    let cardNumber = document.getElementById("numeroCartao").value;
    let resultado = validator.isValid(cardNumber)
    
    console.log("clicou!", cardNumber, resultado)

});

botaoConfirma.addEventListener("click", function () {
    
    if (document.getElementById("numeroCartao").value.length < 3) {
        alert('Por favor, preencha todos os campos');
        document.getElementById("numeroCartao").focus();

        return false


}});



