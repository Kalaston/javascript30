// let s1 = "hola";
// console.log(typeof(s1)) //retorna "string"

// const s2 = new String("hola");
// console.log(typeof(s2)) // retorna "object"

// Objeto Literal
// const libro1 = {
//   titulo: "Libro Uno",
//   autor: "John Doe",
//   anio: 2018,
//   descripcion: function() {
//     return `${this.titulo} fue escrito por ${this.autor}, en ${this.anio}`;
//   }
// }
// console.log(libro1.descripcion());


// console.log(Object.values(libro1));
// console.log(Object.keys(libro1));


// Constructores 

function Libro(titulo, autor, anio) {
  this.titulo = titulo;
  this.autor = autor,
  this.anio = anio;
  this.descripcion = () => {
    return `${this.titulo} fue escrito por ${this.autor} en ${this.anio}`;
  }
}

const libro1 = new Libro('Libro 1', 'John Doe', '2018');
const libro2 = new Libro('Libro 2', 'Camilla Orantes', '1914');
const libro3 = new Libro('Mi lucha', 'Adolfo', '1939');

console.log(libro3.descripcion());