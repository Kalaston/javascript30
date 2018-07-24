// Objeto de Protos
const ProtosDeLibros = { // Antes se llamaba "obtenerDescripcion"
  getResumen : function() {
    return `${this.titulo} fue escrito por ${this.autor} en ${this.anio}`;
  },
  getEdad: function() { // Antes se llamaba "obtenerEdad"
    return new Date().getFullYear() - this.anio;
  }
}

// Crear Objeto
const libro1 = Object.create(ProtosDeLibros, {
  titulo: {value: "Libro 1"},
  autor: {value: " John Doe"},
  anio: {value: "2013"}
});

// libro1.titulo = "Libro 1";
// libro1.autor = "John Doe";
// libro1.anio = "2013";

console.log(libro1);