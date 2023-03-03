const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// IVA. Podrá ser normal (21%), reducido (4%) o exento.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 0,
    units: 0,
  },
];

function buildHTML(product, number) {
  const div = document.getElementById("productContainer");

  const productDiv = document.createElement("div");
  productDiv.setAttribute("class", "product-div");
  div.appendChild(productDiv);

  const labelNumber = document.createElement("label");
  labelNumber.setAttribute("class", "product-number");
  labelNumber.innerText = number + ".";
  productDiv.appendChild(labelNumber);

  const labelInfo = product.description + " - " + product.price + "€/Ud.";
  const labelName = document.createElement("label");
  labelName.setAttribute("class", "product-name");
  labelName.innerText = labelInfo;
  productDiv.appendChild(labelName);

  const input = document.createElement("input");
  input.setAttribute("id", "input" + number);
  input.setAttribute("type", "number");
  input.setAttribute("value", product.units);
  input.setAttribute("max", product.stock);
  input.setAttribute("min", "0");
  input.addEventListener("change", (event) => {
    updateUnits(parseInt(event.target.value), number - 1);
    console.log(products);
    if (areAllUnitsZero(products)) {
      disableButton();
    } else {
      enableButton();
    }
  });
  productDiv.appendChild(input);
}

for (i = 0; i < products.length; i++) {
  buildHTML(products[i], i + 1);
}

function updateUnits(newUnits, id) {
  products[id].units = newUnits;
}

function getSubtotal(products) {
  let subtotal = 0;
  for (product of products) {
    subtotal = subtotal + product.units * product.price;
  }
  return subtotal;
}

function getIva(products) {
  let iva = 0;
  for (product of products) {
    switch (product.tax) {
      case REGULAR_TYPE:
        iva = iva + product.units * product.price * (REGULAR_TYPE / 100);
        break;
      case LOWER_TYPE:
        iva = iva + product.units * product.price * (LOWER_TYPE / 100);
        break;
      default:
        iva = iva;
    }
  }
  return iva;
}

function getTotal(products) {
  let total = 0;
  total = getSubtotal(products) + getIva(products);
  console.log(total);
  return total;
}

function printResults(id, getResults) {
  return (document.getElementById(id).innerHTML = getResults);
}

function enableButton() {
  document.getElementById("calculateButton").disabled = false;
}

function disableButton() {
  document.getElementById("calculateButton").disabled = true;
}

function areAllUnitsZero(products) {
  let i = 0;
  let result = true;
  while (i < products.length && result) {
    const product = products[i];
    result = product.units == 0;
    i++;
  }
  return result;
}

document.getElementById;
document.getElementById("calculateButton").addEventListener("click", () => {
  printResults("subtotal", Number(getSubtotal(products)).toFixed(2));
  printResults("iva", Number(getIva(products)).toFixed(2));
  printResults("total", Number(getTotal(products)).toFixed(2));
});
