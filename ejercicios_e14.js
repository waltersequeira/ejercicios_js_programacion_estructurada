const productos = [
{ id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200, stock: 10 },
{ id: 2, nombre: "Celular", categoria: "Electrónica", precio: 800, stock: 25 },
{ id: 3, nombre: "Teclado", categoria: "Accesorios", precio: 50, stock: 100 },
{ id: 4, nombre: "Mouse", categoria: "Accesorios", precio: 30, stock: 150 },
{ id: 5, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 20 },
{ id: 6, nombre: "Silla Gamer", categoria: "Muebles", precio: 250, stock: 5 },
{ id: 7, nombre: "Escritorio", categoria: "Muebles", precio: 400, stock: 8 },
{ id: 8, nombre: "Audífonos", categoria: "Accesorios", precio: 70, stock: 60 },
{ id: 9, nombre: "Tablet", categoria: "Electrónica", precio: 600, stock: 12 },
{ id: 10, nombre: "Impresora", categoria: "Electrónica", precio: 200, stock: 15 },
{ id: 11, nombre: "Cámara", categoria: "Electrónica", precio: 1000, stock: 7 },
{ id: 12, nombre: "Smartwatch", categoria: "Electrónica", precio: 250, stock: 18 },
{ id: 13, nombre: "Parlante", categoria: "Accesorios", precio: 120, stock: 30 },
{ id: 14, nombre: "Microondas", categoria: "Electrodomésticos", precio: 180, stock: 12 },
{ id: 15, nombre: "Refrigeradora", categoria: "Electrodomésticos", precio: 900, stock: 4 },
{ id: 16, nombre: "Lavadora", categoria: "Electrodomésticos", precio: 700, stock: 6 },
{ id: 17, nombre: "Secadora", categoria: "Electrodomésticos", precio: 650, stock: 3 },
{ id: 18, nombre: "Cafetera", categoria: "Electrodomésticos", precio: 90, stock: 25 },
{ id: 19, nombre: "Ventilador", categoria: "Electrodomésticos", precio: 60, stock: 40 },
{ id: 20, nombre: "Licuadora", categoria: "Electrodomésticos", precio: 110, stock: 22 },
{ id: 21, nombre: "Cama", categoria: "Muebles", precio: 800, stock: 2 },
{ id: 22, nombre: "Ropero", categoria: "Muebles", precio: 500, stock: 3 },
{ id: 23, nombre: "Estufa", categoria: "Electrodomésticos", precio: 750, stock: 5 },
{ id: 24, nombre: "Horno", categoria: "Electrodomésticos", precio: 400, stock: 6 },
{ id: 25, nombre: "Lámpara", categoria: "Accesorios", precio: 45, stock: 50 },
{ id: 26, nombre: "Router", categoria: "Electrónica", precio: 130, stock: 20 },
{ id: 27, nombre: "Disco Duro", categoria: "Electrónica", precio: 150, stock: 35 },
{ id: 28, nombre: "Memoria USB", categoria: "Accesorios", precio: 25, stock: 200 },
{ id: 29, nombre: "Cargador", categoria: "Accesorios", precio: 35, stock: 90 },
{ id: 30, nombre: "Proyector", categoria: "Electrónica", precio: 600, stock: 4 }
];

// Ejercicio 1: Crea una función flecha que reciba el arreglo y devuelva un nuevo arreglo solo con los nombres de todos los productos.
const obtenerNombres = arr => arr.map(p => p.nombre);
console.log("1. Nombres:", obtenerNombres(productos));

// Ejercicio 2: Crea una función flecha que reciba el arreglo y retorne todos los productos cuya categoría sea "Muebles".
const muebles = arr => arr.filter(p => p.categoria === "Muebles");
console.log("2. Muebles:", muebles(productos));

// Ejercicio 3: Crea una función flecha que reciba el arreglo y devuelva el primer producto cuyo precio sea mayor a 1000.
const Premayor = arr => arr.find(p => p.precio > 1000);
console.log("3. Precio > 1000:", Premayor(productos));

// Ejercicio 4: Crea una función flecha que reciba el arreglo y calcule el precio total de todo el inventario (precio × stock de cada producto).
const Inventario = arr => arr.reduce((acc, p) => acc + (p.precio * p.stock), 0);
console.log("4. Precio total inventario:", Inventario(productos));

// Ejercicio 5: Crea una función flecha que reciba el arreglo y determine si todos los productos tienen un stock mayor a 0.
const SPositivo = arr => arr.every(p => p.stock > 0);
console.log("5. ¿Todos stock > 0?:", SPositivo(productos));

// Ejercicio 6: Crea una función flecha que reciba el arreglo y verifique si al menos un producto pertenece a la categoría "Electrodomésticos".
const aElectro = arr => arr.some(p => p.categoria === "Electrodomésticos");
console.log("6. ¿Algún electrodoméstico?:", aElectro(productos));

// Ejercicio 7: Crea una función flecha que reciba el arreglo y devuelva una nueva lista de productos ordenada por precio de menor a mayor.
const ordenPorPrecio = arr => [...arr].sort((a, b) => a.precio - b.precio);
console.log("7. Ordenados por precio:", ordenPorPrecio(productos));

// Ejercicio 8: Crea una función flecha que reciba el arreglo y retorne los productos ordenados por nombre en orden alfabético inverso.
const ordenPorNombreInv = arr => [...arr].sort((a, b) => b.nombre.localeCompare(a.nombre));
console.log("8. Ordenados por nombre inverso:", ordenPorNombreInv(productos));

// Ejercicio 9: Crea una función flecha que reciba el arreglo y devuelva todos los productos cuyo stock sea menor a 10.
const stockBajo = arr => arr.filter(p => p.stock < 10);
console.log("9. Stock < 10:", stockBajo(productos));

// Ejercicio 10: Crea una función flecha que reciba el arreglo y obtenga el promedio de los precios de todos los productos.
const promedioPrecios = arr => arr.reduce((acc, p) => acc + p.precio, 0) / arr.length;
console.log("10. Promedio precios:", promedioPrecios(productos));