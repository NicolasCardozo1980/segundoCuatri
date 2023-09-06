class Personaje {
    constructor(public nombre: string, public vida: number, public energía: number) {}
  
    atacar(objetivo: Personaje, poder: number) {
      if (this.energía >= poder) {
        objetivo.recibirDaño(poder);
        this.energía -= poder;
        console.log(`${this.nombre} ataca a ${objetivo.nombre} con un poder de ${poder}`);
      } else {
        console.log(`${this.nombre} no tiene suficiente energía para atacar.`);
      }
    }
  
    curar(energíaCuración: number) {
      if (energíaCuración > 0) {
        this.energía += energíaCuración;
        console.log(`${this.nombre} se ha curado y tiene ahora ${this.energía} de energía.`);
      } else {
        console.log(`${this.nombre} no puede curarse con esa cantidad de energía.`);
      }
    }
  
    recibirDaño(daño: number) {
      this.vida -= daño;
      if (this.vida <= 0) {
        console.log(`${this.nombre} ha sido derrotado.`);
      } else {
        console.log(`${this.nombre} ha recibido ${daño} de daño y tiene ${this.vida} de vida restante.`);
      }
    }
  }
  
  class Guerrero extends Personaje {
    constructor(nombre: string, vida: number, energía: number, public fuerza: number) {
      super(nombre, vida, energía);
    }
  
    usarEscudo() {
      console.log(`${this.nombre} utiliza su escudo para bloquear un ataque.`);
    }
  }
  
  class Mago extends Personaje {
    constructor(nombre: string, vida: number, energía: number, public mana: number) {
      super(nombre, vida, energía);
    }
  
    lanzarHechizo(objetivo: Personaje, poderHechizo: number) {
      if (this.mana >= poderHechizo) {
        objetivo.recibirDaño(poderHechizo);
        this.mana -= poderHechizo;
        console.log(`${this.nombre} lanza un hechizo a ${objetivo.nombre} con un poder de ${poderHechizo}`);
      } else {
        console.log(`${this.nombre} no tiene suficiente mana para lanzar un hechizo.`);
      }
    }
  }
  
  // Ejemplo de uso
  const guerrero = new Guerrero("Guerrero1", 100, 50, 10);
  const mago = new Mago("Mago1", 80, 100, 30);
  
  guerrero.usarEscudo();
  mago.lanzarHechizo(guerrero, 15);
  
  guerrero.atacar(mago, 20);
  mago.curar(15);
  
  console.log("Estado final:");
  console.log(guerrero);
  console.log(mago);
  