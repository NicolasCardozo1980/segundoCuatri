// Superclase Deportista
class Deportista {
    protected nombre: string;
    private edad: number;
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
  
  // Subclase DeportistaFutbol
  class DeportistaFutbol extends Deportista {
    private posicion: string;
  
    constructor(nombre: string, edad: number, deporte: string, posicion: string) {
      super(nombre, edad, deporte);
      this.posicion = posicion;
    }
  
    public jugarPartido() {
      console.log(`${this.nombre} está jugando un partido de fútbol como ${this.posicion}.`);
    }
  }
  
  // Subclase DeportistaCiclismo
  class DeportistaCiclismo extends Deportista {
    private tipoBicicleta: string;
  
    constructor(nombre: string, edad: number, deporte: string, tipoBicicleta: string) {
      super(nombre, edad, deporte);
      this.tipoBicicleta = tipoBicicleta;
    }
  
    public pedalear() {
      console.log(`${this.nombre} está pedaleando en una bicicleta de ${this.tipoBicicleta}.`);
    }
  }
  
  // Ejemplo de uso
  const deportistaOlimpico = new DeportistaOlimpico("Carlos", 30, "Natación", 5);
  deportistaOlimpico.entrenar();
  deportistaOlimpico.competir();
  deportistaOlimpico.presentar();
  
  const deportistaFutbol = new DeportistaFutbol("Lionel Messi", 34, "Fútbol", "Delantero");
  deportistaFutbol.entrenar();
  deportistaFutbol.jugarPartido();
  deportistaFutbol.presentar();
  
  const deportistaCiclismo = new DeportistaCiclismo("Chris Froome", 36, "Ciclismo", "Montaña");
  deportistaCiclismo.entrenar();
  deportistaCiclismo.pedalear();
  deportistaCiclismo.presentar();
  