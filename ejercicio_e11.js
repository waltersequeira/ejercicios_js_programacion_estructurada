let numeros = [5, 2, 9, 1, 7];

// Orden ascendente
numeros.sort((a, b) => a - b);
console.log(numeros);

// Orden descendente
numeros.sort((a, b) => b - a);
console.log(numeros);

// Arreglos de cadenas
let frutas = ["banana", "manzana", "maranja", "uva", "kiwi", "anona"];
frutas.sort();
console.log(frutas);

// Orden alfabetico inverso
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas);

let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];

personas.sort((a, b) => b.edad - a.edad);
console.log(personas);

personas.sort((a, b) => b.nombre.localeCompare(a.nombre));
console.log(personas);

let numeros2 = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros2);

let palabras2 = ["hola", "mundo", "javascript"];
palabras2.reverse();
console.log(palabras2);

let calificaciones = [
    {estudiante: "Walter", asignatura: "Matematica", calificacion: 60},
    {estudiante: "Xiomara", asignatura: "Historia", calificacion: 100},
    {estudiante: "Camilo", asignatura: "Español", calificacion: 80},
    {estudiante: "Ramiro", asignatura: "Fisica", calificacion: 55},
    {estudiante: "Ana", asignatura: "Quimica", calificacion: 77}
];

calificaciones.sort((a, b) => a.calificacion - b.calificacion);
console.log(calificaciones);

calificaciones.sort((a, b) => b.asignatura.localeCompare(a.asignatura));
console.log(calificaciones);

// Ejercicio 1
let numero = [10, 3, 8, 1, 6];

numero.sort((a, b) => a - b);
console.log(numero);

// Ejercicio 2
let animales = ["perro", "gato", "elefante", "ardilla"];
animales.sort();
console.log(animales);

// Ejercicio 3
let puntaje = [
    { nombre: "Luis", puntaje: 85 },
    { nombre: "Marta", puntaje: 92},
    { nombre: "Sofia", puntaje: 78}
];

let ordenadoPorPuntaje = [...puntaje].sort((a, b) => b.puntaje - a.puntaje);
console.log(ordenadoPorPuntaje);

// Ejercicio 4
let numeros3 = [4, 9, 2, 7, 5];
numeros3.reverse();
console.log(numeros3);

// Ejercicio 5
let precio = [
    { producto: "Laptop", precio: 1200 },
    { producto: "Telefono", precio: 800},
    { Producto: "Tableta", precio: 500 }
];

let ordenarPorPrecio = [...precio].sort((a, b) => a.precio - b.precio);
console.log(precio);

// Ejercio 6
let fruta = ["manzana", "banana", "kiwi", "fresa"];
fruta.sort();
console.log(fruta);