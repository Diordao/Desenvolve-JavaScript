let tarefas = [];

const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

function renderizarTarefas() {
  listaTarefas.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.status;

    const span = document.createElement("span");
    span.textContent = tarefa.descricao;

    if (tarefa.status) {
      span.classList.add("concluida");
    } else {
      span.classList.add("nao-concluida");
    }

    checkbox.addEventListener("change", () => {
      tarefas[index].status = checkbox.checked;
      renderizarTarefas();
    });

    const div = document.createElement("div");
    div.appendChild(checkbox);
    div.appendChild(span);

    listaTarefas.appendChild(div);
  });
}

function adicionarTarefa() {
  const descricao = inputTarefa.value.trim();

  if (descricao !== "") {
    const novaTarefa = {
      descricao: descricao,
      status: false
    };

    tarefas.push(novaTarefa);

    inputTarefa.value = "";

    renderizarTarefas();
  } else {
    alert("Por favor, digite uma descrição para a tarefa!");
  }
}

botaoAdicionar.addEventListener("click", adicionarTarefa);

inputTarefa.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    adicionarTarefa();
  }
});