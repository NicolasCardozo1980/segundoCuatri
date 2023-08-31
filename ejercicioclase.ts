interface IElectronic {
    getBrand(): string;
    getModel(): string;
    getYear(): number;
  }
  
  interface ICallable {
    makeCall(number: string): void;
  }
  
  interface ITelevision {
    changeChannel(channel: number): void;
    getChannel(): number;
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
  
  class Phone implements IElectronic, ICallable {
    private brand: string;
    private model: string;
    private year: number;
    private color: string;
    
    constructor(
      brand: string,
      model: string,
      year: number,
      color: string
    ) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
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
    
    makeCall(number: string): void {
      console.log(`Calling to ${number}...`);
    }
    
    getColor(): string {
      return this.color;
    }
  }
  
  class Television implements IElectronic, ITelevision {
    private brand: string;
    private model: string;
    private year: number;
    private channel: number;
    
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.channel = 0;
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
    
    changeChannel(channel: number): void {
      this.channel = channel;
    }
    
    getChannel(): number {
      return this.channel;
    }
  }
  