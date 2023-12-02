console.log('Hola desde operadores-booleanos')

let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

console.log('--------------------')
console.log(`
let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
`)
console.log('--------------------')
console.log('Casos con && (Y')
console.log("1) ( (num1 < num2) && (num3 > num4) )",( (num1 < num2) && (num3 > num4) ) ) // => false 
console.log("2) ( (num3 > num4) &&  (num1 < num2) ) )",( (num3 > num4) &&  (num1 < num2) ) ) // => false 
console.log("3) ( (num1 >  num2) && (num3 > num4) ) )",( (num1 >  num2) && (num3 > num4) ) ) // => false 
console.log("4) ( (num1 <  num2) && (num3 < num4) )",( (num1 <  num2) && (num3 < num4) ) ) // => true


console.log('--------------------')
console.log('Casos con || (O)')
console.log("1) ( (num1 < num2) || (num3 > num4) )",( (num1 < num2) || (num3 > num4) ) ) // => true
console.log("2) ( (num3 > num4) ||  (num1 < num2) ) )",( (num3 > num4) ||  (num1 < num2) ) ) // => true 
console.log("3) ( (num1 >  num2) || (num3 > num4) ) )",( (num1 >  num2) || (num3 > num4) ) ) // => false 
console.log("4) ( (num1 <  num2) || (num3 < num4) )",( (num1 <  num2) || (num3 < num4) ) ) // => true

// && -> "Y" 
// || -> "O"

// La tabla de comparacion del Y (&&)
// 1) true && false => false/falso
// 2) false && true => false/falso
// 3) false && false => false/falso
// 4) true && true => true/verdadero 


// La tabla de comparacion del O (||)
// 1) true || false => true/verdadero 
// 2) false || true => true/verdadero 
// 3) false || false => false/falso 
// 4) true || true => true/verdadero 

