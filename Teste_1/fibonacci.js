const button = document.getElementById("button");
const input = document.getElementById("input");
const result = document.getElementById("result");

const calcFibonacciNumber = (number) => {
	let fibonacciNumber = 0;
	let firstFibonacciNumber = 0;
	let secondFibonacciNumber = 1;
	while (fibonacciNumber < number) {
		fibonacciNumber = firstFibonacciNumber + secondFibonacciNumber;
		firstFibonacciNumber = secondFibonacciNumber;
		secondFibonacciNumber = fibonacciNumber;
	}
	return number === fibonacciNumber
		? `O número ${number} FAZ parte da sequência Fibonacci!`
		: `O número ${number} NÃO FAZ parte da sequência Fibonacci!`;
};

button.addEventListener("click", () => {
	const userInput = parseInt(input.value);
	const userResult = calcFibonacciNumber(userInput);
	if (!isNaN(userInput)) {
		result.innerText = userResult;
		input.value = "";
	} else {
		result.innerText = "Por favor, digite um número antes de enviar";
	}
});
