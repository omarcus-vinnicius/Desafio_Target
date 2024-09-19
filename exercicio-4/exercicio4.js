

function calcularPercentual() {

    const faturamentoPorEstado = {
        "SP": parseFloat(numeroSp.value),
        "RJ": parseFloat(numeroRj.value),
        "MG": parseFloat(numeroMg.value),
        "ES": parseFloat(numerEs.value),
        "Outros": parseFloat(numeroSp.value)
    };

    console.log(faturamentoPorEstado);

    const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
        alert(`${estado}: ${percentual.toFixed(2)}%`);
    }
}

var numeroSp = document.getElementById('numeroSp');
var numeroRj = document.getElementById('numeroRj');
var numeroMg = document.getElementById('numeroMg');
var numerEs = document.getElementById('numerEs');
var outros = document.getElementById('outros');
const texto = document.getElementById('texto');
document.getElementById('calcular').addEventListener('click', calcularPercentual)


