// Assignment Code
var generateBtn = document.querySelector("#generate");

//setting variables for the prompts
let numberOfCharacters = prompt("How many characters would you like your password to contain?");
let includeNumbers = prompt ("Click OK to confirm including numbers.")
let includeUppercase = prompt("Click OK to confirm including special characters.");
let includeLowercase = prompt("Click OK to confirm including lowercase characters.");


function generatePassword() {
  console.log("Hey! You clicked the button!");

// 1. prompt the user for the password criteria
//   a. password length 8 < 128
//   b. lowercase, uppercase, numbers, special characters
// 2. validate the input
// 3. generate password based on criteria

// 4. display the generated password on the page
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// What i've added to the code so far 
//let numbers = ["0123456789"];
//let symbols = ["!@#$%^&*()_+~`|}{[]|:;?><,./-='"];
//let upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
//let lowerCaseLetters = ["abcdefghjklmnopqrstuvwxyz"];

//const characterAmount = characterAmountNumber.value
//const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
//const includeUppercase = 
//const includeUppercase = 
//const includeNumbers = 
//const include Symbols = 

// What the prompts need to say

//"How many characters would you like your password to contain?"
//"Click OK to confirm including special characters."
//"Click OK to confirm including numbers."
//"Click OK to confirm including lowercase characters."
//"Click OK to confirm including uppercase characters."