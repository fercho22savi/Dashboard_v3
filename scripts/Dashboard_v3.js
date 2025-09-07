// Chart.js graphs

// Daily Sales
new Chart(document.getElementById("salesChart"), {
    type: "line",
    data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
            {
                label: "Sales",
                data: [12, 19, 3, 5, 2, 3, 15],
                borderColor: "#06d6a0",
                backgroundColor: "rgba(6,214,160,0.2)",
                fill: true,
                tension: 0.4,
            },
        ],
    },
});

// Email Subscriptions
new Chart(document.getElementById("emailChart"), {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Emails",
                data: [300, 400, 320, 500, 420, 610, 700],
                backgroundColor: "#f4a261",
            },
        ],
    },
});

// Completed Tasks
new Chart(document.getElementById("tasksChart"), {
    type: "line",
    data: {
        labels: ["9a", "11a", "1p", "3p", "5p", "7p", "9p"],
        datasets: [
            {
                label: "Tasks",
                data: [50, 60, 40, 80, 70, 55, 65],
                borderColor: "#e63946",
                backgroundColor: "rgba(230,57,70,0.2)",
                fill: true,
                tension: 0.3,
            },
        ],
    },
});
