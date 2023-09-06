interface IElectronic {
    getBrand(): string;
    getModel(): string;
    getYear(): number;
  }
  
  class Electronic implements IElectronic {
    private brand: string;
    private model: string;
    private year: number;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    getBrand(): string {
      return this.brand;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  }
  
  interface IPhone {
    makeCall(number: string): void;
    getColor(): string;
  }
  
  class Phone implements IPhone {
    private color: string;
  
    constructor(
      private electronic: IElectronic,
      color: string
    ) {
      this.color = color;
    }
  
    makeCall(number: string): void {
      console.log(`Calling to ${number}...`);
    }
  
    getColor(): string {
      return this.color;
    }
  
    getBrand(): string {
      return this.electronic.getBrand();
    }
  
    getModel(): string {
      return this.electronic.getModel();
    }
  
    getYear(): number {
      return this.electronic.getYear();
    }
  }
  
  interface ITelevision {
    changeChannel(channel: number): void;
    getChannel(): number;
  }
  
  class Television implements ITelevision {
    private channel: number;
  
    constructor(
      private electronic: IElectronic
    ) {
      this.channel = 0;
    }
  
    changeChannel(channel: number): void {
      this.channel = channel;
    }
  
    getChannel(): number {
      return this.channel;
    }
  
    getBrand(): string {
      return this.electronic.getBrand();
    }
  
    getModel(): string {
      return this.electronic.getModel();
    }
  
    getYear(): number {
      return this.electronic.getYear();
    }
  }
  
  // Ejemplo de uso
  const electronic = new Electronic("Samsung", "Galaxy S21", 2021);
  const phone = new Phone(electronic, "Black");
  const television = new Television(electronic);
  
  console.log(`Phone Brand: ${phone.getBrand()}, Model: ${phone.getModel()}, Year: ${phone.getYear()}, Color: ${phone.getColor()}`);
  console.log(`Television Brand: ${television.getBrand()}, Model: ${television.getModel()}, Year: ${television.getYear()}, Channel: ${television.getChannel()}`);
  