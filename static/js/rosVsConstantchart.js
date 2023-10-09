// Your data
var ni_xrf_ros = {"x":{"0":0.0,"1":0.0,"4":0.25,"5":0.25,"8":0.5,"9":0.5,"12":0.75,"13":0.75,"16":1.0,"17":1.0,"20":1.25,"21":1.25,"24":1.5,"25":1.5,"28":1.75,"29":1.75,"32":2.0,"33":2.0,"36":2.25,"37":2.25,"40":2.5,"41":2.5,"44":2.75,"45":2.75,"48":3.0,"49":3.0,"52":3.25,"53":3.25,"56":3.5,"57":3.5,"60":3.75,"61":3.75,"64":4.0,"65":4.0,"68":4.25,"69":4.25,"72":4.5,"73":4.5,"76":4.75,"77":4.75,"80":5.0,"81":5.0,"84":5.25,"85":5.25,"88":5.5,"89":5.5,"92":5.75,"93":5.75,"96":6.0,"97":6.0,"100":6.25,"101":6.25,"104":6.5,"105":6.5,"108":6.75,"109":6.75,"112":7.0,"113":7.0,"116":7.25,"117":7.25,"120":7.5,"121":7.5,"124":7.75,"125":7.75,"128":8.0,"129":8.0,"132":8.25,"133":8.25,"136":8.5,"137":8.5,"140":8.75,"141":8.75,"144":9.0,"145":9.0,"148":9.25,"149":9.25,"152":9.5,"153":9.5,"156":9.75,"157":9.75,"160":10.0,"161":10.0,"164":10.25,"165":10.25,"168":10.5,"169":10.5,"172":10.75,"173":10.75,"176":11.0,"177":11.0,"180":11.25,"181":11.25,"184":11.5,"185":11.5,"188":11.75,"189":11.75,"192":12.0,"193":12.0},"y":{"0":0,"1":0,"4":0,"5":16,"8":16,"9":179,"12":179,"13":604,"16":604,"17":1176,"20":1176,"21":1697,"24":1697,"25":2057,"28":2057,"29":2229,"32":2229,"33":2247,"36":2247,"37":2152,"40":2152,"41":1989,"44":1989,"45":1791,"48":1791,"49":1584,"52":1584,"53":1380,"56":1380,"57":1191,"60":1191,"61":1020,"64":1020,"65":869,"68":869,"69":736,"72":736,"73":642,"76":642,"77":647,"80":647,"81":567,"84":567,"85":302,"88":302,"89":184,"92":184,"93":231,"96":231,"97":173,"100":173,"101":125,"104":125,"105":108,"108":108,"109":103,"112":103,"113":116,"116":116,"117":88,"120":88,"121":70,"124":70,"125":66,"128":66,"129":88,"132":88,"133":80,"136":80,"137":65,"140":65,"141":62,"144":62,"145":61,"148":61,"149":60,"152":60,"153":68,"156":68,"157":40,"160":40,"161":33,"164":33,"165":24,"168":24,"169":9,"172":9,"173":7,"176":7,"177":4,"180":4,"181":1,"184":1,"185":0,"188":0,"189":1,"192":1,"193":0}}
var ni_xrf_const = {"x":{"2":0.0,"3":0.0,"6":0.25,"7":0.25,"10":0.5,"11":0.5,"14":0.75,"15":0.75,"18":1.0,"19":1.0,"22":1.25,"23":1.25,"26":1.5,"27":1.5,"30":1.75,"31":1.75,"34":2.0,"35":2.0,"38":2.25,"39":2.25,"42":2.5,"43":2.5,"46":2.75,"47":2.75,"50":3.0,"51":3.0,"54":3.25,"55":3.25,"58":3.5,"59":3.5,"62":3.75,"63":3.75,"66":4.0,"67":4.0,"70":4.25,"71":4.25,"74":4.5,"75":4.5,"78":4.75,"79":4.75,"82":5.0,"83":5.0,"86":5.25,"87":5.25,"90":5.5,"91":5.5,"94":5.75,"95":5.75,"98":6.0,"99":6.0,"102":6.25,"103":6.25,"106":6.5,"107":6.5,"110":6.75,"111":6.75,"114":7.0,"115":7.0,"118":7.25,"119":7.25,"122":7.5,"123":7.5,"126":7.75,"127":7.75,"130":8.0,"131":8.0,"134":8.25,"135":8.25,"138":8.5,"139":8.5,"142":8.75,"143":8.75,"146":9.0,"147":9.0,"150":9.25,"151":9.25,"154":9.5,"155":9.5,"158":9.75,"159":9.75,"162":10.0,"163":10.0,"166":10.25,"167":10.25,"170":10.5,"171":10.5,"174":10.75,"175":10.75,"178":11.0,"179":11.0,"182":11.25,"183":11.25,"186":11.5,"187":11.5,"190":11.75,"191":11.75,"194":12.0,"195":12.0},"y":{"2":0,"3":24684,"6":24684,"7":0,"10":0,"11":0,"14":0,"15":0,"18":0,"19":0,"22":0,"23":0,"26":0,"27":0,"30":0,"31":0,"34":0,"35":0,"38":0,"39":0,"42":0,"43":0,"46":0,"47":0,"50":0,"51":0,"54":0,"55":0,"58":0,"59":0,"62":0,"63":0,"66":0,"67":0,"70":0,"71":0,"74":0,"75":19,"78":19,"79":121,"82":121,"83":124,"86":124,"87":127,"90":127,"91":184,"94":184,"95":231,"98":231,"99":173,"102":173,"103":125,"106":125,"107":108,"110":108,"111":103,"114":103,"115":116,"118":116,"119":88,"122":88,"123":70,"126":70,"127":66,"130":66,"131":88,"134":88,"135":80,"138":80,"139":65,"142":65,"143":62,"146":62,"147":61,"150":61,"151":60,"154":60,"155":68,"158":68,"159":40,"162":40,"163":33,"166":33,"167":24,"170":24,"171":9,"174":9,"175":7,"178":7,"179":4,"182":4,"183":1,"186":1,"187":0,"190":0,"191":1,"194":1,"195":0}}



// Prepare the data for Chart.js
var data = {
    labels: Object.values(ni_xrf_ros.x), // X-axis labels
    datasets: [
    {
        label: 'NI XRF ROS',
        data: Object.values(ni_xrf_ros.y), // Y-axis data
        borderColor: 'rgb(75, 192, 192)', // Line color
        borderWidth: 2, // Line width
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        showLine: true,

        fill: true // Don't fill area under the line,
        
    },
    {
        label: 'NI XRF Constant',
        data: Object.values(ni_xrf_const.y), // Y-axis data
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        showLine: true,

        fill: true
    }
    ],
};

// Create a chart
var ctx_rosVsConstant = document.getElementById('rosVsConstant').getContext('2d');
var lineChart_rosVsConstant = new Chart(ctx_rosVsConstant, {
type: 'scatter',
data: data,
options: {
    responsive: true,
    scales: {
        x: {
        title: {
            display: true,
            text: "Concentration in log",
            color: "white", // Change the X-axis title font color to white
        },
        ticks: {
            color: "white", // Change the X-axis labels font color to white
            display: true,
        },
        },
        y: {
        type: 'logarithmic',

        title: {
            display: true,
            text: "Number of samples",
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

// var rosVsConstantChart = new Chart(ctx_rosVsConstant, config);