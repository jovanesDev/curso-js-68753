const buttonAdd = document.querySelector('#boton-1');
const buttonRemove = document.querySelector('#boton-2');
const buttonShow = document.querySelector('#boton-3');
 let nombres = [];
//let nombres = ["Jose", "Antonio", "Mariano", "Lucia"];


// // sistema para agregar nombres a travez de un modal
// function addNameWithModal() {
//     let nombre_a_agregar = prompt('Indique el nombre que quiere agregar'); //
//     nombres.push(nombre_a_agregar)
//     console.table(nombres)
// }

// // sistema para agregar nombres a travez de un modal
// function removeLastName() {
//     //let nombre_a_agregar = prompt('Indique el nombre que quiere agregar'); //
//     nombres.pop()
//     console.table(nombres)
// }
// // sistema para agregar nombres a travez de un modal
// function removeFirstName() {
//     //let nombre_a_agregar = prompt('Indique el nombre que quiere agregar'); //
//     nombres.shift()
//     console.table(nombres)
// }

// function removewithSlice() {
//     //let nombre_a_agregar = prompt('Indique el nombre que quiere agregar'); //
//     nombres = nombres.slice(0,2)
//     console.table(nombres)
// }


function add() {
    console.log('add')
    let nombre = prompt('Ingresa el nombre')
    const siExiste = nombres.includes(nombre)
    if (siExiste) {
        alert('No No No , Pipi ese nombre ya agregaste !')
    } else {        
       nombres.push(nombre)
    }
    console.table(nombres)
}

function remove() {
    console.log('remove')
    // Tarea ,
    // Pensar que metodos utilizar y combinar para que salga la logica 
    // La tarea es , deberia dar la opcion para que agregue un nombre 
    // Si ese nombre existe lo elimino de mi array si no , le tiro una alerta que el nombre que intento a eliminar no existe !
}


function showNames(){
    if(nombres.length > 0){
        const mostrarNombres = nombres.join('-')
        alert(mostrarNombres)
    }else {
        alert('No hay nombres !!!')
    }
    
}





buttonAdd.addEventListener('click',add)
buttonRemove.addEventListener('click',remove)
buttonShow.addEventListener('click',showNames)