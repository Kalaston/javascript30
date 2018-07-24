var pedidos = [
  {cantidad: 250},
  {cantidad: 400},
  {cantidad: 100},
  {cantidad: 325},
];

// var cantidadTotal = 0;

// for(var i = 0; i < pedidos.length; i++) {
//   cantidadTotal += pedidos[i].cantidad;
// }

// const cantidadTotal = pedidos.reduce(function(suma, pedidoActual) {
//   return suma + pedidoActual.cantidad;
// },0);

const cantidadTotal = pedidos.reduce((suma, pedidoActual) => {
  console.log("Suma: ", suma, " Pedio actual: ",pedidoActual);
  return suma + pedidoActual.cantidad;
},0);
console.log(cantidadTotal);
