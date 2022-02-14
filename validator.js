

const validator = {

  isValid:

    function (cardNumberString) {
      console.log(cardNumberString, "string")
      let cardNumber = cardNumberString.split("")
      console.log(cardNumber, "array?")

      cardNumber.reverse();
      console.log(cardNumber, "inverteu?")
      let dobra = 0
      let sub = 0
      let total = 0

      for (let i = 0; i < cardNumber.length; i++) {

        if (i % 2 === 0) {

          total = total + cardNumber[i]

        } else {
          dobra = cardNumber[i] * 2;

          if (dobra > 9) {
            sub = dobra - 9

            total = total + sub
          }

          else {

            total = total + dobra + sub


          } if (total % 10 === 0) {

            return true;


          } else {


            return false;

          }


        }
      }
    },

  maskify:

    function (cardNumber) {

      if (cardNumber.length < 6) return cardNumber;
      let last4 = cardNumber.substr(-4);
      let first = cardNumber.substr(0, 0);
      let maskingCharacters = cardNumber.substr(1, cardNumber.length - 5).replace(/\d/g, '#');
      return `${first}${maskingCharacters}${last4}`;
    }

};


export default validator;
































































