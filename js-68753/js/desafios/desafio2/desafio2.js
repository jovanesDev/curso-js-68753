let userChoose = "";
const inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("change", (e) => {
    userChoose = e.target.value;
  });
}

const numeros = [1, 2, 3];
function startGame() {
  if(!userChoose) return alert('Debes elegir una opcion')
  const cpu = generateRandomNumber(); // la compu elige una opcion
  return decideWinner(userChoose,cpu)
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

function chooseCorrectName(x) {
  switch (x) {
    case 1:
      return "Piedra";
    case 2:
      return "Papel";

    default:
      return "Tijera";
  }
}

function decideWinner(user,cpu) {
    const opcionDelUsuario = chooseCorrectName(Number(user));
    const opcionDelCPU = chooseCorrectName(cpu)
    if(cpu > user){
        alert('Gano el CPU ' + opcionDelUsuario + ' vs ' + opcionDelCPU )
    }else if (cpu === user) {
        alert('Hay empate ' + opcionDelUsuario + ' vs ' + opcionDelCPU )
    }else {
        alert('Gano el USER ' + opcionDelUsuario + ' vs ' + opcionDelCPU )
    }
    
}
