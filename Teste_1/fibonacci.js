
const button = document.getElementById('button');
const input = document.getElementById('input');
const result = document.getElementById('result');

const calcFibonacciNumber = number => {
    let fibonacciNumber = 0;
    let firstFibonacciNumber = 0;
    let secondFibonacciNumber = 1;
    while (fibonacciNumber < number){
        fibonacciNumber = firstFibonacciNumber + secondFibonacciNumber;
        firstFibonacciNumber = secondFibonacciNumber;
        secondFibonacciNumber = fibonacciNumber;
    }
    return (number === fibonacciNumber) ? 
        `O número ${number} faz parte da sequência Fibonacci!` 
        : `O número ${number} não faz parte da sequência Fibonacci!`;
}

button.addEventListener('click', () => {
    const userInput = parseInt(input.value);
    const userResult = calcFibonacciNumber(userInput);
    result.innerText = userResult;
    input.value = "";
});

