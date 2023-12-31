// Add a basemap (you can choose from various basemaps)
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

// Define the GeoJSON data
var mnHyperaccumulator = {"type": "FeatureCollection", "features": [{"id": "80", "type": "Feature", "properties": {"Concentration": 12745.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [151.9174624, -25.2485487]}}, {"id": "453", "type": "Feature", "properties": {"Concentration": 10661.0, "Herbarium density": 3, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [152.0841439, -28.24854299]}}, {"id": "476", "type": "Feature", "properties": {"Concentration": 12159.0, "Herbarium density": 2, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [151.5903535, -27.07728206]}}, {"id": "481", "type": "Feature", "properties": {"Concentration": 11504.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [152.4924595, -26.25687736]}}, {"id": "484", "type": "Feature", "properties": {"Concentration": 11538.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [152.0643308, -25.837109]}}, {"id": "494", "type": "Feature", "properties": {"Concentration": 31535.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [149.7583333, -23.79166667]}}, {"id": "506", "type": "Feature", "properties": {"Concentration": 11482.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [151.5425446, -26.8477905]}}, {"id": "514", "type": "Feature", "properties": {"Concentration": 17572.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [151.3841667, -25.43333333]}}, {"id": "520", "type": "Feature", "properties": {"Concentration": 10375.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [152.6077433, -27.60159678]}}, {"id": "525", "type": "Feature", "properties": {"Concentration": 14086.0, "Herbarium density": 3, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [151.8569829, -26.51167827]}}, {"id": "545", "type": "Feature", "properties": {"Concentration": 11400.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [151.9199438, -27.46121845]}}, {"id": "665", "type": "Feature", "properties": {"Concentration": 13120.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.5425242, -17.15693359]}}, {"id": "666", "type": "Feature", "properties": {"Concentration": 35475.0, "Herbarium density": 3, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [152.142472, -27.54021019]}}, {"id": "669", "type": "Feature", "properties": {"Concentration": 26335.0, "Herbarium density": 1, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [148.7758468, -26.59022757]}}, {"id": "670", "type": "Feature", "properties": {"Concentration": 25312.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [150.4758111, -24.30689032]}}, {"id": "671", "type": "Feature", "properties": {"Concentration": 22172.0, "Herbarium density": 2, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [150.5008117, -24.49855643]}}, {"id": "673", "type": "Feature", "properties": {"Concentration": 19115.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [147.0591697, -19.84024948]}}, {"id": "674", "type": "Feature", "properties": {"Concentration": 13253.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [151.3258104, -26.40688237]}}, {"id": "677", "type": "Feature", "properties": {"Concentration": 12449.0, "Herbarium density": 1, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [148.4175312, -28.58189523]}}, {"id": "679", "type": "Feature", "properties": {"Concentration": 39145.0, "Herbarium density": 2, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [138.5842589, -18.74861421]}}, {"id": "680", "type": "Feature", "properties": {"Concentration": 22838.0, "Herbarium density": 1, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [138.9175917, -19.41527873]}}, {"id": "682", "type": "Feature", "properties": {"Concentration": 42433.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.2508487, -16.91526606]}}, {"id": "689", "type": "Feature", "properties": {"Concentration": 42736.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [144.4175342, -19.74859191]}}, {"id": "694", "type": "Feature", "properties": {"Concentration": 29862.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [145.009185, -17.00693297]}}, {"id": "696", "type": "Feature", "properties": {"Concentration": 25895.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [144.5008536, -15.49860749]}}, {"id": "698", "type": "Feature", "properties": {"Concentration": 24222.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8258571, -18.1069292]}}, {"id": "700", "type": "Feature", "properties": {"Concentration": 32822.0, "Herbarium density": 2, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [146.5841734, -19.24858642]}}, {"id": "701", "type": "Feature", "properties": {"Concentration": 15951.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [144.4258586, -17.0902675]}}, {"id": "705", "type": "Feature", "properties": {"Concentration": 22063.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [145.4175134, -16.91526564]}}, {"id": "708", "type": "Feature", "properties": {"Concentration": 15693.0, "Herbarium density": 3, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [145.0841844, -17.08193246]}}, {"id": "710", "type": "Feature", "properties": {"Concentration": 16626.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [138.5842559, -17.91528229]}}, {"id": "712", "type": "Feature", "properties": {"Concentration": 11011.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [150.5841542, -26.41521913]}}, {"id": "718", "type": "Feature", "properties": {"Concentration": 12838.0, "Herbarium density": 1, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [149.7508315, -26.24855661]}}, {"id": "720", "type": "Feature", "properties": {"Concentration": 31877.0, "Herbarium density": 1, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [148.4175312, -28.58189523]}}, {"id": "724", "type": "Feature", "properties": {"Concentration": 14614.0, "Herbarium density": 1, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [146.0842034, -24.58190909]}}, {"id": "726", "type": "Feature", "properties": {"Concentration": 21893.0, "Herbarium density": 1, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [145.2508758, -23.74858053]}}, {"id": "730", "type": "Feature", "properties": {"Concentration": 29741.0, "Herbarium density": 3, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [152.1091273, -25.44021411]}}, {"id": "731", "type": "Feature", "properties": {"Concentration": 11337.0, "Herbarium density": 3, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [152.0841275, -25.41521428]}}, {"id": "733", "type": "Feature", "properties": {"Concentration": 10244.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [149.5008158, -22.49856567]}}, {"id": "736", "type": "Feature", "properties": {"Concentration": 14634.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [146.2925137, -20.17358426]}}, {"id": "739", "type": "Feature", "properties": {"Concentration": 11856.0, "Herbarium density": 1, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [150.500835, -28.49855085]}}, {"id": "744", "type": "Feature", "properties": {"Concentration": 17219.0, "Herbarium density": 2, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [144.4258651, -19.09026047]}}, {"id": "749", "type": "Feature", "properties": {"Concentration": 11762.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [145.0091862, -17.42359794]}}, {"id": "754", "type": "Feature", "properties": {"Concentration": 13508.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [143.9425268, -15.60694158]}}, {"id": "757", "type": "Feature", "properties": {"Concentration": 11809.0, "Herbarium density": 2, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [143.5592054, -18.29026569]}}, {"id": "760", "type": "Feature", "properties": {"Concentration": 28405.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [150.917469, -23.74855662]}}, {"id": "761", "type": "Feature", "properties": {"Concentration": 16716.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [138.5759225, -17.87361572]}}, {"id": "768", "type": "Feature", "properties": {"Concentration": 13420.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [147.8591625, -20.57357764]}}, {"id": "772", "type": "Feature", "properties": {"Concentration": 12940.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [151.369386, -25.95013449]}}, {"id": "774", "type": "Feature", "properties": {"Concentration": 81876.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [144.8258657, -20.49025516]}}, {"id": "775", "type": "Feature", "properties": {"Concentration": 52151.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [142.6092024, -12.77362452]}}, {"id": "776", "type": "Feature", "properties": {"Concentration": 13874.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [145.7591915, -21.34024959]}}, {"id": "778", "type": "Feature", "properties": {"Concentration": 14523.0, "Herbarium density": 2, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [140.4925849, -21.50693688]}}, {"id": "780", "type": "Feature", "properties": {"Concentration": 28896.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [150.9174782, -25.58188568]}}, {"id": "781", "type": "Feature", "properties": {"Concentration": 35518.0, "Herbarium density": 2, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [144.4758696, -20.44025654]}}, {"id": "783", "type": "Feature", "properties": {"Concentration": 39235.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [151.0758021, -24.15688822]}}, {"id": "784", "type": "Feature", "properties": {"Concentration": 12440.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [150.9591348, -23.69022328]}}, {"id": "786", "type": "Feature", "properties": {"Concentration": 44154.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [152.29247, -27.57354276]}}, {"id": "787", "type": "Feature", "properties": {"Concentration": 19469.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.8091847, -16.02360439]}}, {"id": "791", "type": "Feature", "properties": {"Concentration": 22752.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [149.7519444, -24.15638889]}}, {"id": "794", "type": "Feature", "properties": {"Concentration": 11587.0, "Herbarium density": 1, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [144.7925385, -21.82358558]}}, {"id": "797", "type": "Feature", "properties": {"Concentration": 14255.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [150.7508148, -25.74855278]}}, {"id": "799", "type": "Feature", "properties": {"Concentration": 20916.0, "Herbarium density": 2, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [138.1759296, -18.7736156]}}, {"id": "802", "type": "Feature", "properties": {"Concentration": 14194.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [146.6178549, -21.50532124]}}, {"id": "806", "type": "Feature", "properties": {"Concentration": 19865.0, "Herbarium density": 1, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [149.1502887, -27.00994759]}}, {"id": "807", "type": "Feature", "properties": {"Concentration": 21074.0, "Herbarium density": 2, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [138.7092576, -18.70694717]}}, {"id": "808", "type": "Feature", "properties": {"Concentration": 17637.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [142.7092034, -13.97361832]}}, {"id": "810", "type": "Feature", "properties": {"Concentration": 18459.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [152.4174682, -27.58187548]}}, {"id": "815", "type": "Feature", "properties": {"Concentration": 10741.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [142.4758708, -13.00695684]}}, {"id": "820", "type": "Feature", "properties": {"Concentration": 11674.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [149.8424796, -22.87356328]}}, {"id": "822", "type": "Feature", "properties": {"Concentration": 46996.0, "Herbarium density": 2, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [138.0320649, -17.85288234]}}, {"id": "823", "type": "Feature", "properties": {"Concentration": 10472.0, "Herbarium density": 3, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [151.7603111, -25.40001382]}}, {"id": "824", "type": "Feature", "properties": {"Concentration": 38471.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [151.9030867, -25.35167993]}}, {"id": "825", "type": "Feature", "properties": {"Concentration": 12627.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.4106203, -17.09582728]}}, {"id": "827", "type": "Feature", "properties": {"Concentration": 12498.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [151.2180136, -25.72357094]}}, {"id": "830", "type": "Feature", "properties": {"Concentration": 11828.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [145.081152, -18.85687953]}}, {"id": "833", "type": "Feature", "properties": {"Concentration": 14319.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [150.7258074, -24.2568894]}}, {"id": "834", "type": "Feature", "properties": {"Concentration": 14076.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [149.8566464, -22.94134081]}}, {"id": "837", "type": "Feature", "properties": {"Concentration": 10132.0, "Herbarium density": 2, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [139.6521368, -20.51127799]}}, {"id": "838", "type": "Feature", "properties": {"Concentration": 22269.0, "Herbarium density": 1, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [149.2239641, -26.94474654]}}, {"id": "840", "type": "Feature", "properties": {"Concentration": 26857.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [145.442513, -16.89026568]}}, {"id": "843", "type": "Feature", "properties": {"Concentration": 10194.0, "Herbarium density": 1, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [144.7633876, -24.82497064]}}, {"id": "844", "type": "Feature", "properties": {"Concentration": 15000.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [150.1249882, -25.39522289]}}, {"id": "847", "type": "Feature", "properties": {"Concentration": 41488.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [149.8405352, -22.86884108]}}, {"id": "849", "type": "Feature", "properties": {"Concentration": 27118.0, "Herbarium density": 2, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [151.2177526, -25.72355074]}}, {"id": "850", "type": "Feature", "properties": {"Concentration": 11773.0, "Herbarium density": 2, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [142.9972849, -22.52775854]}}, {"id": "852", "type": "Feature", "properties": {"Concentration": 14342.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.11864, -17.13804591]}}, {"id": "854", "type": "Feature", "properties": {"Concentration": 31443.0, "Herbarium density": 3, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [145.215355, -17.28256045]}}, {"id": "855", "type": "Feature", "properties": {"Concentration": 32111.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [149.4711606, -22.85614017]}}, {"id": "860", "type": "Feature", "properties": {"Concentration": 28504.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [148.7591566, -21.95690338]}}, {"id": "863", "type": "Feature", "properties": {"Concentration": 11683.0, "Herbarium density": 2, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [149.8758125, -22.87356315]}}, {"id": "867", "type": "Feature", "properties": {"Concentration": 10505.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.225848, -16.57360094]}}, {"id": "868", "type": "Feature", "properties": {"Concentration": 13380.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [148.5758478, -26.32356214]}}, {"id": "869", "type": "Feature", "properties": {"Concentration": 13672.0, "Herbarium density": 2, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [150.5258107, -24.35688999]}}, {"id": "871", "type": "Feature", "properties": {"Concentration": 20241.0, "Herbarium density": 2, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [138.4914819, -18.69694794]}}, {"id": "877", "type": "Feature", "properties": {"Concentration": 15515.0, "Herbarium density": 2, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [148.325829, -21.99023823]}}, {"id": "881", "type": "Feature", "properties": {"Concentration": 21216.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [144.4258587, -17.1069341]}}, {"id": "882", "type": "Feature", "properties": {"Concentration": 31875.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [142.7208683, -13.08945603]}}, {"id": "883", "type": "Feature", "properties": {"Concentration": 19031.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [144.7841992, -20.39358889]}}, {"id": "886", "type": "Feature", "properties": {"Concentration": 10123.0, "Herbarium density": 1, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [147.9155917, -28.31134238]}}, {"id": "888", "type": "Feature", "properties": {"Concentration": 13080.0, "Herbarium density": 3, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [145.0786111, -17.41555556]}}, {"id": "892", "type": "Feature", "properties": {"Concentration": 16044.0, "Herbarium density": 2, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [138.14937, -17.4741]}}, {"id": "894", "type": "Feature", "properties": {"Concentration": 23143.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [145.2172222, -17.31416667]}}, {"id": "896", "type": "Feature", "properties": {"Concentration": 10567.0, "Herbarium density": 3, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [145.1603577, -17.97450264]}}, {"id": "897", "type": "Feature", "properties": {"Concentration": 24376.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.6600834, -17.37033944]}}, {"id": "898", "type": "Feature", "properties": {"Concentration": 21101.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [145.9722369, -19.40247671]}}, {"id": "901", "type": "Feature", "properties": {"Concentration": 15865.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [150.4377697, -26.80605263]}}, {"id": "902", "type": "Feature", "properties": {"Concentration": 17214.0, "Herbarium density": 3, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [151.8528122, -25.82001266]}}, {"id": "904", "type": "Feature", "properties": {"Concentration": 14568.0, "Herbarium density": 1, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [143.0991556, -16.19811407]}}, {"id": "908", "type": "Feature", "properties": {"Concentration": 11906.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [151.3014718, -25.49412747]}}, {"id": "909", "type": "Feature", "properties": {"Concentration": 16794.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [149.675083, -22.60633272]}}, {"id": "910", "type": "Feature", "properties": {"Concentration": 29259.0, "Herbarium density": 1, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [149.7791667, -26.22194444]}}, {"id": "913", "type": "Feature", "properties": {"Concentration": 18138.0, "Herbarium density": 2, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [151.3590833, -28.73166667]}}, {"id": "914", "type": "Feature", "properties": {"Concentration": 13568.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [150.8174167, -25.98872222]}}, {"id": "915", "type": "Feature", "properties": {"Concentration": 11135.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [151.3597778, -25.50144444]}}, {"id": "917", "type": "Feature", "properties": {"Concentration": 13067.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [138.3000785, -18.09208082]}}, {"id": "918", "type": "Feature", "properties": {"Concentration": 23629.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [139.9874158, -19.99977894]}}, {"id": "919", "type": "Feature", "properties": {"Concentration": 11566.0, "Herbarium density": 1, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [147.7505556, -25.71944444]}}, {"id": "920", "type": "Feature", "properties": {"Concentration": 40333.0, "Herbarium density": 2, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [147.5727778, -25.34611111]}}, {"id": "921", "type": "Feature", "properties": {"Concentration": 20680.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.224149, -19.552501]}}, {"id": "922", "type": "Feature", "properties": {"Concentration": 11678.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [146.9083333, -19.84166667]}}, {"id": "923", "type": "Feature", "properties": {"Concentration": 11609.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [150.8786596, -26.03640583]}}, {"id": "928", "type": "Feature", "properties": {"Concentration": 16433.0, "Herbarium density": 1, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [147.9418886, -26.32960451]}}, {"id": "931", "type": "Feature", "properties": {"Concentration": 52259.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.107, -17.764783]}}, {"id": "933", "type": "Feature", "properties": {"Concentration": 15119.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.4175, -17.12055556]}}, {"id": "935", "type": "Feature", "properties": {"Concentration": 15239.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [144.425, -17.10833333]}}, {"id": "937", "type": "Feature", "properties": {"Concentration": 10564.0, "Herbarium density": 1, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [149.325, -27.99166667]}}, {"id": "1073", "type": "Feature", "properties": {"Concentration": 10762.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [150.3000104, -22.88052452]}}, {"id": "2335", "type": "Feature", "properties": {"Concentration": 10570.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [152.917456, -26.74854117]}}, {"id": "2344", "type": "Feature", "properties": {"Concentration": 11055.0, "Herbarium density": 3, "Soil type": 9.0}, "geometry": {"type": "Point", "coordinates": [152.8924611, -27.57353991]}}, {"id": "2365", "type": "Feature", "properties": {"Concentration": 12226.0, "Herbarium density": 3, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [152.8091281, -27.40687388]}}, {"id": "2368", "type": "Feature", "properties": {"Concentration": 12442.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [152.6841288, -27.21243033]}}, {"id": "2375", "type": "Feature", "properties": {"Concentration": 12701.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [143.3091958, -13.34028712]}}, {"id": "2377", "type": "Feature", "properties": {"Concentration": 16311.0, "Herbarium density": 3, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [143.5008606, -13.49861931]}}, {"id": "2378", "type": "Feature", "properties": {"Concentration": 22984.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [143.2508621, -12.74862371]}}, {"id": "2379", "type": "Feature", "properties": {"Concentration": 36570.0, "Herbarium density": 3, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [143.425862, -13.7902846]}}, {"id": "2380", "type": "Feature", "properties": {"Concentration": 15420.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [143.3758624, -13.74028495]}}, {"id": "2381", "type": "Feature", "properties": {"Concentration": 26797.0, "Herbarium density": 3, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [143.2925284, -12.77362351]}}, {"id": "2382", "type": "Feature", "properties": {"Concentration": 48368.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [143.3414166, -12.68223506]}}, {"id": "2384", "type": "Feature", "properties": {"Concentration": 32099.0, "Herbarium density": 3, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [143.4518604, -13.830101]}}, {"id": "2386", "type": "Feature", "properties": {"Concentration": 24560.0, "Herbarium density": 3, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [143.509194, -13.55695232]}}, {"id": "2387", "type": "Feature", "properties": {"Concentration": 21556.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [143.3183369, -12.72090255]}}, {"id": "2388", "type": "Feature", "properties": {"Concentration": 31780.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [142.5172564, -10.74974725]}}, {"id": "2393", "type": "Feature", "properties": {"Concentration": 17104.0, "Herbarium density": 4, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [145.592512, -17.15693082]}}, {"id": "2394", "type": "Feature", "properties": {"Concentration": 11739.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [148.2508255, -20.91524183]}}, {"id": "2395", "type": "Feature", "properties": {"Concentration": 29160.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [148.5841521, -20.24857638]}}, {"id": "2400", "type": "Feature", "properties": {"Concentration": 12146.0, "Herbarium density": 3, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [152.0841284, -25.58188057]}}, {"id": "2401", "type": "Feature", "properties": {"Concentration": 14241.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [146.500842, -19.4985858]}}, {"id": "2402", "type": "Feature", "properties": {"Concentration": 14221.0, "Herbarium density": 3, "Soil type": 9.0}, "geometry": {"type": "Point", "coordinates": [148.5841527, -20.41524243]}}, {"id": "2403", "type": "Feature", "properties": {"Concentration": 18203.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.5841777, -16.74859928]}}, {"id": "2404", "type": "Feature", "properties": {"Concentration": 43801.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.4758469, -17.22359751]}}, {"id": "2405", "type": "Feature", "properties": {"Concentration": 18691.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8258571, -18.1069292]}}, {"id": "2406", "type": "Feature", "properties": {"Concentration": 16656.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.625845, -17.15693073]}}, {"id": "2414", "type": "Feature", "properties": {"Concentration": 13994.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8258571, -18.1069292]}}, {"id": "2418", "type": "Feature", "properties": {"Concentration": 17137.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [148.2508224, -20.08191141]}}, {"id": "2419", "type": "Feature", "properties": {"Concentration": 12644.0, "Herbarium density": 3, "Soil type": 9.0}, "geometry": {"type": "Point", "coordinates": [148.5841527, -20.41524243]}}, {"id": "2420", "type": "Feature", "properties": {"Concentration": 19692.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.825, -18.125]}}, {"id": "2421", "type": "Feature", "properties": {"Concentration": 12221.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [150.9174739, -24.7485541]}}, {"id": "2424", "type": "Feature", "properties": {"Concentration": 11281.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [146.925839, -20.09024907]}}, {"id": "2426", "type": "Feature", "properties": {"Concentration": 15078.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.825, -18.125]}}, {"id": "2428", "type": "Feature", "properties": {"Concentration": 16192.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [146.5276624, -20.15121774]}}, {"id": "2431", "type": "Feature", "properties": {"Concentration": 17063.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.6258444, -16.940265]}}, {"id": "2432", "type": "Feature", "properties": {"Concentration": 13709.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8425236, -18.09026255]}}, {"id": "2435", "type": "Feature", "properties": {"Concentration": 10438.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [148.75915, -20.30690893]}}, {"id": "2436", "type": "Feature", "properties": {"Concentration": 12245.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [148.2258225, -20.04024498]}}, {"id": "2439", "type": "Feature", "properties": {"Concentration": 19009.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [148.6924844, -20.35690896]}}, {"id": "2440", "type": "Feature", "properties": {"Concentration": 12394.0, "Herbarium density": 3, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [149.0258155, -20.90690586]}}, {"id": "2442", "type": "Feature", "properties": {"Concentration": 10645.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [151.4505556, -25.55527778]}}, {"id": "2444", "type": "Feature", "properties": {"Concentration": 17175.0, "Herbarium density": 3, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [151.8258063, -26.94021254]}}, {"id": "2445", "type": "Feature", "properties": {"Concentration": 18924.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [149.2924783, -20.79023872]}}, {"id": "2447", "type": "Feature", "properties": {"Concentration": 25922.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8258571, -18.10692887]}}, {"id": "2448", "type": "Feature", "properties": {"Concentration": 13030.0, "Herbarium density": 2, "Soil type": 9.0}, "geometry": {"type": "Point", "coordinates": [148.225, -20.03944444]}}, {"id": "2449", "type": "Feature", "properties": {"Concentration": 13573.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.6758591, -18.17359607]}}, {"id": "2451", "type": "Feature", "properties": {"Concentration": 14487.0, "Herbarium density": 1, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [148.0195473, -22.67573485]}}, {"id": "2453", "type": "Feature", "properties": {"Concentration": 43136.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.6758434, -16.808321]}}, {"id": "2456", "type": "Feature", "properties": {"Concentration": 18638.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [148.7619277, -20.28246456]}}, {"id": "2459", "type": "Feature", "properties": {"Concentration": 18461.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8258572, -18.14026242]}}, {"id": "2460", "type": "Feature", "properties": {"Concentration": 25203.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8258572, -18.14026242]}}, {"id": "2461", "type": "Feature", "properties": {"Concentration": 22821.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8258572, -18.14026242]}}, {"id": "2462", "type": "Feature", "properties": {"Concentration": 20268.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8258572, -18.12359581]}}, {"id": "2465", "type": "Feature", "properties": {"Concentration": 26380.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8258572, -18.12359581]}}, {"id": "2467", "type": "Feature", "properties": {"Concentration": 21386.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [147.925827, -20.22357863]}}, {"id": "2469", "type": "Feature", "properties": {"Concentration": 17112.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.825, -18.125]}}, {"id": "2471", "type": "Feature", "properties": {"Concentration": 29252.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [146.1425116, -19.09025504]}}, {"id": "2472", "type": "Feature", "properties": {"Concentration": 10664.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [146.7591726, -19.62358454]}}, {"id": "2473", "type": "Feature", "properties": {"Concentration": 10087.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [147.0425013, -19.27358491]}}, {"id": "2474", "type": "Feature", "properties": {"Concentration": 10176.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8284666, -18.12966495]}}, {"id": "2476", "type": "Feature", "properties": {"Concentration": 17081.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [147.9318064, -21.01224197]}}, {"id": "2477", "type": "Feature", "properties": {"Concentration": 45219.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [149.6091411, -20.87357068]}}, {"id": "2478", "type": "Feature", "properties": {"Concentration": 18370.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [144.8425236, -18.10692915]}}, {"id": "2479", "type": "Feature", "properties": {"Concentration": 20570.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [148.9872249, -25.20717276]}}, {"id": "2481", "type": "Feature", "properties": {"Concentration": 25218.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [151.8696576, -25.31925293]}}, {"id": "2483", "type": "Feature", "properties": {"Concentration": 15309.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.609178, -16.97359823]}}, {"id": "2484", "type": "Feature", "properties": {"Concentration": 10325.0, "Herbarium density": 3, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [148.6701184, -20.87471935]}}, {"id": "2485", "type": "Feature", "properties": {"Concentration": 10699.0, "Herbarium density": 3, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [148.6701184, -20.87471935]}}, {"id": "2486", "type": "Feature", "properties": {"Concentration": 10420.0, "Herbarium density": 2, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [144.8208333, -18.11666667]}}, {"id": "2487", "type": "Feature", "properties": {"Concentration": 10403.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [148.4558333, -21.23805556]}}, {"id": "2488", "type": "Feature", "properties": {"Concentration": 27960.0, "Herbarium density": 2, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [148.5805782, -20.20619085]}}, {"id": "2491", "type": "Feature", "properties": {"Concentration": 24025.0, "Herbarium density": 2, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [148.4591531, -20.10691064]}}, {"id": "2492", "type": "Feature", "properties": {"Concentration": 17007.0, "Herbarium density": 3, "Soil type": 9.0}, "geometry": {"type": "Point", "coordinates": [148.7258186, -20.69024097]}}, {"id": "2494", "type": "Feature", "properties": {"Concentration": 39166.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [149.4091438, -20.90690456]}}, {"id": "2495", "type": "Feature", "properties": {"Concentration": 15896.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [146.7591711, -19.19025276]}}, {"id": "2497", "type": "Feature", "properties": {"Concentration": 14811.0, "Herbarium density": 2, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [149.8239681, -23.53317919]}}, {"id": "2498", "type": "Feature", "properties": {"Concentration": 11396.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [151.9191574, -25.22661868]}}, {"id": "2499", "type": "Feature", "properties": {"Concentration": 38854.0, "Herbarium density": 2, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [150.7439351, -25.33224082]}}, {"id": "2500", "type": "Feature", "properties": {"Concentration": 18769.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [150.9817724, -24.88819204]}}, {"id": "2502", "type": "Feature", "properties": {"Concentration": 26730.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [151.9100356, -26.15306742]}}, {"id": "2504", "type": "Feature", "properties": {"Concentration": 11627.0, "Herbarium density": 2, "Soil type": 1.0}, "geometry": {"type": "Point", "coordinates": [151.5924762, -26.92354699]}}, {"id": "2508", "type": "Feature", "properties": {"Concentration": 14469.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [151.1958654, -25.01571368]}}, {"id": "2509", "type": "Feature", "properties": {"Concentration": 16648.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [151.3033436, -24.92944741]}}, {"id": "2510", "type": "Feature", "properties": {"Concentration": 12654.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.0443302, -15.64171966]}}, {"id": "2511", "type": "Feature", "properties": {"Concentration": 12376.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.0907456, -15.719706]}}, {"id": "2513", "type": "Feature", "properties": {"Concentration": 13072.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [146.8406595, -19.14511614]}}, {"id": "2515", "type": "Feature", "properties": {"Concentration": 10288.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [148.5916667, -21.475]}}, {"id": "2521", "type": "Feature", "properties": {"Concentration": 12483.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [144.8244444, -18.11138889]}}, {"id": "2528", "type": "Feature", "properties": {"Concentration": 11733.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.60918, -17.6735953]}}, {"id": "2530", "type": "Feature", "properties": {"Concentration": 12206.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.8425106, -17.67359466]}}, {"id": "2531", "type": "Feature", "properties": {"Concentration": 10458.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.5841795, -17.41526309]}}, {"id": "2532", "type": "Feature", "properties": {"Concentration": 14809.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7508438, -17.24859668]}}, {"id": "2533", "type": "Feature", "properties": {"Concentration": 10720.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7508438, -17.24859668]}}, {"id": "2536", "type": "Feature", "properties": {"Concentration": 25920.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.4175143, -17.24859756]}}, {"id": "2539", "type": "Feature", "properties": {"Concentration": 10317.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7508442, -17.41526265]}}, {"id": "2541", "type": "Feature", "properties": {"Concentration": 11097.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.5591809, -17.79026164]}}, {"id": "2542", "type": "Feature", "properties": {"Concentration": 11251.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7591779, -17.5735953]}}, {"id": "2545", "type": "Feature", "properties": {"Concentration": 12482.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7425109, -17.37359618]}}, {"id": "2546", "type": "Feature", "properties": {"Concentration": 15613.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7425109, -17.37359618]}}, {"id": "2548", "type": "Feature", "properties": {"Concentration": 31133.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.7508468, -18.24859265]}}, {"id": "2549", "type": "Feature", "properties": {"Concentration": 18350.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.8425101, -17.50692869]}}, {"id": "2550", "type": "Feature", "properties": {"Concentration": 12062.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7508442, -17.41526265]}}, {"id": "2553", "type": "Feature", "properties": {"Concentration": 17529.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7039608, -17.29867017]}}, {"id": "2554", "type": "Feature", "properties": {"Concentration": 11229.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.6373122, -18.00967906]}}, {"id": "2560", "type": "Feature", "properties": {"Concentration": 21013.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7425109, -17.39026278]}}, {"id": "2563", "type": "Feature", "properties": {"Concentration": 11249.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.5869571, -17.35276334]}}, {"id": "2565", "type": "Feature", "properties": {"Concentration": 11102.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7008333, -17.41261111]}}, {"id": "2586", "type": "Feature", "properties": {"Concentration": 13612.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [143.2511163, -12.58182734]}}, {"id": "2605", "type": "Feature", "properties": {"Concentration": 15852.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.4257903, -28.19020317]}}, {"id": "2606", "type": "Feature", "properties": {"Concentration": 14670.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.4257903, -28.19020317]}}, {"id": "2607", "type": "Feature", "properties": {"Concentration": 23847.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.4257903, -28.19020317]}}, {"id": "2608", "type": "Feature", "properties": {"Concentration": 11928.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.4257903, -28.19020317]}}, {"id": "2609", "type": "Feature", "properties": {"Concentration": 22214.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.3424583, -28.20687021]}}, {"id": "2610", "type": "Feature", "properties": {"Concentration": 15958.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.4280124, -28.18853649]}}, {"id": "2612", "type": "Feature", "properties": {"Concentration": 11654.0, "Herbarium density": 3, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [152.9257893, -26.75687445]}}, {"id": "2613", "type": "Feature", "properties": {"Concentration": 18821.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.4058477, -28.18176219]}}, {"id": "2616", "type": "Feature", "properties": {"Concentration": 21778.0, "Herbarium density": 3, "Soil type": 10.0}, "geometry": {"type": "Point", "coordinates": [153.500785, -27.49853717]}}, {"id": "2617", "type": "Feature", "properties": {"Concentration": 13686.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.1610688, -27.66298295]}}, {"id": "2618", "type": "Feature", "properties": {"Concentration": 10830.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.1610688, -27.66298295]}}, {"id": "2619", "type": "Feature", "properties": {"Concentration": 17463.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.1610688, -27.66298295]}}, {"id": "2621", "type": "Feature", "properties": {"Concentration": 10085.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.1610688, -27.66298295]}}, {"id": "2623", "type": "Feature", "properties": {"Concentration": 18940.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.1610688, -27.66298295]}}, {"id": "2624", "type": "Feature", "properties": {"Concentration": 18378.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.0424583, -27.47353935]}}, {"id": "2625", "type": "Feature", "properties": {"Concentration": 11301.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [152.9924595, -27.54020615]}}, {"id": "2626", "type": "Feature", "properties": {"Concentration": 16997.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [152.9924595, -27.54020615]}}, {"id": "2630", "type": "Feature", "properties": {"Concentration": 10796.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.1610688, -27.66298294]}}, {"id": "2631", "type": "Feature", "properties": {"Concentration": 15495.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [152.9924595, -27.54020615]}}, {"id": "2647", "type": "Feature", "properties": {"Concentration": 10213.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7091775, -17.2235969]}}, {"id": "2650", "type": "Feature", "properties": {"Concentration": 10664.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7091775, -17.2235969]}}, {"id": "2668", "type": "Feature", "properties": {"Concentration": 23232.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [152.8924539, -26.30687548]}}, {"id": "2737", "type": "Feature", "properties": {"Concentration": 15258.0, "Herbarium density": 3, "Soil type": 9.0}, "geometry": {"type": "Point", "coordinates": [145.1425123, -15.19027428]}}, {"id": "2739", "type": "Feature", "properties": {"Concentration": 12688.0, "Herbarium density": 2, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [144.8297926, -14.62971316]}}, {"id": "2742", "type": "Feature", "properties": {"Concentration": 14923.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.1225, -15.18777778]}}, {"id": "2748", "type": "Feature", "properties": {"Concentration": 15689.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.1325, -15.08833333]}}, {"id": "2780", "type": "Feature", "properties": {"Concentration": 12449.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.6091778, -16.92359845]}}, {"id": "2812", "type": "Feature", "properties": {"Concentration": 19883.0, "Herbarium density": 3, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [148.6258185, -20.32357597]}}, {"id": "2813", "type": "Feature", "properties": {"Concentration": 32634.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [148.7591502, -20.34024213]}}, {"id": "2821", "type": "Feature", "properties": {"Concentration": 12684.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [148.7661705, -20.28662423]}}, {"id": "2824", "type": "Feature", "properties": {"Concentration": 14925.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [148.75915, -20.29024232]}}, {"id": "2825", "type": "Feature", "properties": {"Concentration": 13372.0, "Herbarium density": 2, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [148.659151, -20.22357623]}}, {"id": "2826", "type": "Feature", "properties": {"Concentration": 14299.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [148.8493619, -20.3589302]}}, {"id": "2827", "type": "Feature", "properties": {"Concentration": 12046.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [148.7091506, -20.27357588]}}, {"id": "2848", "type": "Feature", "properties": {"Concentration": 13525.0, "Herbarium density": 3, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [143.0925298, -12.25695999]}}, {"id": "2852", "type": "Feature", "properties": {"Concentration": 14666.0, "Herbarium density": 3, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [143.4925279, -13.7736179]}}, {"id": "2853", "type": "Feature", "properties": {"Concentration": 13576.0, "Herbarium density": 2, "Soil type": 10.0}, "geometry": {"type": "Point", "coordinates": [142.8486111, -11.62138889]}}, {"id": "2867", "type": "Feature", "properties": {"Concentration": 16896.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.8119444, -16.01555556]}}, {"id": "2868", "type": "Feature", "properties": {"Concentration": 24106.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.8119444, -16.01555556]}}, {"id": "2869", "type": "Feature", "properties": {"Concentration": 19182.0, "Herbarium density": 3, "Soil type": 7.0}, "geometry": {"type": "Point", "coordinates": [145.0758475, -15.69027199]}}, {"id": "2871", "type": "Feature", "properties": {"Concentration": 15912.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.9029251, -15.86736994]}}, {"id": "2874", "type": "Feature", "properties": {"Concentration": 11820.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.1780556, -16.68111111]}}, {"id": "2878", "type": "Feature", "properties": {"Concentration": 39919.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.8119444, -16.01555556]}}, {"id": "2880", "type": "Feature", "properties": {"Concentration": 12607.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [145.1805556, -16.68166667]}}, {"id": "2881", "type": "Feature", "properties": {"Concentration": 17734.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [145.1805556, -16.68166667]}}, {"id": "2882", "type": "Feature", "properties": {"Concentration": 13277.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.0758476, -15.69582752]}}, {"id": "2883", "type": "Feature", "properties": {"Concentration": 15640.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [144.5923661, -14.70326784]}}, {"id": "2885", "type": "Feature", "properties": {"Concentration": 15536.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [144.5972232, -14.51269098]}}, {"id": "2886", "type": "Feature", "properties": {"Concentration": 11959.0, "Herbarium density": 2, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [144.5344616, -14.19166944]}}, {"id": "2887", "type": "Feature", "properties": {"Concentration": 17422.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [144.8222222, -16.02027778]}}, {"id": "2892", "type": "Feature", "properties": {"Concentration": 11536.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.1161377, -15.68236209]}}, {"id": "2898", "type": "Feature", "properties": {"Concentration": 18201.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [146.0925119, -19.00692215]}}, {"id": "2899", "type": "Feature", "properties": {"Concentration": 27059.0, "Herbarium density": 4, "Soil type": null}, "geometry": {"type": "Point", "coordinates": [145.584179, -17.24859712]}}, {"id": "2900", "type": "Feature", "properties": {"Concentration": 12204.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.5008474, -17.49859631]}}, {"id": "2907", "type": "Feature", "properties": {"Concentration": 11161.0, "Herbarium density": 3, "Soil type": 9.0}, "geometry": {"type": "Point", "coordinates": [146.250843, -18.91525534]}}, {"id": "2908", "type": "Feature", "properties": {"Concentration": 13182.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.5091812, -17.67359558]}}, {"id": "2912", "type": "Feature", "properties": {"Concentration": 12183.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.0925155, -16.27360259]}}, {"id": "2913", "type": "Feature", "properties": {"Concentration": 15287.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.0925155, -16.27360259]}}, {"id": "2914", "type": "Feature", "properties": {"Concentration": 11007.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.0925155, -16.27360259]}}, {"id": "2925", "type": "Feature", "properties": {"Concentration": 10609.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.0258495, -16.25693616]}}, {"id": "2926", "type": "Feature", "properties": {"Concentration": 12101.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.6442544, -17.96635251]}}, {"id": "2930", "type": "Feature", "properties": {"Concentration": 12117.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7591774, -17.37359613]}}, {"id": "2933", "type": "Feature", "properties": {"Concentration": 17204.0, "Herbarium density": 3, "Soil type": 9.0}, "geometry": {"type": "Point", "coordinates": [145.8749289, -18.65553323]}}, {"id": "2934", "type": "Feature", "properties": {"Concentration": 13692.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.7758438, -17.37359609]}}, {"id": "2937", "type": "Feature", "properties": {"Concentration": 30266.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.7240278, -17.64716667]}}, {"id": "3279", "type": "Feature", "properties": {"Concentration": 11526.0, "Herbarium density": 3, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [152.9636111, -26.65583333]}}, {"id": "4188", "type": "Feature", "properties": {"Concentration": 12504.0, "Herbarium density": 3, "Soil type": 14.0}, "geometry": {"type": "Point", "coordinates": [145.35918, -16.62360039]}}, {"id": "4227", "type": "Feature", "properties": {"Concentration": 13411.0, "Herbarium density": 3, "Soil type": 2.0}, "geometry": {"type": "Point", "coordinates": [148.5127675, -21.14385127]}}, {"id": "4334", "type": "Feature", "properties": {"Concentration": 10004.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [153.2658333, -28.23166667]}}, {"id": "4376", "type": "Feature", "properties": {"Concentration": 15546.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.2507912, -27.91520438]}}, {"id": "4383", "type": "Feature", "properties": {"Concentration": 13804.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.2424586, -28.00687095]}}, {"id": "4409", "type": "Feature", "properties": {"Concentration": 17707.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [152.7507947, -27.24854107]}}, {"id": "4412", "type": "Feature", "properties": {"Concentration": 10193.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [152.9078038, -26.80806166]}}, {"id": "4420", "type": "Feature", "properties": {"Concentration": 11437.0, "Herbarium density": 3, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [152.91227, -26.74577]}}, {"id": "4675", "type": "Feature", "properties": {"Concentration": 10402.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [145.1758484, -16.50693469]}}]}

