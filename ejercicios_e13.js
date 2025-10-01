const calificaciones = [80, 90, 70, 85, 95];

const suma = calificaciones.reduce((acc, num) => acc + cal, 0);

const promedio = suma / calificaciones.length;

console.log(promedio); // 84


const productos = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Pantalón", precio: 30 },
{ nombre: "Zapatos", precio: 50 }
];
const total = productos.reduce((acc, prod) => acc + prod.precio, 0);
console.log(total); // 100


const nombres = ["Ana", "Luis", "Pedro", "María"];

const encontrado = nombres.find(nombre => nombre.startsWith("P"));

console.log(encontrado); // "Pedro"

const edades = [25, 35, 51, 10, 8, 13];

const resultado = edades.find(e => e < 10);

console.log(resultado);

const usuarios = [
{ id: 1, nombre: "Carlos", salario: 20000 },
{ id: 2, nombre: "Lucía", salario: 17300  },
{ id: 3, nombre: "Marta", salario: 25000  },
{ id: 4, nombre: "Eliab", salario: 21000  },
{ id: 5, nombre: "Elyin", salario: 19000  },
];

const salariosBajos = usuarios.filter(u => u.salario < 20000);

console.log(salariosBajos);

// Metodo que devuelva el primer usuario cuyo salario sea mayor 15000

const usuarioEncontrado = usuarios.find(u => u.salario < 20000 && u.nombre.startsWith("E"));

console.log(usuarioEncontrado);

const todosSalariosAltos = usuarios.every(u => u.salario > 30000);

console.log(todosSalariosAltos);


const unoTieneMayorA22 = usuarios.some(u => u.salario > 22000);

console.log('Hay salario mayor a 20000');

const tareas = [
{ nombre: "Estudiar", completada: true },
{ nombre: "Ejercicio", completada: true },
{ nombre: "Leer", completada: false }
];
const todasCompletas = tareas.every(t => t.completada === true);
console.log(todasCompletas); // false


// Ejercicios de arreglos y evaluacion
const personas = [
  { id: 1, nombre: "Ana", edad: 17 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 3, nombre: "Marta", edad: 30 },
  { id: 4, nombre: "Pedro", edad: 15 },
  { id: 5, nombre: "Sofía", edad: 25 },
  { id: 6, nombre: "Diego", edad: 40 },
  { id: 7, nombre: "Carla", edad: 19 },
  { id: 8, nombre: "Jorge", edad: 33 },
  { id: 9, nombre: "Lucía", edad: 28 },
  { id: 10, nombre: "Raúl", edad: 16 },
  { id: 11, nombre: "Elena", edad: 21 },
  { id: 12, nombre: "Andrés", edad: 35 }
];

// 1. Personas con edad >= 18
const mayoresEdad = personas.filter(p => p.edad >= 18);
console.log("Mayores de edad:", mayoresEdad);

// 2. Primera persona cuyo nombre comience con "L"
const empiezaConL = personas.find(p => p.nombre.startsWith("L"));
console.log("Primera persona con L:", empiezaConL);

// 3. Suma total de edades
const sumaEdades = personas.reduce((acc, p) => acc + p.edad, 0);
console.log("Suma total de edades:", sumaEdades);

// 4. ¿Todos mayores o iguales a 15?
const todosMayores15 = personas.every(p => p.edad >= 15);
console.log("¿Todos >= 15?:", todosMayores15);

// 5. ¿Alguien con 40 años?
const hay40 = personas.some(p => p.edad === 40);
console.log("¿Hay alguien de 40?:", hay40);