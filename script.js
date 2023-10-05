
//Characters for password
var lowercaseC = "abcdefghijklmnopqrstuvwxyz";
var uppercaseC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericC = "0123456789";
var specialC = "!@#$%^&*()_+[]{}|;:,.<>?";

//function to generate random passwords
function generatePassword(){
  var length = prompt("Enter password length (between 8 and 128):");
  if (length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return "";
  }
//characters included in the selection
  var characters = "";
  if (confirm("Include lowercase characters?")) characters += "abcdefghijklmnopqrstuvwxyz";
  if (confirm("Include uppercase characters?")) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (confirm("Include numeric characters?")) characters += "0123456789";
  if (confirm("Include special characters?")) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

//if user hasn't selected any Characters to use
if (characters === "") {
    alert("Please select at least one character type.");
    return "";
  }
  
//generated password
var password = "";
  for (var i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  
  }
 return password;
} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
