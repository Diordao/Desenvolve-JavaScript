let curtidas = [];

const inputNome = document.getElementById("nome");
const botaoCurtir = document.getElementById("btn-curtir");
const botaoLimpar = document.getElementById("btn-limpar");
const resultado = document.getElementById("resultado");

function atualizarMensagem() {
  if (curtidas.length === 0) {
    resultado.textContent = "Ninguém curtiu";
  } else if (curtidas.length === 1) {
    resultado.textContent = `${curtidas[0]} curtiu`;
  } else if (curtidas.length === 2) {
    resultado.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
  } else {
    resultado.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${curtidas.length - 2} pessoas curtiram`;
  }

  localStorage.setItem("curtidas", JSON.stringify(curtidas));
}

function curtir() {
  const nome = inputNome.value.trim();

  if (nome === "") {
    alert("Digite um nome antes de curtir!");
    return;
  }

  if (!curtidas.includes(nome)) {
    curtidas.push(nome);
  } else {
    alert(`${nome} já curtiu!`);
  }

  inputNome.value = "";
  atualizarMensagem();
}

function limparCurtidas() {
  curtidas = [];
  localStorage.removeItem("curtidas");
  atualizarMensagem();
}

window.addEventListener("load", () => {
  const salvo = localStorage.getItem("curtidas");
  if (salvo) {
    curtidas = JSON.parse(salvo);
  }
  atualizarMensagem();
});

botaoCurtir.addEventListener("click", curtir);
botaoLimpar.addEventListener("click", limparCurtidas);