const isFibonacci = (num) => {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    let fib = a + b;

    while (fib <= num) {
        if (fib === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = fib;
        fib = a + b;
        console.log(fib)
    }

    return `O número ${num} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso
const numero = 34; // Insira o número que deseja verificar
const resultado = isFibonacci(numero);
console.log(resultado);
