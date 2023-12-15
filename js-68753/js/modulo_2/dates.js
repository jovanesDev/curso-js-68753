console.log("Hola desde dates.js");

const nombreApellido = prompt("Nombre y Apellido");
const turnoPara = prompt("Para que empresa es el turno ? ");
let diaNoFormateado = parseInt(prompt('Indique el dia '))
let mesNoFormateado = parseInt(prompt('Indique el mes ')) - 1
let anioNoFormateado = parseInt(prompt('Indique el anio '))

const initialTurno = new Date (anioNoFormateado,mesNoFormateado,diaNoFormateado)
console.log(initialTurno)

let mesFormateado = ''
switch (mesNoFormateado) {
    case 0:
        mesFormateado = 'enero'
        break
    case 1:
        mesFormateado = 'febrero'
        break
    case 2:
        mesFormateado = 'marzo'
        break
    case 3:
        mesFormateado = 'abril'
        break
    case 4:
        mesFormateado = 'mayo'
        break
    case 5:
        mesFormateado = 'junio'
        break
    case 6:
        mesFormateado = 'julio'
        break
    case 7:
        mesFormateado = 'agosto'
        break
    case 8:
        mesFormateado = 'septiembre'
        break
    case 9:
        mesFormateado = 'octubre'
        break
    case 10:
        mesFormateado = 'noviembre'
        break
    case 11:
        mesFormateado = 'diciembre'
        break
    default:
        break;
}
console.log(mesFormateado)

let semanaFormateada = ''

switch (initialTurno.getDay()) {
    case 0:
        semanaFormateada = 'domingo'
        break
    case 1:
        semanaFormateada = 'lunes'
        break
    case 2:
        semanaFormateada = 'martes'
        break
    case 3:
        semanaFormateada = 'miercoles'
        break
    case 4:
        semanaFormateada = 'jueves'
        break
    case 5:
        semanaFormateada = 'viernes'
        break
    case 6:
        semanaFormateada = 'sabado'
        break
    default:
        break;
}

console.log(semanaFormateada)


 const turnoConfirmado = `${semanaFormateada} ${diaNoFormateado} de ${mesFormateado} , ${anioNoFormateado}`;
 alert(turnoConfirmado)


// const initialTurno = prompt("Para que fecha prefiere");
// const opciones = {
//   mes: { month: "long" },
//   semana: { weekday: "long" },
//   dia: { day: "numeric" },
//   anio: { year: "numeric" },
// };

// const diaDelTurno = new Date(initialTurno);

// debugger;
// const semanaFormateado = diaDelTurno.toLocaleString("es-AR", opciones.semana);
// const diaFormateado = diaDelTurno.toLocaleString("es-AR", opciones.dia);
// const mesFormateado = diaDelTurno.toLocaleString("es-AR", opciones.mes);
// const anioFormateado = diaDelTurno.toLocaleString("es-AR", opciones.anio);

// const turnoConfirmado = `${semanaFormateado} ${diaFormateado} de ${mesFormateado} , ${anioFormateado}`;

// const turno = new Date(diaDelTurno);
// console.log(turnoConfirmado);
