// CALCULADORA SECUENCIAL

function sum(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multi(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

function getInputNumber() {
  return parseInt(document.getElementById("input-number").value);
}

function printResult(result) {
  document.getElementById("result").innerHTML = result;
}

function calculateLastOperation(lastOperation, partialResult, inputNumber) {
  switch (lastOperation) {
    case "+":
      partialResult = sum(partialResult, inputNumber);
      break;
    case "-":
      partialResult = resta(partialResult, inputNumber);
      break;
    case "*":
      partialResult = multi(partialResult, inputNumber);
      break;
    case "/":
      partialResult = div(partialResult, inputNumber);
  }
  return partialResult;
}
var partialResult;
var lastOperation;

var sumButton = () => {
  var a = getInputNumber();
  if (partialResult == undefined) {
    partialResult = a;
  } else {
    partialResult = calculateLastOperation(lastOperation, partialResult, a);
  }
  lastOperation = "+";
  console.log(lastOperation);
  console.log("Partial result " + partialResult);
};

var restaButton = () => {
  var a = getInputNumber();
  if (partialResult == undefined) {
    partialResult = a;
  } else {
    partialResult = calculateLastOperation(lastOperation, partialResult, a);
  }
  lastOperation = "-";
  console.log(lastOperation);
  console.log("Partial result " + partialResult);
};

var multiButton = () => {
  var a = getInputNumber();
  if (partialResult == undefined) {
    partialResult = a;
  } else {
    partialResult = calculateLastOperation(lastOperation, partialResult, a);
  }
  lastOperation = "*";
  console.log(lastOperation);
  console.log("Partial result " + partialResult);
};

var divButton = () => {
  var a = getInputNumber();
  if (partialResult == undefined) {
    partialResult = a;
  } else {
    partialResult = calculateLastOperation(lastOperation, partialResult, a);
  }
  lastOperation = "/";
  console.log(lastOperation);
  console.log("Partial result " + partialResult);
};

var resultButton = () => {
  var a = getInputNumber();
  partialResult = calculateLastOperation(lastOperation, partialResult, a);
  printResult(partialResult);
};

document.getElementById("sum-button").addEventListener("click", sumButton);
document.getElementById("resta-button").addEventListener("click", restaButton);
document.getElementById("multi-button").addEventListener("click", multiButton);
document.getElementById("div-button").addEventListener("click", divButton);
document
  .getElementById("result-button")
  .addEventListener("click", resultButton);
