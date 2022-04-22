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
var passwordCharacters = "";

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
  // going to do basically the same now for rest of the conditions
  var includeNumbers = confirm("Click OK to confirm including numbers.");
  if (includeNumbers === true) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }

  var specialCharacters = confirm("Click OK to confirm including special characters.");
  if (specialCharacters === true) {
    passwordCharacters = passwordCharacters.concat(symbols)
  }

  var includeUppercase = confirm("Click OK to confirm including uppercase characters.");
  if (includeUppercase === true) {
    passwordCharacters = passwordCharacters.concat(upperCaseLetters)
  }

  var includeLowercase = confirm("Click OK to confirm including lowercase characters.");
  if (includeLowercase === true) {
    passwordCharacters = passwordCharacters.concat(lowerCaseLetters)
  } 
  
  else {
    if ((includeUppercase === false) && (includeLowercase === false) && (includeNumbers === false && (specialCharacters === false))) {
      alert("At least one of the password criteria must be chosen.");
    }
  }
  // this is where we have to create for loop for finalPassword variable so that it is looping passwordCharacters to have each character randomized according to user confirmed conditions by the length chosen by user
  // do this by combing charAt method for strings with Math.floor(Math.random() method while also factoring in length
  var finalPassword = "";
  for (var i = 0; i < numberOfCharacters; i++) {
    finalPassword = finalPassword + passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }  
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
