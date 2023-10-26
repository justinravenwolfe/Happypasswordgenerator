// Assignment Code
var upperCaseletters = "ABCDEFJGHIJKLMNOPQRSTUVWXYZ".split("")

var lowerCaseletters = "abcdefghijklmnopqrstuvwxyz".split("")

var numbers = "0123456789".split("")

var symbols = "!@#$%^&*()".split("")

console.log(upperCaseletters)
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("here")
  var passwordoptions = []
  var passwordLength = prompt("how long do you want your password to be")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("please choose an appropriate length for your password")
    return


  }
  var containsUppercase = confirm("would you like your password to contain uppercase letters")

  var containsLowercase = confirm("would you like your password to contain lowercase letters")

  var containsNumbers = confirm("would you like your password to contain numbers")

  var containsSymbols = confirm("would you like your password to contain symbols letters")

  if (containsUppercase === true) {
    passwordoptions = passwordoptions.concat(upperCaseletters)
  }

  if (containsLowercase === true) {
    passwordoptions = passwordoptions.concat(lowerCaseletters)
  }

  if (containsNumbers === true) {
    passwordoptions = passwordoptions.concat(numbers)
  }

  if (containsSymbols === true) {
    passwordoptions = passwordoptions.concat(symbols)
  }
console.log(passwordoptions)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
