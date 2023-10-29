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
  //Start generating the password 
  //This hold password thus far
  var password = "";
  //This is the index variable
  var i = 0;
  //This is the flag variable for whether password satisfies or not 
  var current_grp = 0;
  //Our loop going through all the required characters within character length untill it is satified
  for(var i = 0; i < passwordLength; i++){
    //The current character
    var symbol = ""; 
    // 0<- Uppercase, 1<- Lowercase, 2<- Numbers, 3<- Symbols
    if(current_grp > 3)
    {
      current_grp = 0; 
    }
    if(current_grp == 0)
    {
      //Pick a random index in the list
      var index = Math.random(0, len(upperCaseletters));
      //Set the symbol variable equal to the character at that index
      symbol = upperCaseletters[index]; 
    } else if (current_grp == 1){
      //Pick a random index in the list
      var index = Math.random(0, len(lowerCaseletters));
      //Set the symbol variable equal to the character at that index
      symbol = lowerCaseletters[index]; 
    }else if (current_grp == 2){
       //Pick a random index in the list
      var index = Math.random(0, len(numbers));
       //Set the symbol variable equal to the character at that index
      symbol = numbers[index]; 
    }else if (current_grp == 3){
      //Pick a random index in the list
      var index = Math.random(0, len(symbols));
      //Set the symbol variable equal to the character at that index
      symbol = symbols[index]; 
    }
    password+=symbol; 
    current_grp++; 
  }

return password;
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