var coHyperaccumulator = {"type": "FeatureCollection", "features": [{"id": "1169", "type": "Feature", "properties": {"Concentration": 378.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [150.4174735, -23.24855998]}}, {"id": "2061", "type": "Feature", "properties": {"Concentration": 305.0, "Herbarium density": 3, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [153.1780862, -28.13916982]}}, {"id": "2150", "type": "Feature", "properties": {"Concentration": 304.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.2525, -28.03258333]}}, {"id": "2613", "type": "Feature", "properties": {"Concentration": 839.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.4058477, -28.18176219]}}]}

var niHyperaccumulator = {"type": "FeatureCollection", "features": [{"id": "1169", "type": "Feature", "properties": {"Concentration": 1321.0, "Herbarium density": 2, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [150.4174735, -23.24855998]}}, {"id": "3610", "type": "Feature", "properties": {"Concentration": 7976.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.5841795, -17.41526309]}}, {"id": "5789", "type": "Feature", "properties": {"Concentration": 7976.0, "Herbarium density": 4, "Soil type": 5.0}, "geometry": {"type": "Point", "coordinates": [145.5841795, -17.41526309]}}]}

var znHyperaccumulator = {"type": "FeatureCollection", "features": [{"id": "2605", "type": "Feature", "properties": {"Concentration": 4435.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.4257903, -28.19020317]}}, {"id": "2606", "type": "Feature", "properties": {"Concentration": 3502.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.4257903, -28.19020317]}}, {"id": "2610", "type": "Feature", "properties": {"Concentration": 3722.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.4280124, -28.18853649]}}, {"id": "2614", "type": "Feature", "properties": {"Concentration": 4609.0, "Herbarium density": 3, "Soil type": 3.0}, "geometry": {"type": "Point", "coordinates": [153.4277778, -28.18833333]}}, {"id": "4058", "type": "Feature", "properties": {"Concentration": 25536.0, "Herbarium density": 3, "Soil type": 11.0}, "geometry": {"type": "Point", "coordinates": [153.047675, -27.53916944]}}, {"id": "5195", "type": "Feature", "properties": {"Concentration": 6955.0, "Herbarium density": 3, "Soil type": 8.0}, "geometry": {"type": "Point", "coordinates": [153.0843986, -27.58173464]}}, {"id": "5417", "type": "Feature", "properties": {"Concentration": 3163.0, "Herbarium density": 2, "Soil type": 4.0}, "geometry": {"type": "Point", "coordinates": [149.1916667, -21.575]}}]}
    
