// Assignment Code
var generateBtn = document.querySelector("#generate");

//setting variables for the prompts, this makes it so it shows them correctly as you use the application
let numberOfCharacters = prompt("How many characters would you like your password to contain?");
let includeNumbers = prompt ("Click OK to confirm including numbers.")
let includeUppercase = prompt("Click OK to confirm including special characters.");
let includeLowercase = prompt("Click OK to confirm including lowercase characters.");

// arrays for each conditional variable
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];


// conditional statement for the different conditions
if (numberOfCharacters) {


} else if (includeNumbers) {


} else if (includeUppercase) {


}else if (includeLowercase) {

  
} else {


}

function generatePassword() {
  console.log("Hey! You clicked the button!");

// 1. prompt the user for the password criteria
//   a. password length 8 < 128
//   b. lowercase, uppercase, numbers, special characters
//      -if no on lowercase, but yes on uppercase, numbers, and special characters
//      -if no on uppercase, but yes on lowercase, numbers, and special characters
//      -if no on numbers, but yes on lowercase, uppercase, and special characters
//      -if no on special characters, but yes on lowercase, uppercase, and numbers
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


//const characterAmount = characterAmountNumber.value
//const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
//const includeUppercase = 
//const includeUppercase = 
//const includeNumbers = 
//const include Symbols = 
