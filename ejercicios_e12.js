const mascotas = [
    { nombre: "Luna", edad: 3, tipo: "Perro", peso: 10.5},
    { nombre: "Max", edad: 5, tipo: "Gato", peso: 4.2},
    { nombre: "Coco", edad: 1, tipo: "Conejo", peso: 2.3},
    { nombre: "Rocky", edad: 7, tipo: "Perro", peso: 15.6},
    { nombre: "Milo", edad: 2, tipo: "Gato", peso: 3.9},
    { nombre: "Bella", edad: 4, tipo: "Perro", peso: 8.7},
    { nombre: "Toby", edad: 6, tipo: "Conejo", peso: 2.8},
    { nombre: "Simba", edad: 3, tipo: "Gato", peso: 5.1},
    { nombre: "Nala", edad: 2, tipo: "Perro", peso: 12.4},
    { nombre: "Oreo", edad: 5, tipo: "Gato", peso: 4.8},
    { nombre: "Daisy", edad: 1, tipo: "Conejo", peso: 1.9},
    { nombre: "Zeus", eada: 8, tipo: "Perro", peso: 20.1},
    { nombre: "Mimi", edad: 4, tipo: "Gato", peso: 4.5},
    { nombre: "Bunny", edad: 3, tipo: "Conejo", peso: 2.5},
    { nombre: "Thor", edad: 6, tipo: "Perro", peso: 18.3}
];

// 1. Ordenar las mascotas por  de forma ascendente usando sort
mascotas.sort((a, b) => a.tipo.localeCompare(b.tipo));
console.log(mascotas);

// 2. Ordenar las mascotas por  de forma alfabética usando sort
const mascotasPorNombre = [...mascotas].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Por nombre alfabetico", mascotasPorNombre);

// 3. Ordenar las mascotas por  de forma descendente usando sort
const mascotasPorPesoDesc = [...mascotas].sort((b, a) => b.peso - a.peso);
console.log("Por peso descendente", mascotasPorPesoDesc);

// 4. Ordenar las mascotas por  alfabéticamente y, si tienen el mismo tipo, por  ascendente usando sort
mascotas.sort((a, b) => a.nombre.localeCompare(b.nombre));
mascotas.sort((a, b) => a.tipo.localeCompare(b.tipo));
console.log(mascotas);

// 5. Invertir el orden del arreglo de mascotas usando reverse
const mascotasPorInvertir = [...mascotas].sort((a, b) => a.nombre - b.nombre);
mascotas.reverse();
console.log(mascotas);

//  6. Crear un nuevo arreglo con los nombres de las mascotas en mayúsculas usando map.
let nombresMayusculas = mascotas.map(mascotas => mascotas.nombre.toLocaleUpperCase());
console.log(nombresMayusculas);

// 7. Calcular el peso total de todas las mascotas usando reduce
let pesoTotal = mascotas.reduce((total, mascotas) => total + mascotas.peso, 0);
console.log(pesoTotal);

// 8. Crear un nuevo arreglo con solo las mascotas que son perros usando filter
let soloPerros = mascotas.filter(mascotas => mascotas.tipo === "Perro");
console.log(soloPerros);