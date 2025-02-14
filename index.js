const inputItem = document.getElementById("input-item")
const botaAdicionar = document.getElementById("adicionar-item")
const listaDeCompras = document.getElementById("lista-de-compras")
let contador = 0

botaAdicionar.addEventListener('click', (evento) =>{
  evento.preventDefault()
  if(inputItem.value === ""){
    alert("Por favor, insira um item")
    return
  }

  const itemDaLista = document.createElement("li")
  const containerItemDaLista = document.createElement("div")
  containerItemDaLista.classList.add("lista-item-container")
  const inputCheckbox = document.createElement("input")
  inputCheckbox.type = "checkbox"
  inputCheckbox.id = "checkbox-" + contador++
  const nomeItem = document.createElement("p")
  nomeItem.innerText = inputItem.value

  containerItemDaLista.appendChild(inputCheckbox)
  containerItemDaLista.appendChild(nomeItem)

  itemDaLista.appendChild(containerItemDaLista)

  const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"})
  const data = new Date().toLocaleDateString("pt-BR")

  const hora = new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric"})

  const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`

  const itemData = document.createElement("p")
  itemData.classList.add("texto-data")
  itemData.innerText = dataCompleta
  itemDaLista.appendChild(itemData)


  listaDeCompras.appendChild(itemDaLista)

  

})