var soil_type = ["Vertosol", "Sodosol", "Dermosol","Chromosol","Ferrosol","Kurosol","Tenosol","Kandosol","Hydrosol","Podosol","Rudosol","Calcarasol","Organosol","Anthroposol"]

var herbarium_dict = ['0-10', '11-100', '101-1000', '>1000'];

var mnLayer = L.geoJSON(mnHyperaccumulator, {
    onEachFeature: function (feature, layer) {
        // Bind a popup to each marker displaying properties
        var popupContent = "";
        for (var prop in feature.properties) {
        // Conditionally format the popup content based on the property name
            if (prop === "Concentration") {
                popupContent += "<p class='popupP' style='margin:0;'><strong>" + prop + ":</strong> " + feature.properties[prop] + " μg/g </p>";
            } else if (prop === "Herbarium density") {
                popupContent += "<p  class='popupP' style='margin:0;' ><strong>" + prop + ":</strong> " + herbarium_dict[feature.properties[prop]] + " km<sup>2</sup></p>";
            } else if (prop === "Soil type") {
                popupContent += "<p class='popupP' style='margin:0;' ><strong>" + prop + ":</strong> " + soil_type[feature.properties[prop]] + "</p>";
            } else {
                popupContent += "<p class='popupP' style='margin:0;' ><strong>" + prop + ":</strong> " + feature.properties[prop] + "</p>";
            }
        }
            layer.bindPopup(popupContent, );
    },
    
    
})

