// Superclase Deportista
class Deportista {
    protected nombre: string;
    protected edad: number;
    protected deporte: string;
  
    constructor(nombre: string, edad: number, deporte: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.deporte = deporte;
    }
  
    public entrenar() {
      console.log(`${this.nombre} está entrenando para su deporte: ${this.deporte}`);
    }
  
    public presentar() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Deporte: ${this.deporte}`);
    }
  }
  
  // Subclase DeportistaOlimpico
  class DeportistaOlimpico extends Deportista {
    private medallasGanadas: number;
  
    constructor(nombre: string, edad: number, deporte: string, medallasGanadas: number) {
      super(nombre, edad, deporte);
      this.medallasGanadas = medallasGanadas;
    }
  
    public competir() {
      console.log(`${this.nombre} está compitiendo en ${this.deporte} en los Juegos Olímpicos.`);
    }
  }
  