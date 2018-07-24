class Libro {
  constructor(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
  }
  getResumen() {
    return `${this.titulo} fue escrito por ${this.autor} en ${this.anio}`;
  }
}

class Revista extends Libro {
  constructor(titulo, autor, anio, mes) {
    super(titulo, autor, anio);
    this.mes = mes;
  }
}
// Instanciar el Objeto
const rev = new Revista('Revista 1', "John Doe", "2018", "Abril");

console.log(rev);