var coLayer = L.geoJSON(coHyperaccumulator, {
    onEachFeature: function (feature, layer) {
        // Bind a popup to each marker displaying properties
        var popupContent = "<h3>Properties:</h3>";
        for (var prop in feature.properties) {
        // Conditionally format the popup content based on the property name
        if (prop === "Concentration") {
            popupContent += "<p><strong>" + prop + ":</strong> " + feature.properties[prop] + " μg/g </p>";
        } else if (prop === "Herbarium density") {
            popupContent += "<p><strong>" + prop + ":</strong> " + herbarium_dict[feature.properties[prop]] + " km<sup>2</sup></p>";
        } else if (prop === "Soil type") {
            popupContent += "<p><strong>" + prop + ":</strong> " + soil_type[feature.properties[prop]] + "</p>";
        } else {
            popupContent += "<p><strong>" + prop + ":</strong> " + feature.properties[prop] + "</p>";
        }
    }
        layer.bindPopup(popupContent);
    }
})


var znLayer = L.geoJSON(znHyperaccumulator, {
    onEachFeature: function (feature, layer) {
        // Bind a popup to each marker displaying properties
        var popupContent = "<h3>Properties:</h3>";
        for (var prop in feature.properties) {
            // Conditionally format the popup content based on the property name
            if (prop === "Concentration") {
                popupContent += "<p><strong>" + prop + ":</strong> " + feature.properties[prop] + " μg/g </p>";
            } else if (prop === "Herbarium density") {
                popupContent += "<p><strong>" + prop + ":</strong> " + herbarium_dict[feature.properties[prop]] + " km<sup>2</sup></p>";
            } else if (prop === "Soil type") {
                popupContent += "<p><strong>" + prop + ":</strong> " + soil_type[feature.properties[prop]] + "</p>";
            } else {
                popupContent += "<p><strong>" + prop + ":</strong> " + feature.properties[prop] + "</p>";
            }
        }
        layer.bindPopup(popupContent);
    },
})
var niLayer = L.geoJSON(niHyperaccumulator, {
    onEachFeature: function (feature, layer) {
        // Bind a popup to each marker displaying properties
        var popupContent = "<h3>Properties:</h3>";
        for (var prop in feature.properties) {
        // Conditionally format the popup content based on the property name
        if (prop === "Concentration") {
            popupContent += "<p><strong>" + prop + ":</strong> " + feature.properties[prop] + " μg/g </p>";
        } else if (prop === "Herbarium density") {
            popupContent += "<p><strong>" + prop + ":</strong> " + herbarium_dict[feature.properties[prop]] + " km<sup>2</sup></p>";
        } else if (prop === "Soil type") {
            popupContent += "<p><strong>" + prop + ":</strong> " + soil_type[feature.properties[prop]] + "</p>";
        } else {
            popupContent += "<p><strong>" + prop + ":</strong> " + feature.properties[prop] + "</p>";
        }
    }
        layer.bindPopup(popupContent);
    }
})

