const highestRevenueButton = document.getElementById("highestRevenueButton");
const lowestRevenueButton = document.getElementById("lowestRevenueButton");
const mediaOfMonthButton = document.getElementById("mediaOfMonthButton");

function calcLowestMonthlyRevenue(data) {
	const lowestMonthlyRevenue = Math.min(
		...data
			.map((element) => element.valor)
			.filter((element) => element != 0)
	);
	const indexOfDay = data.find(
		(element) => element.valor == lowestMonthlyRevenue
	).dia;
	return [lowestMonthlyRevenue, indexOfDay];
}
function calcHighestMonthlyRevenue(data) {
	const highestMonthlyRevenue = Math.max(
		...data.map((element) => element.valor)
	);
	const indexOfDay = data.find(
		(element) => element.valor == highestMonthlyRevenue
	).dia;
	return [highestMonthlyRevenue, indexOfDay];
}
function calcMediaOfMonth(data) {
	const validDaysOfMonth = data.filter(
		(element) => element.valor != 0
	).length;
	const total = data
		.map((element) => element.valor)
		.reduce((total, value) => total + value, 0);
	return total / validDaysOfMonth;
}

async function loadData() {
	try {
		const response = await fetch("./dados.json");
		const data = await response.json();
		processRevenueData(data);
	} catch (error) {
		console.error("Erro ao carregar os dados:", error);
	}
}

function processRevenueData(data) {
	highestRevenueButton.addEventListener("click", () => {
		const result = calcHighestMonthlyRevenue(data);
		highestRevenueButton.innerText = `Maior faturamento: R$ ${result[0].toLocaleString(
			"pt-BR",
			{ minimumFractionDigits: 2, maximumFractionDigits: 2 }
		)}\nDia: ${result[1]}`;
	});

	lowestRevenueButton.addEventListener("click", () => {
		const result = calcLowestMonthlyRevenue(data);
		lowestRevenueButton.innerText = `Menor faturamento: R$ ${result[0].toLocaleString(
			"pt-BR",
			{ minimumFractionDigits: 2, maximumFractionDigits: 2 }
		)}\nDia: ${result[1]}`;
	});

	mediaOfMonthButton.addEventListener("click", () => {
		const result = calcMediaOfMonth(data);
		mediaOfMonthButton.innerText = `A média de faturamento foi:\nR$ ${result.toLocaleString(
			"pt-BR",
			{ minimumFractionDigits: 2, maximumFractionDigits: 2 }
		)}`;
	});
}

loadData();
