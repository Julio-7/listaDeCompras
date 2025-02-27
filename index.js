import { criarItemDaLista } from "./Scripts/criarItemDaLista.js"
import verificarListaVazia from "./Scripts/verificarListaVazia.js"

const botaAdicionar = document.getElementById("adicionar-item")
const listaDeCompras = document.getElementById("lista-de-compras")

botaAdicionar.addEventListener('click', (evento) =>{
  evento.preventDefault()
  const itemDaLista = criarItemDaLista()  
  listaDeCompras.appendChild(itemDaLista)
  verificarListaVazia(listaDeCompras)
})

verificarListaVazia(listaDeCompras)