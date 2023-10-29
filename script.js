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
  var passwordLength = prompt("how long do you want your password to be");
  //Array contains all options for Password creation characters
  var passwordoptions = []; 
  //Check for whether the password has incorrect length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("please choose an appropriate length for your password");
    return

  }
  //Laying out the requirements for passwords
  var containsNumbers = confirm("would you like your password to contain numbers"); //True

  var containsSymbols = confirm("would you like your password to contain symbols letters"); //True
  var containsUppercase = confirm("would you like your password to contain uppercase letters"); //True

  var containsLowercase = confirm("would you like your password to contain lowercase letters"); //True

  

  if (containsUppercase === true) {
    //Add uppercase characters as a possibility for generating password
    passwordoptions = passwordoptions.concat(upperCaseletters);
    console.log("With Uppercase " + passwordoptions);


  
  }

  if (containsLowercase === true) {
    //Add lowercase characters as a possibility for generating password
    passwordoptions = passwordoptions.concat(lowerCaseletters);
    console.log("With Lowercase " + passwordoptions);
  }

  if (containsNumbers === true) {
    //Add uppercase numbers as a possibility for generating password
    passwordoptions = passwordoptions.concat(numbers);
    console.log("With Numbers " + passwordoptions);
  }

  if (containsSymbols === true) {
    //Add symbols characters as a possibility for generating password
    passwordoptions = passwordoptions.concat(symbols);
    console.log("Contains Symbols " + passwordoptions);
  }
console.log(passwordoptions);
}


// Write password to the #password input
function writePassword() {
  //Generate the password
  var password = generatePassword();
  console.log("Password " + password);
  //Going back to HTML and outputting password onto screen
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
