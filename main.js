const listaDeNomes = ['Joao', 'Maria', 'José', 'Paula', 'Mateus', 'Joaquina'];
const listaDeAlunosNotas = [];

for (let i = 0; i < listaDeNomes.length; i++) {
    listaDeAlunosNotas.push({
        nome: listaDeNomes[i],
        nota: i + 4
    });
}

function alunosAprovados () {
    return listaDeAlunosNotas.filter(function(item) {
        return item.nota >= 6;
    })
}

console.log(listaDeAlunosNotas);
console.log(alunosAprovados());
