// Assignment Code
var generateBtn = document.querySelector("#generate");

//setting variables for the prompts, this makes it so it shows them correctly as you use the application
let numberOfCharacters = 0
while(numberOfCharacters === 0 || numberOfCharacters < 8 || numberOfCharacters > 128) {
  numberOfCharacters = parseInt(prompt("How many characters would you like your password to contain?"));
}
let includeNumbers = confirm("Click OK to confirm including numbers.")
let specialCharacters = confirm("Click OK to confirm including special characters.")
let includeUppercase = confirm("Click OK to confirm including uppercase characters.");
let includeLowercase = confirm("Click OK to confirm including lowercase characters.");

// arrays for each conditional variable
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~', "'",'"'];
let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var allCharacters = [...numbers, ...symbols, ...upperCaseLetters, ...lowerCaseLetters]

console.log(allCharacters);
const password = generatePassword(numberOfCharacters, includeUppercase, includeNumbers, specialCharacters)
// const includeUppercase = 
// const includeUppercase = 
// const includeNumbers = 
// const include Symbols = 


function randomize(array) {
  let index = Math.floor(Math.random() * array.length) 
  return array[index]
}

function generatePassword(passwordlength) {
  var passwordCharacters = []
  if (includeNumbers) {
  passwordCharacters.push(randomize(numbers))
  }
  console.log(passwordCharacters)

  
  
  
  // for (var i=0; i<passwordlength; i++);
  // (Math.floor(Math.random))

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
