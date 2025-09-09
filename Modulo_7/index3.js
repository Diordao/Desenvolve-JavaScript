let tarefas = [];

const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefas() {
  const salvo = localStorage.getItem("tarefas");
  if (salvo) {
    tarefas = JSON.parse(salvo);
  }
}

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
      salvarTarefas();
      renderizarTarefas();
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("btn-excluir");

    botaoExcluir.addEventListener("click", () => {
      tarefas.splice(index, 1);
      salvarTarefas();
      renderizarTarefas();
    });

    const div = document.createElement("div");
    div.appendChild(checkbox);
    div.appendChild(span);
    div.appendChild(botaoExcluir);

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
    salvarTarefas();
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

window.addEventListener("load", () => {
  carregarTarefas();
  renderizarTarefas();
});