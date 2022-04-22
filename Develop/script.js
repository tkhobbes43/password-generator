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
var numberOfCharacters = "";

function generatePassword() {
 // want to have all the most of the work done here inside this function, like executing the prompt and confirms, then if user whats that condition, what that does to the passwordCharacter string
 // then user selects either ok or cancel on all the conditions, it combines all the variables into finalPassword string
  
  var numberOfCharacters = prompt("How many characters would you like your password to contain?");
  // adding if statement for this variable, so that they are picking between 8 to 128 character passwords
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    // and if they choose outside of that range, they get this alert, making them choose again so that they are selecting within desired range 
    alert("Password must be between 8 and 128 characters.");
    return numberOfCharacters;
  }
  
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
