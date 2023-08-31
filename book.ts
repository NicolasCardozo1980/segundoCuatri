class Book {
    private title: string;
    private author: string;
    private status: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        this.status = "disponible"; // El estado inicial es "disponible"
    }

    borrow(): void {
        if (this.status === "disponible") {
            this.status = "prestado";
            console.log(`El libro '${this.title}' ha sido prestado.`);
        } else {
            console.log(`Lo siento, el libro '${this.title}' no está disponible en este momento.`);
        }
    }

    returnBook(): void {
        if (this.status === "prestado") {
            this.status = "disponible";
            console.log(`El libro '${this.title}' ha sido devuelto correctamente.`);
        } else {
            console.log(`Este libro no estaba prestado en primer lugar.`);
        }
    }

    getStatus(): string {
        return this.status;
    }

    toString(): string {
        return `'${this.title}' por ${this.author}`;
    }
}

// Ejemplo de uso
const book1 = new Book("El Gran Gatsby", "F. Scott Fitzgerald");
console.log(book1.toString()); // Muestra la representación del libro

book1.borrow(); // Intentamos tomar prestado el libro
book1.borrow(); // Intentamos tomar prestado el libro nuevamente (no debería ser posible)

console.log(`Estado del libro: ${book1.getStatus()}`); // Obtenemos el estado actual del libro

book1.returnBook(); // Devolvemos el libro prestado
book1.borrow(); // Intentamos tomar prestado el libro nuevamente después de devolverlo
