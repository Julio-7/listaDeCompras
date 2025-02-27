const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia")

export default function verificarListaVazia(listaDeCompras){
  const itensDaLista = listaDeCompras.querySelectorAll("li")
  if(itensDaLista.length === 0){
    mensagemListaVazia.style.display = "block" //faz com que apareca na tela
  }
  else{
    mensagemListaVazia.style.display = "none"
  }
}