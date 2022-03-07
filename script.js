// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "|", "}", "{", "]", "[", '"', "'", ":", ";", "/", "?", ".", ">", ",", "<", "`", "~"];
var allArray = [];


// Provided by instructor
function userInteraction() {
  function userCharacterCount() {
    passwordCharacterCount = parseInt(prompt("Pick a length from 8 to 128 for the password"));
    while (passwordCharacterCount < 8 || passwordCharacterCount > 128) {
      passwordCharacterCount = parseInt (prompt("Error: Please pick a number between 8 and 128"));
  
  }
}

function askAboutUppercase(){
  allowUppercase = confirm("Are upper case characters allowed?")
  if (allowUppercase === true) {
    allArray.push (...uppercaseChars);
  }
}

function askAboutLowercase(){
  allowLowerCase = confirm("Are lower case characters allowed?")
  if (allowLowercase === true) {
    allArray.push (...lowercaseChars);
  }
}

function askAboutNumbers(){
  allowNumbers = confirm("Would you like to add numbers?");
  if (allowNumbers === true) {
      allArray.push (...number);
  }
}

function askAboutSpecials() {
  allowSpecials = confirm("Would you like to add special characters?");
  if (allowSpecials === true) {
      allArray.push (...specialCharacters);
    }
}

askAboutUppercase();
askAboutLowercase();
askAboutNumbers();
askAboutSpecials();
userCharacterCount();


function generatePassword(){
  userInteraction();
  password = "";
  for (let index = 0; index < passwordCharacterCount; index++) {
    var randomSelector = Math.floor(Math.random()* (mergedArray.length-1))
    password += mergedArray[randomSelector];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}