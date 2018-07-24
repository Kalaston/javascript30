// Constructor
function Libro(titulo, autor, anio) {
  this.titulo = titulo;
  this.autor = autor,
  this.anio = parseInt(anio);
}

// prototipo de descripcion
Libro.prototype.descripcion = function() {
  return `${this.titulo} fue escrito por ${this.autor} en ${this.anio}`;
}

Libro.prototype.obtenerEdad = function() {
  return new Date().getFullYear() - this.anio;
}

// Yo tambien puedo hacer mis funciones como map
Libro.prototype.cambiarAnio = function(nuevoAnio) {
  this.anio = nuevoAnio;
}

const libro1 = new Libro('Libro 1', 'John Doe', 2018);
const libro2 = new Libro('Libro 2', 'Camilla Orantes', '1914');
const libro3 = new Libro('Mi lucha', 'Adolfo', '1939');

console.log(libro2.descripcion());
console.log(libro2);

console.log(libro2.obtenerEdad());
console.log(libro1.obtenerEdad());

console.log("el año actual es: ",libro1.anio);
libro1.cambiarAnio(2000);
console.log("el nuevo año es ",libro1.anio);

// ---------------------------- REVISTAS

// Constructor
function Revista(titulo, autor, anio, mes) {
  Libro.call(this, titulo, autor, anio);
  
  this.mes = mes;
}

// Heredando el Prototype
Revista.prototype = Object.create(Libro.prototype);

// Instanciando el Objeto
const res1 = new Revista("revista 1", "John Doe", "2016", "Febrero");


//Invocandolo
console.log(res1);

console.log(res1.obtenerEdad());


