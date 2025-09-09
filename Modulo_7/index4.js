   let posts = [];

   const textarea = document.getElementById("texto-post");
   const botaoPostar = document.getElementById("btn-postar");
   const feed = document.getElementById("feed");

   async function criarPost(texto) {
     try {
       const resposta = await fetch("https://api.thecatapi.com/v1/images/search");
       const dados = await resposta.json();

       const novoPost = {
         data: new Date().toLocaleString(),
         usuario: "Usuário Demo",
         avatar: "https://i.pravatar.cc/50",
         texto: texto,
         imagem: dados[0].url,
         likes: 0
       };

       posts.unshift(novoPost);

       renderizarFeed();
     } catch (erro) {
       console.error("Erro ao buscar gato:", erro);
     }
   }

   function renderizarFeed() {
     feed.innerHTML = "";

     posts.forEach((post, index) => {
       const divPost = document.createElement("div");
       divPost.classList.add("post");

       const header = document.createElement("div");
       header.classList.add("post-header");
   
       const imgAvatar = document.createElement("img");
       imgAvatar.src = post.avatar;
   
       const nomeUsuario = document.createElement("strong");
       nomeUsuario.textContent = post.usuario + " • " + post.data;
   
       header.appendChild(imgAvatar);
       header.appendChild(nomeUsuario);

       const pTexto = document.createElement("p");
       pTexto.textContent = post.texto;

       const imgGato = document.createElement("img");
       imgGato.src = post.imagem;
       imgGato.classList.add("gato");

       const botaoCurtir = document.createElement("button");
       botaoCurtir.textContent = `Curtir (${post.likes})`;
       botaoCurtir.classList.add("like-btn");

       botaoCurtir.addEventListener("click", () => {
         posts[index].likes++;
         renderizarFeed();
       });

       divPost.appendChild(header);
       divPost.appendChild(pTexto);
       divPost.appendChild(imgGato);
       divPost.appendChild(botaoCurtir);

       feed.appendChild(divPost);
     });
   }

   botaoPostar.addEventListener("click", () => {
     const texto = textarea.value.trim();

     if (texto === "") {
       alert("Digite algo para postar!");
       return;
     }
   
     criarPost(texto);
     textarea.value = "";
   });