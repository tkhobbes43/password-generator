// Assignment Code
let generateBtn = document.querySelector("#generate");



// arrays for each conditional variable
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~', "'",'"'];
let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
let allCharacters = [...numbers, ...symbols, ...upperCaseLetters, ...lowerCaseLetters]

// needed to randomize each criteria into an array
function randomize(array) {
  let index = Math.floor(Math.random() * array.length) 
  return array[index]
}

function generatePassword() {
 //setting variables for the prompts, this makes it so it shows them correctly as you use the application
  let numberOfCharacters = 0
  while(numberOfCharacters === 0 || numberOfCharacters < 8 || numberOfCharacters > 128) {
    numberOfCharacters = parseInt(prompt("How many characters would you like your password to contain?"));
  }
  let includeNumbers = confirm("Click OK to confirm including numbers.")
  let specialCharacters = confirm("Click OK to confirm including special characters.")
  let includeUppercase = confirm("Click OK to confirm including uppercase characters.");
  let includeLowercase = confirm("Click OK to confirm including lowercase characters.");
  let passwordCharacters = []
  let finalPassword = passwordCharacters.join('')
  for (let i=0; i < numberOfCharacters; i++) {
    if (includeNumbers) {
      passwordCharacters.push((numbers[i]))
    };
    if (specialCharacters) {
      passwordCharacters.push((symbols[i]))
    };
    if (includeUppercase) {
      passwordCharacters.push((upperCaseLetters[i]))
    };
    if (includeLowercase) {
      passwordCharacters.push((lowerCaseLetters[i]))
    };
    return finalPassword;
  };
  
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
