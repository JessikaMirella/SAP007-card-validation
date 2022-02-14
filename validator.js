

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
            //guardando os impares
   
       } else {
           dobra = cardNumber[i] * 2;
          console.log("entrou no else",i, cardNumber[i], "essa posição é par", dobra )
         
           //ATENÇAO
           if (dobra > 9) {
               sub = dobra - 9
              //  console.log(" o dobro é maior que 9")
               total = total + sub
           }
   
           else {
               total = total + dobra + sub
           
   
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






 
  










    
    
    
   
   
  































  

  

 



 
