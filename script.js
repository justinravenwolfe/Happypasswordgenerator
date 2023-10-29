// Assignment Code
//Creating an array of uppercase letters that can be used
var upperCaseletters = "ABCDEFJGHIJKLMNOPQRSTUVWXYZ".split("");
//Creating a list of lowercase letters
var lowerCaseletters = "abcdefghijklmnopqrstuvwxyz".split("");
//All possible numbers
var numbers = "0123456789".split("");
//All the possible symbols
var symbols = "!@#$%^&*()".split("");

console.log(upperCaseletters);
//Loading in an HTML elemenent so an action can be attatched to it
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("here");
  var passwordLength = prompt("how long do you want your password to be");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("please choose an appropriate length for your password");
    return

  }
  var containsNumbers = confirm("would you like your password to contain numbers");

  var containsSymbols = confirm("would you like your password to contain symbols letters");
  
  var containsUppercase = confirm("would you like your password to contain uppercase letters");

  var containsLowercase = confirm("would you like your password to contain lowercase letters");

  

  if (containsUppercase === true) {
    passwordoptions = passwordoptions.concat(upperCaseletters);
  }

  if (containsLowercase === true) {
    passwordoptions = passwordoptions.concat(lowerCaseletters);
  }

  if (containsNumbers === true) {
    passwordoptions = passwordoptions.concat(numbers);
  }

  if (containsSymbols === true) {
    passwordoptions = passwordoptions.concat(symbols);
  }
console.log(passwordoptions);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
