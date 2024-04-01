const biblioteca = {
    livros: []
};

function adicionarLivro(biblioteca, novoLivro) {
    biblioteca.livros.push(novoLivro);
}

const livroExemplo = {
    nome: "Quarto de despejo",
    autor: "Carolina Maria de Jesus",
    ano: 1960,
    mostrarInformacoes: function() {
        console.log(`Livro: ${this.nome}, Autor: ${this.autor}, Ano: ${this.ano}`);
    }
};

adicionarLivro(biblioteca, livroExemplo);

console.log("Informações da Biblioteca:");
biblioteca.livros.forEach(function(livro) {
    livro.mostrarInformacoes();
});