console.log('Hola desde Arrays')

let nombres = ["Jose","Antonio","Mariano","Lucia"]; // un array de strings
const booleanos = [true,true,false,true,false,false,false,true] // un array de booleanos
const numeros = [1,2,3,4,5,6,7,8,9] // un arrya de numeros 
const arrayMixto = [1,"Jose",true,false,4,"Antonio",10] // un array mixto 

// la posicion del array arranca de 0
const jose = nombres[0]  // Jose 
const antonio = nombres[1]  // Antonio 
const mariano = nombres[2] // Mariano 
// etc 

const verdadero = booleanos[0] // true 
const falso = booleanos[2] // false 


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


// 5. Slice 
console.info('nombres antes del slice')
console.table(nombres)
// de que posicion a que posicion quiero recortar el array 
nombres = nombres.slice(0,2);
console.info('nombres despues del slice')
console.table(nombres)