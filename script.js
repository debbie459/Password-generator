//the app shuld generate two random passwords whenever the generate passwords button is clicked

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButton = document.getElementById("generate-button");
let buttonOne = document.getElementById("button-1");
let buttonTwo = document.getElementById("button-2");

generateButton.addEventListener("click", function(){
     //this is an alternative to the line of code above
     // function generatePassword(){
//     console.log("you clicked this button");
// }


     // you have to first initialize the variable that will contain the total charcters to make the password
     let firstCompletePassword = ""
     //this is a loop that runs 15 times, all the while generating random characters 15 times
     for (i=0; i<15; i++){
          
          //this stores the random numbers generated using the Math.random() in a variable called firstPassword
          let firstPassword = Math.floor(Math.random() * characters.length);
          //console.log(characters[firstPassword])
          //this gives passes the random number generated into the charcter array, and then brings out the equivalent character
          let actualPassword = characters[firstPassword]
          console.log(actualPassword)
          //this variable then sums the total character generated and makes it a complete string
          firstCompletePassword += actualPassword
          
     }
     console.log(firstCompletePassword)
     //this passes the string of password into the button 1 so the user can see it
     buttonOne.textContent = firstCompletePassword

     
     let secondCompletePassword = ""
     for (i=0; i<15; i++){
          
          let secondPassword = Math.floor(Math.random() * characters.length);
          //console.log(characters[firstPassword])
          let secondActualPassword = characters[secondPassword]
          console.log(secondActualPassword)
          secondCompletePassword += secondActualPassword
          
     }
     console.log(secondCompletePassword)
     buttonTwo.textContent = secondCompletePassword



})
    
