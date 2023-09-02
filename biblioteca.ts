class LibraryItem {
    constructor(public title: string, public authorOrEditor: string, public publicationYear: number) {}
  }
  
  class Book extends LibraryItem {
    constructor(title: string, author: string, publicationYear: number) {
      super(title, author, publicationYear);
    }
  }
  
  class Magazine extends LibraryItem {
    constructor(title: string, editor: string, publicationYear: number) {
      super(title, editor, publicationYear);
    }
  }
  
  class User {
    constructor(public name: string, public address: string, public phoneNumber: string) {}
  }
  
  class Loan {
    constructor(public user: User, public item: LibraryItem, public loanDate: Date) {}
  }
  
  class Library {
    private items: LibraryItem[] = [];
    private users: User[] = [];
    private loans: Loan[] = [];
  
    addItem(item: LibraryItem) {
      this.items.push(item);
    }
  
    addUser(user: User) {
      this.users.push(user);
    }
  
    loanItem(user: User, item: LibraryItem) {
      if (this.items.includes(item)) {
        const loanDate = new Date();
        const loan = new Loan(user, item, loanDate);
        this.loans.push(loan);
        console.log(`El usuario ${user.name} ha prestado "${item.title}" el ${loanDate.toDateString()}`);
      } else {
        console.log(`El elemento "${item.title}" no está disponible en la biblioteca.`);
      }
    }
  
    returnItem(user: User, item: LibraryItem) {
      const loan = this.loans.find((loan) => loan.user === user && loan.item === item);
      if (loan) {
        const returnDate = new Date();
        const index = this.loans.indexOf(loan);
        this.loans.splice(index, 1);
        console.log(`El usuario ${user.name} ha devuelto "${item.title}" el ${returnDate.toDateString()}`);
      } else {
        console.log(`El usuario ${user.name} no tiene prestado el elemento "${item.title}".`);
      }
    }
  
    showActiveLoans() {
      console.log("Préstamos activos:");
      this.loans.forEach((loan) => {
        console.log(`- Usuario: ${loan.user.name}, Elemento: "${loan.item.title}", Fecha de préstamo: ${loan.loanDate.toDateString()}`);
      });
    }
  }
  
  // Ejemplo de uso del sistema de gestión de biblioteca
  const library = new Library();
  
  const user1 = new User("Usuario 1", "Dirección 1", "123-456-7890");
  const user2 = new User("Usuario 2", "Dirección 2", "987-654-3210");
  
  const book1 = new Book("Libro 1", "Autor 1", 2020);
  const book2 = new Book("Libro 2", "Autor 2", 2019);
  
  library.addItem(book1);
  library.addItem(book2);
  
  library.addUser(user1);
  library.addUser(user2);
  
  library.loanItem(user1, book1);
  library.loanItem(user2, book2);
  
  library.showActiveLoans();
  
  library.returnItem(user1, book1);
  library.showActiveLoans();
  