// Assignment Code, part of the starter code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input, part of the starter code
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// strings for all characters you can  use for the password, based on each conditional variable
var numbers = "0123456789";
var symbols = "!@#$%^&*()+-.~|<>=-_/:;?[]{}~'";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";  


function generatePassword() {
 //want to have all the most of the work done here inside this function, like executing the prompt and confirms, then if user whats that condition, what that does to the passwordCharacter string
 //then user selects either ok or cancel on all the conditions, it combines all the variables into finalPassword string
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



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
