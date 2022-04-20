// Assignment Code
var generateBtn = document.querySelector("#generate");


let numbers = ["0123456789"];
let symbols = ["!@#$%^&'*()_+~`|}{[]|:;?><,./-='"];
let upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let lowerCaseLetters = ["abcdefghjklmnopqrstuvwxyz"];

const characterAmount = characterAmountNumber.value
const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
const includeUppercase = includeUppercase
const includeUppercase = 
const includeNumbers = 
const include Symbols = 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)