console.log("Archivo includes.js funcionando OK");

// 1.1 Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];
const productsFiltered = [];

for (const product of products) {
  if (product.includes("Camiseta")) {
    productsFiltered.push(product);
  }
}

console.log(productsFiltered);
