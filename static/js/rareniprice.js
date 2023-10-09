// Data
var years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
var rareEarthPrices = [4607, 3979, 3851, 3391, 3378, 3482, 3357, 3071, 6286, 10021];
var nickelPrices = [15029, 16893, 11862, 9595, 10409, 13114, 13913, 13790, 18467, 25867];

// Calculate relative prices for rare earth
var rareEarthRelativePrices = rareEarthPrices.map(function(price) {
    return (price / rareEarthPrices[0]) * 100;
});

// Calculate relative prices for nickel
var nickelRelativePrices = nickelPrices.map(function(price) {
    return (price / nickelPrices[0]) * 100;
});
// Create a chart
var ctx_rarennickelprice = document.getElementById('rarennickelprice').getContext('2d');
var chart_rarennickelprice = new Chart(ctx_rarennickelprice, {
    type: 'line',
    data: {
        labels: years,
        datasets: [
            {
                label: 'Rare Earth Prices',
                data: rareEarthRelativePrices,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            },
            {
                label: 'Nickel Prices',
                data: nickelRelativePrices,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
            title: {
                display: true,
                text: "Year",
                color: "white", // Change the X-axis title font color to white
            },
            ticks: {
                color: "white", // Change the X-axis labels font color to white
                display: true,
            },
            },
            y: {
            title: {
                display: true,
                text: "Relative price compared to 2013",
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
    }
});