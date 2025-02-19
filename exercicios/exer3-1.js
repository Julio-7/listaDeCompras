const inputItem = document.getElementById("input-item")
const botaoAdicionar = document.getElementById("adicionar-item")
const listaDeCompras = document.getElementById("lista-de-compras")
const contador = 0

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault()

  const checkboxLista = document.createElement("li")
  const checkboxContainer = document.createElement("div")
  checkboxContainer.classList.add("lista-item-container")
  const inputCheckbox = document.createElement("input")
  inputCheckbox.type = "checkbox"
  inputCheckbox.id = "checkbox -" + contador + contador+1
  const nomeItem = document.createElement("p")
  nomeItem.innerText = inputItem.value
  
  
  inputCheckbox.addEventListener("click", function(){
    if(inputCheckbox.checked){
      nomeItem.style.textDecoration = "line-through"
    }
    else{
      nomeItem.style.textDecoration = "none"
    }
    
  })

  checkboxContainer.appendChild(inputCheckbox)
  checkboxContainer.appendChild(nomeItem)
  checkboxLista.appendChild(checkboxContainer)

  const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"})
  const data = new Date().toLocaleDateString("pt-BR")

  const hora = new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})

  const dataCompleta = `${diaDaSemana} ${data} às ${hora}`

  const textoData = document.createElement("p")
  textoData.classList.add("texto-data")
  textoData.innerText = dataCompleta

  checkboxLista.appendChild(textoData)
  listaDeCompras.appendChild(checkboxLista)

})