// Fit the map to the bounds of the GeoJSON data
var cities = L.layerGroup([mnLayer, coLayer, znLayer, niLayer]);
var hyperaccumulatorMap = L.map('hyperaccumulatorMap', {
    center: [39.73, -104.99],
    zoom: 10,
    layers: [osm, cities]
});
// var overlayMaps = {
//     "Mn Hyperaccumulator": mnLayer,
//     "Co Hyperaccumulator": coLayer,
//     "Ni Hyperaccumulator": niLayer,
//     "Zn Hyperaccumulator": znLayer,
// };
// var baseMaps = {
//     "OpenStreetMap": osm,
// };
// var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(hyperaccumulatorMap);

var topLeft = L.latLng(-10.455462016910062, 137.51698255867112);
var bottomRight = L.latLng(-28.98946380911413, 154.88357992191283);

// Create a LatLngBounds object from the coordinates
var bounds = L.latLngBounds(topLeft, bottomRight);

// Fit the map to the bounds
hyperaccumulatorMap.fitBounds(bounds);

var layers = {
    "Mn Layer": mnLayer,
    "Ni Layer": niLayer,
    "Co Layer": coLayer,
    "Zn Layer": znLayer
};

var styleProps = {
    "Mn Layer": "hue-rotate(45deg)",
    "Ni Layer": "hue-rotate(135deg)",
    "Co Layer": "hue-rotate(90deg)",
    "Zn Layer": "hue-rotate(225deg)"
};

