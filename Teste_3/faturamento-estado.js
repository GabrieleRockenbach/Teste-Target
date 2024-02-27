const tableBody = document.getElementById("tableBody");
const tableHead = document.getElementById("tableHead");
const button = document.getElementById("button");

const revenueByState = [
	{
		state: "SP",
		revenue: 67836.43,
	},
	{
		state: "RJ",
		revenue: 36678.66,
	},
	{
		state: "MG",
		revenue: 29229.88,
	},
	{
		state: "ES",
		revenue: 27165.48,
	},
	{
		state: "Outros",
		revenue: 19849.53,
	},
];

function calcTotalRevenue(data) {
	const totalRevenue = data
		.map((element) => element.revenue)
		.reduce((total, currentValue) => total + currentValue);
	return totalRevenue;
}
function calcPercentage(data) {
	data.forEach((element) => {
		element["percentage"] = (
			(element.revenue / calcTotalRevenue(data)) *
			100
		).toFixed(1);
	});
}
function showResults() {
	calcPercentage(revenueByState);

	tableHead.innerHTML = `                
        <tr>
            <th>Estado</th>
            <th>Faturamento em reais</th>
            <th>%</th>
        </tr>
    `;

	revenueByState.forEach((element) => {
		const newRow = document.createElement("tr");

		const cellState = document.createElement("td");
		cellState.textContent = element.state;

		const cellRevenue = document.createElement("td");
		cellRevenue.textContent = element.revenue.toLocaleString("pt-BR");

		const cellPercentage = document.createElement("td");
		cellPercentage.textContent = element.percentage;

		newRow.appendChild(cellState);
		newRow.appendChild(cellRevenue);
		newRow.appendChild(cellPercentage);

		tableBody.appendChild(newRow);
	});

	button.style.display = "none";
}
