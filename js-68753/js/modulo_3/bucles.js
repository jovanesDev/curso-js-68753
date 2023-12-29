console.log('Hola desde bucles')

let numeros = [];
let nombresAleatorios = [
    "Sofía",
    "Mateo",
    "Valentina",
    "Sebastián",
    "Isabella",
    "Liam",
    "Mía",
    "Benjamín",
    "Camila",
    "Lucas"
  ];

let nombresNumerados = []

////////////////////////////////////////////


console.log('---------------- for numeros creciendo ----------------------')

for(let i = 0; i < 10; i++ ){
    numeros.push(i)
}

console.log(numeros)


console.log('---------------- for numeros reduciendo ----------------------')

for(let i = 10; i > 0; i-- ){
    numeros.push(i)
}

console.log(numeros)

////////////////////////////////////////////


console.log('---------- for nombres objeto ----------')

for(let i = 0; i < nombresAleatorios.length; i++ ){
    let objeto = {
        numero:i+1,
        nombre:nombresAleatorios[i]
    }
    nombresNumerados.push(objeto)
}

console.log(nombresNumerados)


////////////////////////////////////////////


console.log('---------------- for nombres aleatorios ----------------------')

for(let i = 0; i < nombresAleatorios.length; i++ ){
    console.log(`${nombresNumerados[i].numero} - ${nombresNumerados[i].nombre} `)
}

////////////////////////////////////////////


console.log('---------------- while ----------------------')

let num1 = 10;
let num2 = 0;

while(num1 !== num2) {
    num2++
    console.log(num2)
}

console.log(`num1 ${num1} y num2 ${num2}`)
////////////////////////////////////////////


console.log('---------------- for or ----------------------')
let numeros_zero = [1,2,3,4,5] // 2,3,4,5,6

for( let valor of numeros_zero) {
    valor = valor + 1;
    console.log(valor)
}

