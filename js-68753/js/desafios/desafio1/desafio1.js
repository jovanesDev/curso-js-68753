
let randomNum = Math.floor(Math.random() * 100) + 1
const input = document.querySelector('input');
console.log(randomNum)

input.addEventListener('change',(e) => {
    inputValue = Number(e.target.value)
} )


function checkGuess(){
    if(randomNum === inputValue) {
       alert("Felicitaciones Ganaste !" + ' El numero elegido fue :' + randomNum)
    }else {
        alert("Perdiste !" + ' El numero correcto era :' + randomNum)
    }
}


function anotherNumber(){
    window.location.reload()
}
