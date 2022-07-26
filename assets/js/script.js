// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// function reset() {
//   var numberChars = "0123456789";
//   var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var lowerChars = "abcdefghijklmnopqrstuvwxyz";
//   var specialChars = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//   var uppercase = confirm("Do you want capital letters?");
//   var lowercase = confirm("Do you want lower case letters?");
//   var number = confirm("Do you want numbers?");
//   var special = confirm("Do you want special characters?");
//   var allChars = ""
// }

function generatePassword() {
  var length = prompt("Select the length of your password between 8 to 128 alphanumeric characters.");
  console.log(length);

  if (isNaN(length)) {
    alert("Password length must be provided as a number");
    return null;
  }

  if (length < 8 || length > 128) {
    alert("You need to choose a larger number");
    generatePassword()
  } 

  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  var uppercase = confirm("Do you want capital letters?");
  var lowercase = confirm("Do you want lower case letters?");
  var number = confirm("Do you want numbers?");
  var special = confirm("Do you want special characters?");
  var allChars = ""

  if (special) allChars += specialChars;
  if (uppercase) allChars += upperChars;
  if (lowercase) allChars += lowerChars;
  if (number) allChars += numberChars;
  if (!special && !uppercase && !lowercase && !number) { 
      alert("Password needs to select at least one type of character");
      return null;
  };

  var PW = Array(length);

   for (let i=0; i<length; i++){
    const randomindex = Math.floor(Math.random() * allChars.length);
    PW[i]= allChars[randomindex];
   }

return PW.join("");
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // console.log("password===", password);
  // console.log("passwordText====", passwordText);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/* event listener is called a method, taking im 2 arguments, (click and write passowrk)
prompt give yous input
confirm gives you true or false

for loops
math.random
array 


WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/
