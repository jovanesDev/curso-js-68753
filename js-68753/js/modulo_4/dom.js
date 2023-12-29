console.log('Hola desde dom')

const botonSaludar = document.querySelector('#saludar')
const botonTomarDatos = document.querySelector('#tomar-datos')
botonSaludar.addEventListener('click',saludar)
botonTomarDatos.addEventListener('click',main)

function saludar(nombre) {
    alert('Hola ' + nombre)
}

function tomarLosDatos () {
    let nombre = prompt("Tu nombre ?")
    let apellido = prompt("Tu Apellido ?")
    let edad = prompt("Tu Edad ?")
    let email = prompt("Tenes email ? ")

    let user = {
        nombre,
        apellido,
        edad,
        email
    }

    return user
}

function main() {
    const user = tomarLosDatos()
    if(!user.nombre || !user.apellido || !user.edad ){
       console.log('Algunos datos te faltaron')
        main()
    }else {
        saludar(user.nombre)
        console.log(user)
    }
}