function markerColor(mapLayer, styleProp){
    mapLayer.eachLayer(function (layer) {
        layer._icon.style.filter = styleProps[styleProp];
    });
}

markerColor(mnLayer, "Mn Layer")
markerColor(coLayer, "Co Layer")
markerColor(niLayer, "Ni Layer")
markerColor(znLayer, "Zn Layer")


// Function to toggle layer visibility based on checkboxes
function toggleLayerVisibility(layerName, checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    if (checkbox.checked) {
        hyperaccumulatorMap.addLayer(layers[layerName]);
        markerColor(layers[layerName], layerName)
    } else {
        hyperaccumulatorMap.removeLayer(layers[layerName]);
    }
}

// Add event listeners to the checkboxes to toggle layer visibility
document.getElementById("mnLayerCheckbox").addEventListener('change', function() {
    toggleLayerVisibility("Mn Layer", "mnLayerCheckbox");
});

document.getElementById("niLayerCheckbox").addEventListener('change', function() {
    toggleLayerVisibility("Ni Layer", "niLayerCheckbox");
});

document.getElementById("coLayerCheckbox").addEventListener('change', function() {
    toggleLayerVisibility("Co Layer", "coLayerCheckbox");
});
document.getElementById("znLayerCheckbox").addEventListener('change', function() {
    toggleLayerVisibility("Zn Layer", "znLayerCheckbox");
});

