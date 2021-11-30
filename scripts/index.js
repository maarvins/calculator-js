let display = document.getElementById("display")
let buttons = Array.from(document.getElementsByClassName("btn")) //utilizando o Array.from para converter uma coleção html em array ['']

//addicionando o addEventListener em todos os botões (escutador) e retornando o valor do botão ao ser clicado

//TESTES DE FUNCIONAMENTO
// console.log("clicado!")
// console.log(e)
// console.log(e.target)
// console.log(e.target.innerText)

buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = ""
        break
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1)
        }
        break
      case "=":
        //eval ira considerar se sua equação matematica está correta para executá-la
        try {
          display.innerText = eval(display.innerText)
        } catch {
          display.innerHTML = "Error!"
        }
        break
      default:
        display.innerText += e.target.innerText
    }
  })
})
