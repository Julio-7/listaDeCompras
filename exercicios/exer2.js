const inputItem = document.getElementById("input-item")
const botaAdicionar = document.getElementById("adicionar-item")
const listItem = document.getElementById("lista-de-compras")
let contador = 0

botaAdicionar.addEventListener("click", (evento) =>{
  if(inputItem.value === ""){
    alert("Por favor adicione algo")
  }

  const checkboxLista = document.createElement("li")
  const checkboxContainer = document.createElement("div")
  checkboxContainer.classList.add("lista-item-container")
  const checkboxInput = document.createElement("input")
  checkboxInput.type = "checkbox"
  checkboxInput.id = contador + contador++
  const nomeItem = document.createElement("p")
  nomeItem.innerText = inputItem.value

  checkboxContainer.appendChild(nomeItem)
  checkboxContainer.appendChild(checkboxInput)
  checkboxLista.appendChild(checkboxContainer)
  listItem.appendChild(checkboxLista)

  
})