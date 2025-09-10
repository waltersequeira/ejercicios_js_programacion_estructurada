//Ejercico1
let agregarElemento = (arreglo, elementos) => {
    arreglo.push(elementos);
    return nuevoArreglo;
}

let numeros = [1, 2, 3];
console.log(agregarElemento(numeros, 8));

//Ejercicio2
let agregarElementoInicio = (arreglo, elementos) => {
    arreglo.unshift(elementos);
    return arreglo;
}

let numeros2 = [1, 2, 3];
console.log(agregarElementoInicio(numeros2, 0));

//Ejercico3
let eliminarElementoFinal = (arreglo) => {
    let ultimo = arreglo.pop();
    return ultimo;
}

let numeros3 = [24, 32, 89, 51];
console.log(eliminarElementoFinal(numeros3));

//Ejercicio4
let eliminarElementoInicio = (arreglo, elementos) => {
    let primerElemento = arreglo.shift();
    return arreglo;
}

let frutas = ['manzana', 'banana', 'pera', 'kiwi'];
console.log(eliminarElementoInicio(frutas));
console.log(frutas);

//Ejercicio5
const encontrarIndice = (arreglo, elemento, inicio = 0) => {
    for (let i = inicio; i < arreglo.length; i++) {
        if (arreglo[i] === elemento) {
            return 1;
        }
        
    }
    return -1;
};

console.log(encontrarIndice([10, 20, 30, 40], 50));

//Ejercicio6
const contarElementos = (arreglo) => {
    let contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        contador++;
    }
    return contador;
}

console.log(contarElementos([1,2,3]));

//Ejercicio7








//Ejercicio8
const unirElementos = (arreglo, separado) => {
    let resultado = '';
    for (let i = 0; i < arreglo.length; i++) {
        resultado += arreglo[i];
        if (i < arreglo.length - 1) resultado += separado;
    }
    return resultado;
}

console.log(unirElementos(['a', 'b', 'c'], '-'));

//Ejercicio9
const combinar = (...items) => {
    let resultado = [];
    for (let i = 0; i < items.length; i++) {
        if (Array.isArray(items[i])) {
            for (let j = 0; j < items[i].length; j++) {
                resultado.push(items[i][j]);
            }
        } else {
            resultado.push(items[i]);
        }
    }
    return resultado;
};

console.log(combinar([1, [2, 3]], 4));

//Ejercicio10
const porCada = (arreglo, callback) => {
  for (let i = 0; i < arreglo.length; i++) {
    callback(arreglo[i]);
  }
};

console.log(porCada(['hola', 'mundo'], (elem) => console.log('Elemento: ' + elem)));

//Ejercicio11
const mapear = (arr, callback) => {
  const nuevo = [];
  for (let elem of arr) {
    nuevo.push(callback(elem));
  }
  return nuevo;
};

console.log(mapear([1, 2, 3], (x) => x * 2));

//Ejercicio12
const filtrar = (arr, callback) => {
  const nuevo = [];
  for (let elem of arr) {
    if (callback(elem)) nuevo.push(elem);
  }
  return nuevo;
};

console.log(filtrar([1, 2, 3, 4], (x) => x > 2));

//Ejercicio13
const reducir = (arr, callback, inicial = arr[0]) => {
  let acum = inicial;
  let start = inicial === arr[0] ? 1 : 0;
  for (let i = start; i < arr.length; i++) {
    acum = callback(acum, arr[i]);
  }
  return acum;
};

console.log(reducir([1, 2, 3], (a, b) => a + b, 0));