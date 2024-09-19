const textResultIsFibonacci = (msg) => {
       text.innerHTML = msg
}


const isFibonacci = () => {
    const num = number.value
    let a = 0;
    let b = 1;

    if (num == 0 || num == 1) {
        
        textResultIsFibonacci(`O número ${num} pertence à sequência de Fibonacci.`);
        return
        
    }

    let fib = a + b;

    while (fib <= num) {
        if (fib == num) {
            textResultIsFibonacci(`O número ${num} pertence à sequência de Fibonacci.`);
            return
            
        }
        a = b;
        b = fib;
        fib = a + b;
    }

    textResultIsFibonacci( `O número ${num} não pertence à sequência de Fibonacci.`);
    return
}

const number = document.getElementById('numberFibonacci');
let text = document.getElementById('textFibonacci');
document.getElementById('send').addEventListener('click', isFibonacci); 
