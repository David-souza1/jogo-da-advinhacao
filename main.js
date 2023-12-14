//variaveis
const bttnTry = document.querySelector("#btnTry")
const bttnReset = document.querySelector("#bttnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick )
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains(".hide")) {
        handleResetClick()

    }
})
//função ou métodos callBack
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector ("#inputNumber")

    if(Number(inputNumber.value) == randomNumber ) {
        toggleScreen()
    
        document.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts} tentativas`
    
    }   
    
    inputNumber.value = ""
    xAttempts++

}

function handleResetClick () {
    toggleScreen()

    Math.round(Math.random() * 10)
    xAttempts = 1
}

function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}




