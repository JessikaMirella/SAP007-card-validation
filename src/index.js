import validator from './validator.js';

console.log(validator)




let botaoConfirma = document.getElementById("botao");

botaoConfirma.addEventListener("click", function (event) {
    event.preventDefault()

    let cardNumber = document.getElementById("numeroCartao").value;
    let resultado = validator.isValid(cardNumber);
    let mascara = validator.maskify(cardNumber);



    if (document.getElementById("numeroCartao").value.length < 3) {

        document.getElementById("validacao").textContent = "Preencha todos os campos!";

    }
    else if (resultado === true) {
        document.getElementById("validacao").textContent = mascara + "\n\nCartão Válido!";

    } else {

        document.getElementById("validacao").textContent = "Cartão Inválido ou Inexistente!";
    }

});





