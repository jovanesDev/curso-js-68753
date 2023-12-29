console.log('Hola desde funciones')

function saludar() {
    alert('Hola Mundo !!')
}

// function sumar(num1,num2){
//         return num1 + num2

// }

// function saludar(nombre) {
//     alert('Hola ' + nombre)
// }

// function tomarLosDatos () {
//     let nombre = prompt("Tu nombre ?")
//     let apellido = prompt("Tu Apellido ?")
//     let edad = prompt("Tu Edad ?")
//     let email = prompt("Tenes email ? ")

//     let user = {
//         nombre,
//         apellido,
//         edad,
//         email
//     }

//     return user
// }

// function main() {
//     const user = tomarLosDatos()
//     if(!user.nombre || !user.apellido || !user.edad ){
//        console.log('Algunos datos te faltaron')
//         main()
//     }else {
//         saludar(user.nombre)
//         console.log(user)
//     }
// }

//main()

// const totalDeSuma = sumar(1,2)
// console.log(totalDeSuma)


// let nombresAleatorios = [
//     "Sofía",
//     "Mateo",
//     "Valentina",
//     "Sebastián",
//     "Isabella",
//     "Liam",
//     "Mía",
//     "Benjamín",
//     "Camila",
//     "Lucas"
//   ];
//   let animalesAleatorios = [
//     "León",
//     "Jirafa",
//     "Tigre",
//     "Cebra",
//     "Elefante",
//     "Oso",
//     "Koala",
//     "Pingüino",
//     "Tortuga",
//     "Lobo"
//   ];

//   function nombresNumerados (array) {
//     let resultado = []
//     for (let i = 0; i < array.length; i++) {
//         let persona = {
//             nombre:array[i],
//             numero:i+1
//         }
//         resultado.push(persona)
        
//     }
//     return resultado
//   }




//   const personasNumeradas = nombresNumerados(nombresAleatorios);
//   const animalesNumeradas = nombresNumerados(animalesAleatorios)
//   console.log(personasNumeradas)
//   console.log(animalesNumeradas)



//   /// Ejercicio 

//   function asignarAnimalPersona(personas,animales) {
//     animales = animales.reverse()
//     let resultado = [];
//     for (let i = 0; i < 10; i++) {
//         let objeto = {
//             nombre:personas[i],
//             animal:animales[i]
//         }
//         resultado.push(objeto)
//     }
//     return resultado
//   }

//   const personaConAnimales = asignarAnimalPersona(nombresAleatorios,animalesAleatorios);



// **** arrow function 
// const restar = (a,b) => {
//     return (a - b)
// }
// const total = restar(5,1) // 4
// console.log('total',total);


// **** Scope ****
// let nombre = "Jose Ignacio";
// let palabraSecreta = "Panqueque"


// function saludo(){
//         let palabraSecreta = "Pancho!"
//         console.log('Hola ' + nombre) // desde dentro de una funcion ! , si puedo acceder a una variable (global)

// }

// saludo()

// //console.log(palabraSecreta) // por Scope de afuera no puedo acceder a una variable local 


// Params and Arguments default 

// function saludo (nombre="Pepe"){

//         console.log('Hola ' + nombre)
// }

// saludo() // output => Hola Pepe , por que falto el param y tomo por defecto Pepe 
// saludo("Profe")// output => Hola Profe , por que  el param estoy pasando Profe 






 