const inputItem = document.getElementById("input_item")
const botaSalvar = document.getElementById("botao-salvar")

botaSalvar.addEventListener("click", (evento)=>{
  evento.preventDefault()
  console.log(inputItem.value)
})