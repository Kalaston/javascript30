class Libro {
  constructor(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
  }
  getResumen() {
    return `${this.titulo} fue escrito por ${this.autor} en ${this.anio}`;
  }
  getEdad() {
    return new Date().getFullYear() - this.anio;
  }
  setAnio(nuevoAnio) {
    this.anio = nuevoAnio;
  }
}

// Instanciar el Objeto
const libro1 = new Libro('Libro 1', 'John Doe', "1994");

console.log(libro1.getResumen());