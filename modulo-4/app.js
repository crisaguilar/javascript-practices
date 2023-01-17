// function sum(a,b) {
//   return a+b;
// }

// function resta(a,b) {
//   return a-b;
// }

// function multi(a,b) {
//  return a*b;
// }

// function div(a,b){
//  return a/b;
// }

// console.log(sum(3,4))
// console.log(resta(3,4))
// console.log(multi(3,4))
// console.log(div(3,4))

function numberA() {
  return parseInt(document.getElementById("input-number1").value);
}
function numberB() {
  return parseInt(document.getElementById("input-number2").value);
}

function sum() {
  return numberA() + numberB();
}
function resta() {
  return numberA() - numberB();
}
function multi() {
  return numberA() * numberB();
}
function div() {
  return numberA() / numberB();
}


function printResult(result){
  if (isNaN(result)) {
    document.getElementById("result").innerText= "Error!";
  } else {
    document.getElementById("result").innerHTML=result;
  }
};

var sumResult = () => {
  var result=sum();
  printResult(result);
}
var restaResult = () => {
  var result=resta();
  printResult(result);
}
var multiResult = () => {
  var result=multi();
  printResult(result);
}
var divResult = () => {
  var result=div();
  printResult(result);
}

document.getElementById("sum-button").addEventListener("click", sumResult);
document.getElementById("resta-button").addEventListener("click", restaResult);
document.getElementById("multi-button").addEventListener("click", multiResult);
document.getElementById("div-button").addEventListener("click", divResult);
