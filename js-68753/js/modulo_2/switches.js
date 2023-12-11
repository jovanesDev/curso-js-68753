
const Jefe = "Santiago Finacci"
const RRHH = "Valeria Mozzati"
const Soporte = "Mariano Cohen"

const nombre_de_usuario = prompt("Como te llamas");

// switch (nombre_de_usuario) {
//     case Jefe:
//         alert('Bienvenido Jefe')
//         break;
//     case RRHH :
//         alert ('Bienvenido RRHH')
//         break;
//     case Soporte :
//         alert('Bienvenido Soporte')
//         break;
//     default:
//         alert('Usuario no esta registrado')
//         break;
// }
switch (nombre_de_usuario) {
        case Jefe:
        case RRHH :
        case Soporte :
            alert('El usuario esta registrado  !!! ')
            break;
        default:
            alert('Usuario no esta registrado !!! ')
            break;
    }



console.log('Hola desde Switches')