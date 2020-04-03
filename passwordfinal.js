document.addEventListener("DOMContentLoaded", function() {
  var generateButton = document.getElementById("generate");

  generateButton.addEventListener("click", function() {
    passwordLength = document.getElementById("length").value;
    var myPassword = "";

    for (var i = 0; i < passwordLength; i++) {
      myPassword = myPassword + getRandomLower();
    }

    document.getElementById("result").innerText = myPassword;
  });
});

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
