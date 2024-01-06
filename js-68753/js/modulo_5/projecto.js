const body = document.querySelector('body');
const appTitle = document.createElement('h1');
appTitle.innerText = "Formulario"

const cajaDeNombres = document.createElement('div')
cajaDeNombres.setAttribute('id','caja-de-nombres')

body.appendChild(appTitle)

const formulario = document.createElement('form') 
const inputNombre = generarInput("Tu Nombre","nombre")
let valorDelInputName = ''
inputNombre.addEventListener('change',(e) => {
    valorDelInputName = e.target.value
})
formulario.addEventListener('submit',(e) => {
    e.preventDefault()
})

const formBoton = generarBoton("153px","Add",formBotonFn)
const inputs = [inputNombre,formBoton]

for (let i = 0; i < inputs.length; i++) {
formulario.appendChild(inputs[i])
}

body.appendChild(formulario)
body.appendChild(cajaDeNombres)





 
function generarInput(valorPlaceholder,inputId){
    const input = document.createElement('input');
    input.style.display = "block"
    input.style.marginBottom = "10px"
    input.setAttribute('placeholder',valorPlaceholder);
    input.setAttribute('id',inputId)
    return input
}

function generarBoton(width,text,buttonFunction){
    const boton = document.createElement('button');
    boton.style.width = width
    boton.innerText = text
    boton.style.display = "block"
    boton.style.marginBottom = "10px"
    if(buttonFunction){
        boton.addEventListener('click',buttonFunction)
    }
    return boton
}

function formBotonFn(){
    const name = document.createElement('h1');
    name.innerText = valorDelInputName
    cajaDeNombres.appendChild(name)
}

function saveInputNameValue (value){
    valorDelInputName = value
    console.log(valorDelInputName)
}












