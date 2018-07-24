// function triple(x) {
//   return x * 3;
// }

// var triple = function(x) {
//   return x * 3;
// }

// const triple = (x) => {
//   return x * 3;
// }

const triple = x => x * 3;

// ------------------    filter
// filtrar los perros

let animales = [
  {nombre: 'Pelusa', especie: "gato"},
  {nombre: 'Maik', especie: "perro"},
  {nombre: 'Jimmy', especie: "perico"},
  {nombre: 'Firulais', especie: "perro"},
  {nombre: 'Nidalee', especie: "gato"},
  {nombre: 'Renekton', especie: "lagarto"},
];

/* 
var perros = [];
for (var i = 0; i < animales.length; i++) {
  if (animales[i].especie === "perro") {
    perros.push(animales[i]);
  }
}
*/

// var perros = animales.filter(function(animal) {
//   if (animal.especie === "perro") return animal;
// });

// const perros = animales.filter((animal) => {
//   if(animal.especie === "perro") {
//     return animal;
//   }
// });

// const perros = animales.filter(animal => animal.especie === "perro");
// console.log(perros);

//const esPerro = (animal) => animal.especie === "perro";


// ===================== MAP =====================

// var nombres = [];
// for (var i = 0; i < animales.length; i++) {
//   nombres.push(animales[i].nombre);
// }

// const nombres = animales.map(animal => {
//   return animal.nombre + " es un " + animal.especie;
// });

const nombres = animales.map(animal => `${animal.nombre} es un ${animal.especie}`);

//const nombres = animales.map(animal => animal.nombre);

console.log(nombres);