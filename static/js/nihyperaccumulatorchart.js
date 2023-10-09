var options_nichart = {
    responsive: true,
    plugins: {
            legend: {
                position: 'bottom',
                display: true,
                labels: {
                    color: 'rgb(255, 255, 255)'
                }
            }
        },
    layout: {
        padding: 30
    },
		cutout: 50,
		events: ['click'],
		onClick: function(event, elements, chart) {
			const els = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true)
			if (els.length && els[0] && !els[0].element.active) {
				chart.setActiveElements([{
					datasetIndex: els[0].datasetIndex,
					index: els[0].index
				}])
			}
		}
  }


const bgColors = [
	'rgba(20, 128, 255, 1)',
	'rgba(250, 250, 250, 1)'
]

var ctx_nihyperaccumulatorChart = document.getElementById("nihyperaccumulatorChart").getContext('2d');

var nihyperaccumulatorChart
nihyperaccumulatorChart = new Chart(ctx_nihyperaccumulatorChart, {
	
  type: 'doughnut',
  options: options_nichart,
  data: {
    labels: ["Ni hyperaccumulators", "Other hyperaccumulators"],
    datasets: [{
			radius: 75,
			circumference: 360,
			rotation: 270,
      data: [{ value: 523 }, { value: 198 }],
			backgroundColor: bgColors,
			borderWidth: 0,
			borderColor: bgColors,
			borderAlign: 'center',
			hoverOffset: 100,
			hoverBorderColor: 'transparent',
			hoverBorderWidth: 10
    }]
  }
});

nihyperaccumulatorChart.setActiveElements([{
  datasetIndex: 0,
  index: 1
}])