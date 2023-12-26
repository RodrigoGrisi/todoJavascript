let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function renderTarefas() {
  listElement.innerHTML = "";
  tarefas.map((todo) => {

    liElement = document.createElement('li')
    textTarefa = document.createTextNode(todo)
    liElement.appendChild(textTarefa)
    listElement.appendChild(liElement)

  })
}


function adicionarTarefas() {
  if (inputElement.value == '') {
    alert("Digite uma tarefa.")
    return false;
  } else {
    let novaTarefa = inputElement.value;
    tarefas.push(novaTarefa);
    inputElement.value = "";
    renderTarefas()
  }
}

buttonElement.onclick = adicionarTarefas;