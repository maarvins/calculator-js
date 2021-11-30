let display = document.getElementById("input-display")
let buttons = Array.from(document.getElementsByClassName("btn")) //utilizando o Array.from para converter uma coleção html em array ['']

//addicionando o addEventListener em todos os botões (escutador) e retornando o valor do botão ao ser clicado

buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    //TESTES DE FUNCIONAMENTO
    // console.log("clicado!")
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.innerText)
  })
})
