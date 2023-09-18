import * as fs from 'fs';
import * as inquirer from 'inquirer';

// Definición de tipos
type Usuario = {
  id: number;
  nombre: string;
  penalizacion: number;
};

type Libro = {
  id: number;
  titulo: string;
  disponible: boolean;
};

type Prestamo = {
  usuarioId: number;
  libroId: number;
  fechaInicio: Date;
  fechaDevolucion: Date;
};

// Variables para mantener datos en memoria
const usuarios: Usuario[] = [];
const libros: Libro[] = [];
const prestamos: Prestamo[] = [];

// Función para cargar datos desde archivos JSON
function cargarDatos() {
  try {
    const usuariosData = fs.readFileSync('usuarios.json', 'utf-8');
    usuarios.push(...JSON.parse(usuariosData));

    const librosData = fs.readFileSync('libros.json', 'utf-8');
    libros.push(...JSON.parse(librosData));

    const prestamosData = fs.readFileSync('prestamos.json', 'utf-8');
    prestamos.push(...JSON.parse(prestamosData));
  } catch (error) {
    // Manejo de errores al cargar archivos
    console.error('Error al cargar datos:', error);
  }
}

// Función para guardar datos en archivos JSON
function guardarDatos() {
  fs.writeFileSync('usuarios.json', JSON.stringify(usuarios, null, 2), 'utf-8');
  fs.writeFileSync('libros.json', JSON.stringify(libros, null, 2), 'utf-8');
  fs.writeFileSync('prestamos.json', JSON.stringify(prestamos, null, 2), 'utf-8');
}

// Función para mostrar el menú principal
function mostrarMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'opcion',
        message: 'Seleccione una opción:',
        choices: ['Gestión de Usuarios', 'Gestión de Libros', 'Realizar Préstamo', 'Salir'],
      },
    ])
    .then((respuestas) => {
      switch (respuestas.opcion) {
        case 'Gestión de Usuarios':
          gestionarUsuarios();
          break;
        case 'Gestión de Libros':
          gestionarLibros();
          break;
        case 'Realizar Préstamo':
          realizarPrestamo();
          break;
        case 'Salir':
          guardarDatos();
          console.log('Gracias por usar la biblioteca. ¡Adiós!');
          process.exit(0);
          break;
        default:
          console.log('Opción no válida.');
          mostrarMenu();
          break;
      }
    });
}

// Funciones para gestionar usuarios
function gestionarUsuarios() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'opcionUsuarios',
        message: 'Seleccione una opción:',
        choices: ['Crear Usuario', 'Listar Usuarios', 'Editar Usuario', 'Eliminar Usuario', 'Volver al Menú Principal'],
      },
    ])
    .then((respuestas) => {
      switch (respuestas.opcionUsuarios) {
        case 'Crear Usuario':
          crearUsuario();
          break;
        case 'Listar Usuarios':
          listarUsuarios();
          break;
        case 'Editar Usuario':
          editarUsuario();
          break;
        case 'Eliminar Usuario':
          eliminarUsuario();
          break;
        case 'Volver al Menú Principal':
          mostrarMenu();
          break;
        default:
          console.log('Opción no válida.');
          gestionarUsuarios();
          break;
      }
    });
}

function crearUsuario() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'nombre',
        message: 'Nombre del usuario:',
      },
    ])
    .then((respuestas) => {
      const nuevoUsuario: Usuario = {
        id: usuarios.length + 1,
        nombre: respuestas.nombre,
        penalizacion: 0,
      };
      usuarios.push(nuevoUsuario);
      guardarDatos();
      console.log(`Usuario ${nuevoUsuario.nombre} creado con éxito.`);
      gestionarUsuarios();
    });
}

