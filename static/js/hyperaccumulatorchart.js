// Data
var options
options = {
    responsive: true,
    scales: {
        x: {
        title: {
            display: false,
            text: "Element",
            color: "white", // Change the X-axis title font color to white
        },
        ticks: {
            color: "white", // Change the X-axis labels font color to white
            display: false,
        },
        },
        y: {
        title: {
            display: true,
            text: "Number of hyperaccumulators",
            color: "white", // Change the X-axis title font color to white
        },
        ticks: {
            color: "white", // Change the Y-axis labels font color to white
        },
        grid: {
            display: true,
            drawBorder: false,
            drawOnChartArea: true,
            borderDashOffset: 25,
            borderColor: "#d1d2db",
            borderWidth: 0.8800000000000001,
            color: "#d1d2db",
        },
        },
    },
    plugins: {
        legend: {
            labels: {
                color: "white", // Change the legend font color to white
            },
        },
        tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: {
            color: "white", // Change the tooltip title font color to white
        },
        bodyFont: {
            color: "white", // Change the tooltip body font color to white
        },
        },
        datalabels: { // Configuration for datalabels plugin
                anchor: 'end', // Position of the labels, you can adjust this
                align: 'top', // Alignment of the labels, you can adjust this
                font: {
                    weight: 'bold' // Font weight of the labels, you can adjust this
                },
                formatter: function(value, context) {
                    return value; // Display the value of the data point as the label
                }
            }
    },
};
var labels = ["Ni", "Cu", "Co", "Cr", "Mn", "Zn", "REE", "Se", "Tl", "Cd", "As", "Pb"]
var backgroundcolors = ['rgba(111, 107, 212, 1.0)', 'rgba(94, 185, 255, 1.0)', 'rgba(179, 226, 200, 1.0)', 'rgba(166, 85, 183, 1.0)', 'rgba(210, 166, 57, 1.0)', 'rgba(90, 250, 168, 1.0)', 'rgba(48, 170, 225, 1.0)', 'rgba(67, 201, 89, 1.0)', 'rgba(157, 89, 117, 1.0)', 'rgba(22, 168, 92, 1.0)', 'rgba(254, 98, 137, 1.0)', 'rgba(41, 82, 201, 1.0)']
var borderColors = [
    'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)',
    'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'
]
var values = [523, 53, 42, 1, 42, 20, 2, 41, 2, 7, 5, 8]
var datasets = [];

for (var i = 0; i < labels.length; i++) {
    datasets.push({
        label: labels[i],
        backgroundColor: backgroundcolors[i],
        borderColor :borderColors[i],
        data: [values[i]]
    });
}
var data = {
labels: ['Number of hyperaccumulators'],
datasets: datasets
}

// Get the canvas element
const ctx = document.getElementById('hyperaccumulatorDatabaseChart').getContext('2d');

// Create the bar chart
const hyperaccumulatorDatabaseChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
});

