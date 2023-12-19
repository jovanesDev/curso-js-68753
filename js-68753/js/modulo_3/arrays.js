console.log("Hola desde Arrays");

let nombres = ["Jose", "Antonio", "Mariano", "Lucia"]; // un array de strings
// const booleanos = [true,true,false,true,false,false,false,true] // un array de booleanos
// const numeros = [1,2,3,4,5,6,7,8,9] // un arrya de numeros
// const arrayMixto = [1,"Jose",true,false,4,"Antonio",10] // un array mixto

// // la posicion del array arranca de 0
// const jose = nombres[0]  // Jose
// const antonio = nombres[1]  // Antonio
// const mariano = nombres[2] // Mariano
// // etc
// const verdadero = booleanos[0] // true
// const falso = booleanos[2] // false

// console.log(nombres)
// console.log(nombres[9],'posicion 9 de nombres')
// console.log('cantaidad de nombres',nombres.length)
// console.table(nombres)

// METODOS BASICOS DE MANIPULACION

// 1. Push
// console.info('nombres antes del push')
// console.table(nombres)
// nombres.push("Malena")
// console.info('nombres despues del push')
// console.table(nombres)

// 2. Unshift
// console.info('nombres antes del unshift')
// console.table(nombres)
// nombres.unshift("Malena")
// console.info('nombres despues del unshift')
// console.table(nombres)

// 3. Pop
// console.info('nombres antes del pop')
// console.table(nombres)
// nombres.pop()
// console.info('nombres despues del pop')
// console.table(nombres)

// 4. Shift
// console.info('nombres antes del shift')
// console.table(nombres)
// nombres.shift()
// console.info('nombres despues del shift')
// console.table(nombres)

// // 5. Slice
// console.info('nombres antes del slice')
// console.table(nombres)
// // de que posicion a que posicion quiero recortar el array
// nombres = nombres.slice(0,2);
// console.info('nombres despues del slice')
// console.table(nombres)

// 5. Splice
// console.info('nombres antes del splice')
// console.table(nombres)
// // sirve para reemplazar el elemento en mi array o agregar lo si no existe
// nombres = nombres.splice(4, 0, 'May');
// console.info('nombres despues del splice')
// console.table(nombres)

//5. indexOf
// console.info('nombres antes del indexOf')
// console.table(nombres)
// // esta buscando en mi array si existe o no , en el caso de que exista devuelve la posicion caso contrario -1
// nombres = nombres.indexOf('Sergio');
// console.info('nombres despues del indexOf')
// console.log(nombres)

//6. includes
// console.info('nombres antes del includes')
// console.table(nombres)
// // devuelve booleano dependiendo si la info que buscamos se encuentra en mi array o no !
// nombres = nombres.includes('Sergio');
// console.info('nombres despues del includes')
// console.log(nombres)

//7. concat
// Array de países de América Latina
// const paisesLatinoamerica = [
//   "Argentina",
//   "Bolivia",
//   "Brasil",
//   "Chile",
//   "Colombia",
//   "Costa Rica",
//   "Cuba",
//   "Ecuador",
//   "El Salvador",
//   "Guatemala",
//   "Honduras",
//   "México",
//   "Nicaragua",
//   "Panamá",
//   "Paraguay",
//   "Perú",
//   "República Dominicana",
//   "Uruguay",
//   "Venezuela",
// ];

// // Array de países de América del Norte
// const paisesNorteamerica = ["Canadá", "Estados Unidos", "México"];
// // une 2 arrays en una 
// const resultado = paisesLatinoamerica.concat(paisesNorteamerica)
// console.log(resultado);


//8. join
// console.info('nombres antes del join')
// console.table(nombres)
// // convierte un array en un texto , y lo que pongas entre parentesis , usara para la separacion
// nombres = nombres.join('-');
// console.info('nombres despues del join')
// console.log(nombres)



//9. sort
// console.info('nombres antes del sort')
// console.table(nombres)
// // convierte un array en un texto , y lo que pongas entre parentesis , usara para la separacion
// nombres = nombres.sort();
// console.info('nombres despues del sort')
// console.log(nombres)

//10. reverse
// console.info('nombres antes del reverse')
// console.table(nombres)
// // convierte un array en un texto , y lo que pongas entre parentesis , usara para la separacion
// nombres = nombres.reverse();
// console.info('nombres despues del reverse')
// console.table(nombres)


// 1. Push +
// 2. Unshift
// 3. Pop + 
// 4. Shift +
// 5. Slice
// 6. Splice
// 7. indexOf
// 8. includes
// 9. concat
// 10. join + 
// 11. sort
// 12. reverse