function listarUsuarios() {
  console.log('Lista de Usuarios:');
  usuarios.forEach((usuario) => {
    console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Penalización: ${usuario.penalizacion}`);
  });
  gestionarUsuarios();
}

function editarUsuario() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: 'ID del usuario a editar:',
      },
      {
        type: 'input',
        name: 'nuevoNombre',
        message: 'Nuevo nombre del usuario:',
      },
    ])
    .then((respuestas) => {
      const idUsuario = parseInt(respuestas.id);
      const usuarioEditado = usuarios.find((usuario) => usuario.id === idUsuario);
      if (usuarioEditado) {
        usuarioEditado.nombre = respuestas.nuevoNombre;
        guardarDatos();
        console.log(`Usuario ${idUsuario} editado con éxito.`);
      } else {
        console.log(`No se encontró ningún usuario con ID ${idUsuario}.`);
      }
      gestionarUsuarios();
    });
}

function eliminarUsuario() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: 'ID del usuario a eliminar:',
      },
    ])
    .then((respuestas) => {
      const idUsuario = parseInt(respuestas.id);
      const indiceUsuario = usuarios.findIndex((usuario) => usuario.id === idUsuario);
      if (indiceUsuario !== -1) {
        usuarios.splice(indiceUsuario, 1);
        guardarDatos();
        console.log(`Usuario ${idUsuario} eliminado con éxito.`);
      } else {
        console.log(`No se encontró ningún usuario con ID ${idUsuario}.`);
      }
      gestionarUsuarios();
    });
}

// Funciones para gestionar libros
function gestionarLibros() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'opcionLibros',
        message: 'Seleccione una opción:',
        choices: ['Crear Libro', 'Listar Libros', 'Editar Libro', 'Eliminar Libro', 'Volver al Menú Principal'],
      },
    ])
    .then((respuestas) => {
      switch (respuestas.opcionLibros) {
        case 'Crear Libro':
          crearLibro();
          break;
        case 'Listar Libros':
          listarLibros();
          break;
        case 'Editar Libro':
          editarLibro();
          break;
        case 'Eliminar Libro':
          eliminarLibro();
          break;
        case 'Volver al Menú Principal':
          mostrarMenu();
          break;
        default:
          console.log('Opción no válida.');
          gestionarLibros();
          break;
      }
    });
}

function crearLibro() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'titulo',
        message: 'Título del libro:',
      },
    ])
    .then((respuestas) => {
      const nuevoLibro: Libro = {
        id: libros.length + 1,
        titulo: respuestas.titulo,
        disponible: true,
      };
      libros.push(nuevoLibro);
      guardarDatos();
      console.log(`Libro "${nuevoLibro.titulo}" creado con éxito.`);
      gestionarLibros();
    });
}

function listarLibros() {
  console.log('Lista de Libros:');
  libros.forEach((libro) => {
    console.log(`ID: ${libro.id}, Título: ${libro.titulo}, Disponible: ${libro.disponible ? 'Sí' : 'No'}`);
  });
  gestionarLibros();
}

function editarLibro() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: 'ID del libro a editar:',
      },
      {
        type: 'input',
        name: 'nuevoTitulo',
        message: 'Nuevo título del libro:',
      },
    ])
    .then((respuestas) => {
      const idLibro = parseInt(respuestas.id);
      const libroEditado = libros.find((libro) => libro.id === idLibro);
      if (libroEditado) {
        libroEditado.titulo = respuestas.nuevoTitulo;
        guardarDatos();
        console.log(`Libro ${idLibro} editado con éxito.`);
      } else {
        console.log(`No se encontró ningún libro con ID ${idLibro}.`);
      }
      gestionarLibros();
    });
}

function eliminarLibro() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: 'ID del libro a eliminar:',
      },
    ])
    .then((respuestas) => {
      const idLibro = parseInt(respuestas.id);
      const indiceLibro = libros.findIndex((libro) => libro.id === idLibro);
      if (indiceLibro !== -1) {
        libros.splice(indiceLibro, 1);
        guardarDatos();
        console.log(`Libro ${idLibro} eliminado con éxito.`);
      } else {
        console.log(`No se encontró ningún libro con ID ${idLibro}.`);
      }
      gestionarLibros();
    });
}

// Función para realizar préstamo
function realizarPrestamo() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'usuarioId',
        message: 'ID del usuario que realiza el préstamo:',
      },
      {
        type: 'input',
        name: 'libroId',
        message: 'ID del libro a prestar:',
      },
    ])
    .then((respuestas) => {
      const usuarioId = parseInt(respuestas.usuarioId);
      const libroId = parseInt(respuestas.libroId);

      const usuario = usuarios.find((u) => u.id === usuarioId);
      const libro = libros.find((l) => l.id === libroId);

      if (!usuario) {
        console.log(`Usuario con ID ${usuarioId} no encontrado.`);
      } else if (!libro) {
        console.log(`Libro con ID ${libroId} no encontrado.`);
      } else if (usuario.penalizacion > 0) {
        console.log(`El usuario ${usuario.nombre} tiene una penalización y no puede realizar préstamos.`);
      } else if (!libro.disponible) {
        console.log(`El libro "${libro.titulo}" no está disponible para préstamo.`);
      } else {
        const fechaInicio = new Date();
        const fechaDevolucion = new Date();
        fechaDevolucion.setDate(fechaInicio.getDate() + 7);

        const nuevoPrestamo: Prestamo = {
          usuarioId,
          libroId,
          fechaInicio,
          fechaDevolucion,
        };

        prestamos.push(nuevoPrestamo);
        libro.disponible = false;

        console.log(`Préstamo realizado con éxito.`);
        console.log(`Fecha de inicio: ${fechaInicio.toISOString()}`);
        console.log(`Fecha de devolución: ${fechaDevolucion.toISOString()}`);
      }

      mostrarMenu();
    });
}

// Iniciar la aplicación
cargarDatos();
mostrarMenu();
