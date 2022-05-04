console.log("Archivo for funcionando OK");

// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
];

placesToTravel.forEach(function (ciudad, i) {
  if ((ciudad.id == 11) || (ciudad.id == 40)) {
    placesToTravel.splice(i,1);
  }
});

console.log(placesToTravel)