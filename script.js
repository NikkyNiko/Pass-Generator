// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordArray = [];
var passwordArrayB = [];
var passwordLength = 0;

// Function to prompt user for password options
function getPasswordOptions()  {
passwordArray = [];
passwordArrayB = [];
passwordLength = 0;
passwordLength = parseInt(prompt('How long would you like your password? (min 8 - max 128 characters)'));
if (passwordLength > 7 && passwordLength < 129) {
  alert(`You have chosen ${passwordLength} as your password length`)
} else {
  alert(`Input was not found within this range, please try again.`)
  getPasswordOptions()
}
function getCharOptions() {
  var confirmLowerCase = confirm(`Would you like lowercase letters?`);
  if (confirmLowerCase === true) {
    passwordArray.push(lowerCasedCharacters[getRandom(lowerCasedCharacters.length-1)]);
    passwordArrayB.push.apply(passwordArrayB, lowerCasedCharacters);
  };
  var confirmUpperCase = confirm(`Would you like uppercase letters?`);
  if (confirmUpperCase === true) {
    passwordArray.push(upperCasedCharacters[getRandom(upperCasedCharacters.length-1)]);
    passwordArrayB.push.apply(passwordArrayB, upperCasedCharacters);
  };
  var confirmNumeric = confirm(`Would you like numbers?`);
  if (confirmNumeric === true) {
    passwordArray.push(numericCharacters[getRandom(numericCharacters.length-1)]);
    passwordArrayB.push.apply(passwordArrayB, numericCharacters);
  };
  var confirmSpecialChar = confirm(`Would you like special characters? (@%+\\/'!#$^?:,)}{][~-_.)`);
  if (confirmSpecialChar === true) {
    passwordArray.push(specialCharacters[getRandom(specialCharacters.length-1)]);
    passwordArrayB.push.apply(passwordArrayB, specialCharacters);
    };

  if (confirmLowerCase === false
    && confirmUpperCase === false
    && confirmNumeric === false
    && confirmSpecialChar === false) {
      alert(`At least one character type must be selected`)
      getCharOptions()
  } else {
    alert(`Thank you, we are now generating your password...`)
  }
}
getCharOptions()
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr);
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);