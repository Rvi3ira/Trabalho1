const monumentos = ["Cristo redentor", "Catedral da pedra", "santuário Nossa Senhora Aparecida","Estátua da liberdade", "escadaria selarón"];
console.log("Monumentos:", monumentos);

function addMonumentos(monumentos, novoMonumento) {
    const novoArray = [...monumentos];
    novoArray.push(novoMonumento);
    novoArray.sort();
    return novoArray;
}
function deletePrimeiroMonumento(monumentos) {
    const novoArray = [...monumentos];
    novoArray.shift();
    return novoArray;
}

const monumentosAtualizados = addMonumentos(monumentos, "Outro monumento");
console.log("Monumentos Atualizados:", monumentosAtualizados);

const monumentosSemPrimeiro = deletePrimeiroMonumento(monumentosAtualizados);
console.log("Monumentos Sem Primeiro:", monumentosSemPrimeiro);