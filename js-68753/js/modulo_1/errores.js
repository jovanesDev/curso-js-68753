console.log('Desde errores.js')

// Tipos de Errores 

// 1) Error de tipo syntaxis 
// console.log("


// ")
// PD : puede descomentar para probar XD 
// En la consola me aparecera un mensaje descriptivo como =>  Uncaught SyntaxError:

// 2) Error de tipo logico
//console.log(nombre) // intento a imprimir variable que no existe 
// En la consola me aparecera un mensaje descriptivo como => Uncaught ReferenceError: nombre is not defined
// otro ejemplo 
// const valor = "GG"
// valor = "TT"
// Error de tipo logico (No puedo cambiar el valor de constante)
// En la consola me aparecera un mensaje descriptivo como => Uncaught TypeError: Assignment to constant variable.
// #ProfeTips: siempre junto con error aparecera la linea de codigo donde se pincho (ej:errores.js:19)
// Donde la primera parte pertence al archivo y se separa con : la linea de codigo (en este caso 19)


// try y catch (intentar a resolver lo o captar error)
try {
    // aca voy a intentar a resolver la logica
    let nombre = "Pedro"
    const resultado = 1 + nombre
    console.log(resultado,"Esto es el resultado del try")
} catch (error) {
    // si en logica hubo algo mal y el try no pudo resolver lo caera aca el error
    console.log('-----------------------------')
    console.log('Cayo en el catch la logica del try por que habia error')
    console.log("Hubo un error " + " " + error.message)
}

// Conclucion si en el try las cosas va bien , se ignora el catch 
// pero si hubo un error , entraria al catch !! 
// PD: Probar comentando la linea 29 , la variable nombre 