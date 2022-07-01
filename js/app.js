const btnAddTarefa = document.querySelector("#search")
const lstAFazer = document.querySelector("#a_fazer")
const lstFeito = document.querySelector("#feito")

const adicionarTarefa = function(){
    const tarefa = document.querySelector("#tarefa").value
    if(tarefa.length<1){
        return;
    }
    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa
    novaTarefa.id = "tarefa-" + lstAFazer.length

    lstAFazer.appendChild(novaTarefa)
}

const moverParafeito = function(ev){
    const tarefa = ev.target.innerText

    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa


    lstFeito.appendChild(novaTarefa)
}

btnAddTarefa.addEventListener("click", adicionarTarefa)

lstAFazer.addEventListener("click", moverParafeito)