// Billetes: 5 €, 10 €, 20 €, 50 €, 100 € y 200 €;
// Monedas: 1, 2, 5, 10, 20 y 50 céntimos; y 1 y 2 euros;

const currency = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];


const getAmountToPay = () => {
return parseFloat(document.getElementById("totalPay").value);
};

const getTotalAmount = () => {
  return parseFloat(document.getElementById("amount").value);
};
function substraction(a,b) {
  return parseFloat((a-b).toFixed(2))
}
function getTotalReturn() {

  return substraction(getTotalAmount(),getAmountToPay());
}

function getTotalReturnString() {
  let result = 0;
  result = result + getTotalReturn() + " €";
  return result;
}

function printResult(id, getResult) {
  document.getElementById(id).innerHTML = getResult;
}

function getMoney(money, totalReturn) {
  const result = { quantity: 0, amount: 0 };
  for (amount of money) {
    const division = totalReturn / amount;
    if (division >= 1) {
      result.quantity = Math.floor(division);
      result.amount = amount;
      break;
    }
  }
  return result;
}

function getChange(totalReturn, currency) {
  let returnAmount = totalReturn;
  let totalChange = [];
  while (returnAmount > 0) {
    let money = getMoney(currency, returnAmount);
    returnAmount = substraction(returnAmount, money.amount * money.quantity);
    totalChange.push(money);
  }
  return totalChange;
}

console.log(getChange(0.5,currency))

function printChange(id, element) {
  let child = document.createElement("p");
  let result=0;
  if (element.quantity == 1 && element.amount >= 5) {
    result = element.quantity + " Billete de " + element.amount + " €";
  } else if (element.quantity > 1 && element.amount >= 5) {
    result = element.quantity + " Billetes de " + element.amount + " €";
  } else if (element.quantity == 1 && element.amount < 5) {
    result = element.quantity + " Moneda de " + element.amount + " €";
  } else {
    result = element.quantity + " Monedas de " + element.amount + " €";
  }
  child.innerHTML = result;
  document.getElementById(id).appendChild(child);
}

function printArray(id, array) {
  for (object of array) {
    printChange(id, object);
  }
}

function remove (id) {
  document.getElementById(id).innerHTML = " "
}

document.getElementById("calculateButton").addEventListener("click", () => {
  const totalReturn = getTotalReturn();
  printResult("total", totalReturn);
  remove("returnMoney");
  printArray("returnMoney", getChange(totalReturn, currency));
});
