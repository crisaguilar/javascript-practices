// // Ejercicio 1:Calcular el iva segun producto.

console.log("Ejercicio 1:");
const product = { count: 3, price: 12.55, type: "ropa" };

const totalPrice = product.count <= 0 ? 0 : product.count * product.price;

let typeIva = 0.21;

switch (product.type) {
  case "alimentacion":
    typeIva = 0.01;
    break;
  case "libro":
    typeIva = 0.04;
    break;
}

const iva = totalPrice * typeIva;
const totalCost = iva + totalPrice;

console.log("El precio total del producto es: " + totalCost);

// // Ejercicio avanzado:

console.log("Ejercicio 1(Avanzado):");
function getVat(product) {
  let typeIva = 0.21;
  switch (product.type) {
    case "alimentacion":
      typeIva = 0.01;
      break;
    case "libro":
      typeIva = 0.04;
      break;
  }
  return typeIva * product.price + product.price;
}

function getTotalVat(product) {
  return product.count > 0 ? product.count * getVat(product) : 0;
}
console.log(getVat(product));
console.log(getTotalVat(product));

// Ejercicio 2: Calcular sueldo neto en nomina:

console.log("Ejercicio 2:");
const empleado = {
  bruto: 14500,
  hijos: 2,
  pagas: 14,
};

let kidsRetention;
if (empleado.hijos > 0) {
  kidsRetention = 0.02;
} else {
  kidsRetention = 0;
}

let retention = 0;
if (empleado.bruto > 12000 && empleado.bruto <= 24000) {
  retention = empleado.bruto * (0.08 - kidsRetention);
} else if (empleado.bruto > 24000 && empleado.bruto <= 34000) {
  retention = empleado.bruto * (0.16 - kidsRetention);
} else if (empleado.bruto > 34000) {
  retention = empleado.bruto * (0.3 - kidsRetention);
}

const netSalary = empleado.bruto - retention;

console.log("El salario neto anual será: " + netSalary);

console.log("El salario neto anual en 12 pagas será: " + netSalary / 12);

console.log("El salario neto anual en 14 pagas será: " + netSalary / 14);