function extractHerbariumData(data) {
    const herbariumData = {
        '0-10': 0,
        '11-100': 0,
        '101-1000': 0,
        '>1000': 0
    };
    for (const feature of data.features) {
        const density = feature.properties['Herbarium density'];
        switch (density) {
            case 1:
                herbariumData['0-10']++;
                break;
            case 2:
                herbariumData['11-100']++;
                break;
            case 3:
                herbariumData['101-1000']++;
                break;
            case 4:
                herbariumData['>1000']++;
                break;
            // Add a default case if needed
        }
    }
    return herbariumData;
}

function extractSoilTypeData(data) {
    var soilTypeDictionary = {};

    for (const soilType of soil_type) {
        soilTypeDictionary[soilType] = 0;
    }

    // for (const feature of data.features) {
    //     soilTypeData.push(feature.properties['Soil type']);
    // }
    for (const feature of data.features) {
        const density = feature.properties['Soil type'];
        switch (density) {
            case 1:
                soilTypeDictionary[soil_type[0]]++;
                break;
            case 2:
                soilTypeDictionary[soil_type[1]]++;
                break;
            case 3:
                soilTypeDictionary[soil_type[2]]++;
                break;
            case 4:
                soilTypeDictionary[soil_type[3]]++;
                break;
            case 5:
                soilTypeDictionary[soil_type[4]]++;
                break;
            case 6:
                soilTypeDictionary[soil_type[5]]++;
                break;
            case 7:
                soilTypeDictionary[soil_type[6]]++;
                break;
            case 8:
                soilTypeDictionary[soil_type[7]]++;
                break;
            case 9:
                soilTypeDictionary[soil_type[8]]++;
                break;
            case 10:
                soilTypeDictionary[soil_type[9]]++;
                break;
            case 11:
                soilTypeDictionary[soil_type[10]]++;
                break;
            case 12:
                soilTypeDictionary[soil_type[11]]++;
                break;
            case 13:
                soilTypeDictionary[soil_type[12]]++;
                break;
            case 14:
                soilTypeDictionary[soil_type[13]]++;
                break;
        }
    }
    return soilTypeDictionary;
}

