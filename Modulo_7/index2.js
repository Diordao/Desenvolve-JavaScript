   const campoBusca = document.getElementById("campo-busca");
   const botaoBuscar = document.getElementById("btn-buscar");
   const divResultados = document.getElementById("resultados");

   async function buscarUsuarios() {
     const termo = campoBusca.value.trim();
   
     if (termo === "") {
       divResultados.innerHTML = `<p class="erro">Digite um nome para buscar.</p>`;
       return;
     }
   
     const url = `https://api.github.com/search/users?q=${termo}`;
   
     try {
       const resposta = await fetch(url);

       const dados = await resposta.json();
   
       if (dados.items.length === 0) {
         divResultados.innerHTML = `<p class="erro">Não foram encontrados usuários para esta pesquisa.</p>`;
         return;
       }
   
       const lista = document.createElement("ul");
   
       dados.items.forEach(usuario => {
         const li = document.createElement("li");
   
         li.innerHTML = `
           <img src="${usuario.avatar_url}" alt="avatar" width="30" height="30">
           <a href="${usuario.html_url}" target="_blank">${usuario.login}</a>
         `;
   
         lista.appendChild(li);
       });
   
       divResultados.innerHTML = "";
       divResultados.appendChild(lista);
   
     } catch (erro) {
       divResultados.innerHTML = `<p class="erro">Ocorreu um erro na busca. Tente novamente.</p>`;
       console.error("Erro ao buscar na API:", erro);
     }
   }
   
   botaoBuscar.addEventListener("click", buscarUsuarios);