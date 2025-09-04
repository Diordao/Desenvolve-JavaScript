// ==========================
// SISTEMA DE ESTOQUE LIVRARIA
// ==========================

// Array vazio que vai armazenar os livros
let estoque = [];

// --------------------------
// Função para adicionar um livro
// --------------------------
function adicionarLivro(titulo, autor, quantidade) {
    // Verifica se já existe um livro com esse título no estoque
    let livroExistente = estoque.find(livro => livro.titulo === titulo);

    if (livroExistente) {
        // Se já existir, apenas somamos a quantidade
        livroExistente.quantidade += quantidade;
        console.log(`Quantidade atualizada do livro "${titulo}".`);
    } else {
        // Caso não exista, criamos um novo objeto e adicionamos ao array
        estoque.push({ titulo, autor, quantidade });
        console.log(`Livro "${titulo}" adicionado ao estoque.`);
    }
}

// --------------------------
// Função para remover um livro
// --------------------------
function removerLivro(titulo) {
    // Procuramos o índice do livro pelo título
    let index = estoque.findIndex(livro => livro.titulo === titulo);

    if (index !== -1) {
        // Se encontrado, removemos pelo índice
        estoque.splice(index, 1);
        console.log(`Livro "${titulo}" removido do estoque.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
}

// --------------------------
// Função para atualizar a quantidade
// --------------------------
function atualizarQuantidade(titulo, novaQuantidade) {
    let livro = estoque.find(livro => livro.titulo === titulo);

    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
}

// --------------------------
// Função para listar todos os livros
// --------------------------
function listarLivros() {
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
    } else {
        console.log("Livros no estoque:");
        // Percorremos o array com forEach para exibir cada livro
        estoque.forEach(livro => {
            console.log(`- ${livro.titulo} | Autor: ${livro.autor} | Quantidade: ${livro.quantidade}`);
        });
    }
}

// ==========================
// TESTES DO SISTEMA
// ==========================

// Adicionando livros
adicionarLivro("Dom Casmurro", "Machado de Assis", 5);
adicionarLivro("O Alquimista", "Paulo Coelho", 3);

// Tentando adicionar o mesmo livro (atualiza quantidade)
adicionarLivro("Dom Casmurro", "Machado de Assis", 2);

// Listando livros
listarLivros();

// Atualizando quantidade
atualizarQuantidade("O Alquimista", 10);

// Removendo livro
removerLivro("Dom Casmurro");

// Listando novamente
listarLivros();