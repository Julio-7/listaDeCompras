import { criarItemDaLista } from "./Scripts/criarItemDaLista.js"

const botaAdicionar = document.getElementById("adicionar-item")
const listaDeCompras = document.getElementById("lista-de-compras")

botaAdicionar.addEventListener('click', (evento) =>{
  evento.preventDefault()
  const itemDaLista = criarItemDaLista()  
  listaDeCompras.appendChild(itemDaLista)
  verificarListaVazia()
})

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia")

function verificarListaVazia(){
  const itensDaLista = listaDeCompras.querySelectorAll("li")
  if(itensDaLista.length === 0){
    mensagemListaVazia.style.display = "block" //faz com que apareca na tela
  }
  else{
    mensagemListaVazia.style.display = "none"
  }
}
verificarListaVazia()