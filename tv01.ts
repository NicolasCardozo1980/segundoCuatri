class Televisor {
    isOn: boolean;
    volume: number;
    channel: number;
    constructor(on: boolean = false, vol: number = 0, chn: number = 0) {
      this.isOn = on;
      this.volume = vol;
      this.channel = chn;
    }
    
    switchOnOff(): void {
      this.isOn = !this.isOn;
      console.log(this.isOn ? "encendido" : "apagado");
    }
    
    volUp(): void {
      if (this.isOn && this.volume < 100) {
        this.volume++;
        console.log("vol up");
      }
    }
    
    volDown(): void {
      if (this.isOn && this.volume > 0) {
        this.volume--;
        console.log("vol down");
      }
    }
    
    channelUp(): void {
      if (this.isOn && this.channel < 99) {
        this.channel++;
        console.log("channel up");
      }
    }
    
    channelDown(): void {
      if (this.isOn && this.channel > 1) {
        this.channel--;
        console.log("channel down");
      }
    }
    
    pickChannel(channel: number): void {
      if (this.isOn && channel >= 1 && channel <= 99) {
        this.channel = channel;
        console.log("Cambiaste al canal", this.channel);
      }
    }
    
    info(): void {
      if (this.isOn) {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`Canal: ${this.channel}, Volumen: ${this.volume}, Hora actual: ${currentTime}`);
      } else {
        console.log("El televisor está apagado.");
      }
    }
  }
  
  const tv01 = new Televisor();
  tv01.switchOnOff();
  tv01.switchOnOff();
  tv01.switchOnOff();
  tv01.pickChannel(45);
  tv01.volUp();
  tv01.channelUp();
  tv01.info();
  