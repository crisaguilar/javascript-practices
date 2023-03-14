var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function getText(id) {
  return document.getElementById(id).value;
}

function printResult(id, result) {
  document.getElementById(id).innerHTML = result;
}

var getIndex = (alphabet, letter) => {
  for (var i = 0; i < alphabet.length; i++) {
    const alphabetLetter = alphabet[i];
    if (alphabetLetter === letter) {
      return i;
    }
  }
};

var transformLetter = (alphabet, letter) => {
  const index = getIndex(alphabet, letter);
  if (alphabet == plainAlphabet) {
    return encryptedAlphabet[index];
  } else {
    return plainAlphabet[index];
  }
};

var transformText = (alphabet, message) => {
  var partialResult = "";
  var textLowercase = message.toLowerCase();
  for (var letter of textLowercase) {
    if (letter == " ") {
      partialResult = partialResult + letter;
    } else if (letter == "ñ") {
      partialResult = partialResult + letter;
    } else {
      partialResult = partialResult + transformLetter(alphabet, letter);
    }
  }
  return partialResult;
};

document.getElementById("encryptButton").addEventListener("click", () => {
  var encryptText = transformText(plainAlphabet, getText("decryptText"));
  printResult("encryptText", encryptText);
});
document.getElementById("decryptButton").addEventListener("click", () => {
  var decryptText = transformText(encryptedAlphabet, getText("encryptText"));
  printResult("decryptText", decryptText);
});

console.log(
  "El mensaje que hay que descrifrar es el siguiente '¡lo has conseguido! puedes vacilar a tus compañeros escribiendo por el chat: '¡soy la leche, turing fliparia conmigo!' y a continuacion envia un mensaje cifrado, ¡el que tu quieras!'"
);

console.log("------------------------");
console.log("GENERADOR ALEATORIO");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var randomPick = (n, min, max) => {
  let randomArray = [];
  for (let index = 0; index < n; index++) {
    randomArray.push(getRandomNumber(min, max));
  }
  return randomArray;
};

console.log(randomPick(10, 1, 100));
