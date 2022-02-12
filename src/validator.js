

const validator = {
   
  isValid: 

  function (cardNumberString) { 
   console.log(cardNumberString, "string")
    let cardNumber = cardNumberString.split("")
    console.log(cardNumber, "array?")

    cardNumber.reverse();
    console.log (cardNumber, "inverteu?")
    let dobra = 0
    let sub = 0
    let total = 0

  for (let i = 0; i < cardNumber.length; i++) {
  
      if (i % 2 === 0) {
  
          total = total + cardNumber[i]
        //  console.log("entrou no if",i, cardNumber[i], "essa posição é impar" )
  
  
      } else {
          dobra = cardNumber[i] * 2;
        //  console.log("entrou no else",i, cardNumber[i], "essa posição é par", dobra )
          
          if (dobra > 9) {
              sub = dobra - 9
        //  console.log(" o dobro é maior que 9")
              total = total + sub
          }
  
          else {
              total = total + dobra
          
  
          } if (total % 10 === 0 ) { 
           
           return true;
           
    
          } else{ 
           

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
   return  `${first}${maskingCharacters}${last4}` ;
  }
   
  };
  

   export default validator;






    
  
    
  










    
    
    
   
   
  









//let multiplicaIndicesPares =  cardNumber.map(function (numero, indice) {
  //  if (indice % 2 === 0) {
  //    return numero * 2 ; 
 //   }
 //  
  
  //  })

//
//console.log(multiplicaIndicesPares)










//essa nao funcionou:
//function passandoPelosPares(cardNumber) {
  //for (var i = 0; i < 16; i++) {
    //  if ((i % 2) == 0) { i*2

                      
      //}
  //}
//}

//console.log(passandoPelosPares)












  

  //let multiplicaIndicesPares =  cardNumber.map(function (numero, indice) {
 //   if (indice % 2 === 0) {
 //     return numero * 2; 
 //   }
//   return numero;
 
//   })
//console.log(multiplicaIndicesPares)

 



 

// function maskify(infocard) {
 // return infocard.slice(0, -4).replace(/[0-9]/g, '#').concat(infocard.slice(-4, infocard.len));
//}
//console.log(maskify("12158663221")) 
//
