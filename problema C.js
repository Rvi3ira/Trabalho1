const abrigo = {
    felinos: []
};

function adicionarFelino(abrigo, novoFelino) {
    abrigo.felinos.push(novoFelino);
}

function listarFelinos(abrigo) {
    console.log("Felinos no Abrigo:");
    abrigo.felinos.forEach(function(felino) {
        console.log(felino.nome);
    });
}

function removerFelino(abrigo, nomeFelino) {
    const indice = abrigo.felinos.findIndex(function(felino) {
        return felino.nome === nomeFelino;
    });
    if (indice !== -1) {
        console.log(`O felino ${nomeFelino} foi adotado.`);
        abrigo.felinos.splice(indice, 1);
    } else {
        console.log(`Não foi encontrado nenhum felino com o nome ${nomeFelino} no abrigo.`);
    }
}

const felinoExemplo = {
    nome: "Mia",
    idade: 3,
    cor: "branco"
};

adicionarFelino(abrigo, felinoExemplo);
listarFelinos(abrigo);