const textoResultado = (msg) => {
    texto.innerHTML = msg
}

function inverterString() {
    const str = textoInput.value;
    let stringInvertida = "";

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; 
    }

    textoResultado(stringInvertida)
}

var texto = document.getElementById('texto');
var textoInput = document.getElementById('textoInput');
document.getElementById('reverter').addEventListener('click', inverterString);
