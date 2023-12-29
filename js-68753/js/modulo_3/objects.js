console.log('Hola desde Objects')
// En los objetos se puede guardar varios parametros
// se divide en key y value , y se asigna con los dos puntos (:)
// de lado izquierdo seria la key y lado derecho su valor

let jugador = {
    nombre:"Lionel",
    apellido:'Messi',
    campeon_del_mundo:true,
    club_actual:'Miami Inter',
    pais:"Argentina",
    pais_de_residencia:"EE.UU",
    hijos:["Thiago","Ciro","Mateo"]
}

let jugadores = [
    {
        nombre:"Lionel",
        apellido:'Messi',
        pais:"Argentina",
    },
    {
        nombre:"Angel",
        apellido:'Di Maria',
        pais:"Argentina",
    },
    {
        nombre:"Kun",
        apellido:'Aguero',
        pais:"Argentina",
    },
]

console.table(jugadores[2].nombre)

// // El metodo para acceder a los parametros/llave/key
// // Es con un punto (.)
// console.log(jugador.nombre) // esto me imprimiria Lionel
// console.log(jugador.apellido) // esto me imprimiria Messi
// console.log(jugador.campeon_del_mundo) // esto me imprimiria true
// console.log(jugador.hijos) // esto me imprimiria ["Thiago","Ciro","Mateo"]
// console.table(jugador)
