

const validator = {
  
  isValid: function (cardNumberString) {
    
    let cardNumber = cardNumberString.split('').reverse();  // split = tranforma string em array 
    let soma = 0; 
    
    for (let i = 0; i < cardNumber.length; i++) {
      if (i % 2 === 1) {
        const dobro = cardNumber[i] * 2;
        if (dobro > 9) {
          soma = soma + (dobro - 9);
        }
        else {
          soma = soma + dobro;
        }
      }
      else {
        soma = soma + parseInt(cardNumber[i]); // transforma em numero porque é soma 
      }
    }
    
    if (soma % 10 === 0) {
      return true;
    }
    else {
      return false;
    }
  
  },

  maskify:

    function (cardNumber) {

      if (cardNumber.length < 6) return cardNumber;
      let last4 = cardNumber.substr(-4);
      let first = cardNumber.substr(0, 0);
      let maskingCharacters = cardNumber.substr(1, cardNumber.length - 5).replace(/\d/g, '#');
      return `${first}${maskingCharacters}${last4}`;
     }};

  


export default validator;
































