function createSpatialDistributionHyperaccumulatorChart(canvasId, data1, data2, data3, data4, labels, title) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Mn hyperaccumulators',
                data: data1,
                backgroundColor: '#9068da', // Customize the color
                borderWidth: 1,
            }, {
                label: 'Co hyperaccumulators',
                data: data2,
                backgroundColor: '#d763bb', // Customize the color
                borderWidth: 1,
            }, {
                label: 'Ni hyperaccumulators',
                data: data3,
                backgroundColor: '#e25260', // Customize the color
                borderWidth: 1,
            }, {
                label: 'Zn hyperaccumulators',
                data: data4,
                backgroundColor: '#528200', // Customize the color
                borderWidth: 1,
            }
        ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                title: {
                    display: false,
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
                    text: "Count",
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
                    display: false,
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
}



// Extract data for niHyperaccumulator
const niHerbariumData = extractHerbariumData(niHyperaccumulator);
const niSoilTypeData = extractSoilTypeData(niHyperaccumulator);

// Extract data for coHyperaccumulator
const coHerbariumData = extractHerbariumData(coHyperaccumulator);
const coSoilTypeData = extractSoilTypeData(coHyperaccumulator);

const mnHerbariumData = extractHerbariumData(mnHyperaccumulator);
const mnSoilTypeData = extractSoilTypeData(mnHyperaccumulator);

const znHerbariumData = extractHerbariumData(znHyperaccumulator);
const znSoilTypeData = extractSoilTypeData(znHyperaccumulator);



var herbariumChart= createSpatialDistributionHyperaccumulatorChart('herbariumChartCanvas', mnHerbariumData, coHerbariumData, niHerbariumData, znHerbariumData, herbarium_dict, 'Herbarium Density');
var soilTypeChart = createSpatialDistributionHyperaccumulatorChart('soilTypeChartCanvas', mnSoilTypeData, coSoilTypeData, niSoilTypeData, znSoilTypeData, soil_type, 'Soil Type');
// Add event listeners to the checkboxes

const initialDataHerbariumData = {
    mn: mnHerbariumData,
    co: coHerbariumData,
    ni: niHerbariumData,
    zn: znHerbariumData
};


const initialDataSoilType = {
    mn: mnSoilTypeData,
    co: coSoilTypeData,
    ni: niSoilTypeData,
    zn: znSoilTypeData
};


const layerCheckboxes = document.querySelectorAll('.layerCheckbox');
layerCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Update the chart data based on checkbox states
        const mnHerbariumInitialData = checkboxIsChecked('mnLayerCheckbox') ? initialDataHerbariumData.mn : [];
        const coHerbariumInitialData = checkboxIsChecked('coLayerCheckbox') ? initialDataHerbariumData.co : [];
        const niHerbariumInitialData = checkboxIsChecked('niLayerCheckbox') ? initialDataHerbariumData.ni : [];
        const znHerbariumInitialData = checkboxIsChecked('znLayerCheckbox') ? initialDataHerbariumData.zn : [];

        const mnSoilTypeInitialData = checkboxIsChecked('mnLayerCheckbox') ? initialDataSoilType.mn : [];
        const coSoilTypeInitialData = checkboxIsChecked('coLayerCheckbox') ? initialDataSoilType.co : [];
        const niSoilTypeInitialData = checkboxIsChecked('niLayerCheckbox') ? initialDataSoilType.ni : [];
        const znSoilTypeInitialData = checkboxIsChecked('znLayerCheckbox') ? initialDataSoilType.zn : [];

        // Update the chart with the new data
        updateChartData(herbariumChart, mnHerbariumInitialData, coHerbariumInitialData, niHerbariumInitialData, znHerbariumInitialData);
        updateChartData(soilTypeChart, mnSoilTypeInitialData, coSoilTypeInitialData, niSoilTypeInitialData, znSoilTypeInitialData);
    });
});

// Function to check if a checkbox is checked
function checkboxIsChecked(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    return checkbox.checked;
}

// Function to update chart data
function updateChartData(chart, data1, data2, data3, data4) {
    chart.data.datasets[0].data = data1;
    chart.data.datasets[1].data = data2;
    chart.data.datasets[2].data = data3;
    chart.data.datasets[3].data = data4;
    chart.update();
}