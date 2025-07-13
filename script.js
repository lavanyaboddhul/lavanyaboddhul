// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
	body.classList.toggle("theme-light");
	body.classList.toggle("theme-dark");
	themeIcon.classList.toggle("bi-moon");
	themeIcon.classList.toggle("bi-sun");
});

// Vacancy Status Chart
const ctx = document.createElement("canvas");
document.querySelector(".chart-container").appendChild(ctx);

const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];
const applicationData = [20, 35, 25, 45, 32, 18, 25, 30, 42, 28, 35, 45];
const interviewsData = [15, 22, 18, 30, 25, 15, 20, 18, 35, 22, 30, 35];
const rejectedData = [10, 15, 12, 20, 15, 10, 12, 14, 25, 18, 20, 22];

new Chart(ctx, {
	type: "line",
	data: {
		labels: months,
		datasets: [
			{
				label: "Applications",
				data: applicationData,
				borderColor: "#29CC97",
				backgroundColor: "rgba(41, 204, 151, 0.1)",
				tension: 0.4,
				fill: true,
			},
			{
				label: "Interviews",
				data: interviewsData,
				borderColor: "#5D87FF",
				backgroundColor: "transparent",
				tension: 0.4,
			},
			{
				label: "Rejected",
				data: rejectedData,
				borderColor: "#FF5B5B",
				backgroundColor: "transparent",
				tension: 0.4,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					borderDash: [5, 5],
				},
			},
			x: {
				grid: {
					display: false,
				},
			},
		},
	},
});
