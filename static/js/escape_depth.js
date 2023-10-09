function create_escape_depth_chart(canvas_id){
    var atomic_number = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
    var element_id = ['Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo']
    var escape_depth_fresh = [38.57773983, 60.90150268, 92.43639775, 138.0350352, 199.3112272, 282.3194931, 391.8392447, 534.8576927, 719.4619627, 951.5919097, 1242.567054, 1602.272047, 2043.993285, 2577.384773, 3216.09769, 3976.256338, 4862.233167, 5899.386264, 7097.894814, 8464.953423, 10011.41299, 11748.8145, 13666.97407, 15778.22353, 18078.11852, 20547.59009, 23181.74863, 25962.10283, 28862.58292, 31864.1621]
    escape_depth_fresh = escape_depth_fresh.map(function(number) {return Math.round(number)});
    var escape_depth_dry = [78.35980166, 124.2325107, 189.2961039, 283.7352227, 411.0967952, 584.2015862, 813.3079418, 1113.371867, 1501.762883, 1991.416264, 2606.691278, 3369.024292, 4307.146699, 5442.141349, 6803.610239, 8426.44763, 10320.39281, 12539.92715, 15106.93646, 18036.63914, 22159.61309, 25617.5345, 29382.99869, 33476.28557, 37886.34642, 42576.6556, 47540.19756, 52746.33831, 58152.48615, 63730.96069]
    escape_depth_dry = escape_depth_dry.map(function(number) {return Math.round(number)});
    var sample_thickness =  [250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250]
    var energy_kev = [1.486, 1.74, 2.01, 2.309, 2.622, 2.958, 3.314, 3.692, 4.093, 4.512, 4.953, 5.415, 5.9, 6.405, 6.931, 7.48, 8.046, 8.637, 9.251, 9.886, 10.543, 11.224, 11.924, 12.648, 13.396, 14.165, 14.958, 15.775, 16.615, 17.48]
    var ctx = document.getElementById(canvas_id).getContext('2d');
    
    // Create datasets for escape_depth_fresh, escape_depth_dry, and sample_thickness
    var escapeDepthFreshData = {
        label: 'Escape Depth - Fresh Leaves (µm)',
        data: escape_depth_fresh,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y'
    };

    var escapeDepthDryData = {
        label: 'Escape Depth - Dry Leaves (µm)',
        data: escape_depth_dry,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        yAxisID: 'y'
    };

    var atomicnumberData = {
        label: 'Atomic number',
        data: atomic_number,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        yAxisID: 'y',
        hidden: true
    };

    var sampleThicknessData = {
        label: 'Sample Thickness (µm)',
        data: sample_thickness,
        borderColor: 'rgba(0, 255, 0, 1)',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        yAxisID: 'y'
    };

    // Create dataset for energy_kev
    var energyData = {
        label: 'Energy (keV)',
        data: energy_kev,
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        yAxisID: 'y1'
    };

    var config = {
        type: 'line',
        data: {
            labels: element_id,
            datasets: [escapeDepthFreshData, escapeDepthDryData, sampleThicknessData, energyData, atomicnumberData]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                legend: {
                    labels: {
                        color: "white", // Change the legend font color to white
                    },
                },
            },
        
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Element",
                        color: "white", // Change the X-axis title font color to white
                    },
                    ticks: {
                        color: "white", // Change the X-axis labels font color to white
                    },
                },
                y: {
                    type: 'logarithmic',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Escape depth of K-alpha XRF energy or leaf thickness in nano meter',
                        color: "white", // Change the X-axis title font color to white

                    },
                    ticks: {
                        color: "white", // Change the X-axis labels font color to white
                    },
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'K-alpha XRF energy (KeV)',
                        color: "white", // Change the X-axis title font color to white

                    },
                    ticks: {
                        color: "white", // Change the X-axis labels font color to white
                    },
                    // grid line settings
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
            }
        },
    };

    var myChart = new Chart(ctx, config);
}
create_escape_depth_chart("escapedepthplot")
