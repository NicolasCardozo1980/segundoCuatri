class Televisor {
    private encendido: boolean = false;
    private volumen: number = 50;
    private canal: number = 1;
  
    constructor() {}
  
    public encenderApagar() {
      this.encendido = !this.encendido;
      if (this.encendido) {
        console.log('El televisor se ha encendido.');
      } else {
        console.log('El televisor se ha apagado.');
      }
    }
  
    public cambiarCanal(nuevoCanal: number) {
      if (!this.encendido) {
        console.log('El televisor está apagado. Debe encenderlo para cambiar de canal.');
        return;
      }
  
      if (nuevoCanal >= 1 && nuevoCanal <= 99) {
        this.canal = nuevoCanal;
        console.log(`Se ha cambiado al canal ${this.canal}.`);
      } else {
        console.log('El canal especificado está fuera de rango. Debe estar entre 1 y 99.');
      }
    }
  
    public ajustarVolumen(nuevoVolumen: number) {
      if (!this.encendido) {
        console.log('El televisor está apagado. Debe encenderlo para ajustar el volumen.');
        return;
      }
  
      if (nuevoVolumen >= 0 && nuevoVolumen <= 100) {
        this.volumen = nuevoVolumen;
        console.log(`Se ha ajustado el volumen a ${this.volumen}.`);
      } else {
        console.log('El volumen especificado está fuera de rango. Debe estar entre 0 y 100.');
      }
    }
  
    public info() {
      if (!this.encendido) {
        console.log('El televisor está apagado. Enciéndalo para obtener información.');
        return;
      }
  
      const horaActual = new Date().toLocaleTimeString();
      console.log(`Canal: ${this.canal}, Volumen: ${this.volumen}, Hora actual: ${horaActual}`);
    }
  }
  
  // Ejemplo de uso
  const miTelevisor = new Televisor();
  miTelevisor.encenderApagar();
  miTelevisor.cambiarCanal(5);
  miTelevisor.ajustarVolumen(70);
  miTelevisor.info();
  