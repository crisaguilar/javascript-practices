const carrito = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
  },
];

function printHeader(text) {
  console.log("--------************--------");
  console.log(text);
}

// Mostrar una estructura de carrito de la compra.

function print(product) {
  for (property in product) {
    console.log(property + ": " + product[property]);
  }
}

function printCarrito(carrito) {
  for (product of carrito) {
    console.log("---------------");
    print(product);
  }
}

printCarrito(carrito);

// // Eliminar el producto con id 54657 del carrito de la compra.

printHeader("Eliminar un producto del carrito de la compra.");

function deleteProduct(carrito, id) {
  const newCarrito = [];
  let i = 0;
  while (i < carrito.length) {
    if (carrito[i].id != id) {
      newCarrito.push(carrito[i]);
    }
    i++;
  }
  return printCarrito(newCarrito);
}
deleteProduct(carrito, 54657);

// function removeProduct(carrito, id){
// let i=0;
// while (i < carrito.length){
//   if (carrito[i].id == id){
//     carrito.splice(i,1)
//   }
//   i++;
// }
// }

// removeProduct(carrito,54657)

// printCarrito(carrito);

// function removeProduct(carrito, id){
// let i=0;
// while (i < carrito.length){
//   if (carrito[i].id == id){
//     carrito.splice(i,1)
//   }
//   i++;
// }
// }

// removeProduct(carrito,54657)

// printCarrito(carrito);

// // Calcular el total del carrito de la compra.

printHeader("Calcular el total del carrito de la compra.");

function totalPrice(carrito) {
  let total = 0;
  for (product of carrito) {
    total = total + product.price * product.count;
  }
  return total;
}

console.log("La compra total es: " + totalPrice(carrito));

// // Filtrar por los productos que sean prime.

printHeader("Filtrando por los productos que son prime.");

const filteredCarrito = [];

let i = 0;
while (i < carrito.length) {
  const product = carrito[i];
  if (product.premium) [filteredCarrito.push(product)];
  i++;
}

printCarrito(filteredCarrito);

// // Opcional
// // Si todos los productos son prime que diga "Gastos de envió cero", si no "Con gastos de envío.
printHeader("¿Tiene gastos de envio su compra?");

function costs(carrito) {
  let prime = true;
  let i = 0;
  while (i < carrito.length && prime) {
    prime = carrito[i].premium;
    i++;
  }
  if (prime == false) {
    console.log("Su compra tiene gastos de envío");
  } else {
    console.log("No tienes gastos de envio");
  }
}

costs(carrito);

// Mostrar el carrito en un listado de html básico..
printHeader("Mostrar el carrito en un listado de html básico");

function printHTML(product) {
  let result = "";
  for (property in product) {
    result = result + "<br>" + (property + ": " + product[property]);
  }
  return result;
}
console.log(printHTML(carrito[3]));

function printCarritoHTML(carrito, createHTML) {
  for (product of carrito) {
    let text = document.createElement("p");
    text.innerHTML = printHTML(product);
    createHTML.appendChild(text);
  }
}


let createHTML = document.getElementById("container");
printCarritoHTML(carrito, createHTML);

// // Aplicar un descuento del 5% si la compra es mayor de 100 €

printHeader("Aplicar un descuento del 5% si la compra es mayor de 100 €");

function discount(carrito) {
  let total = 0;
  let discount = 0.05;
  for (product of carrito) {
    total = total + product.price * product.count;
  }
  console.log("El total de su compra es: " + total + "€");

  if (total > 50) {
    total = total - total * discount;
  }

  console.log(
    "Se le aplicara un 5% de descuento, por lo que el precio final será: " +
      total +
      "€"
  );
}

discount(carrito);
