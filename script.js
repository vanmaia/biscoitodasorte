const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOne = document.querySelector("#btnOne")
const btnTwo = document.querySelector("#btnTwo")


const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1  

function handleClick(event){
  event.preventDefault()
  const cookie = document.querySelector("#btnOne")
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    document.querySelector(".screen2 h2").innerText = `Aqui está sua sorte de hoje:`
    document.querySelector(".screen2 p").innerText = `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu`
}

function handleReset () {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
}

btnOne.addEventListener('click', handleClick)
btnTwo.addEventListener('click', handleReset)


