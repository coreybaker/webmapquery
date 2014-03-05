var webmapID = "ec334b4036f64ba8bb4155f517d4eb66"; //1a40fa5cc1ab4569b79f45444d728067
var BingMapsKey = "";

var _map;
var _layers;
var webMap; 
var _legend; 
var _results; 

require(["esri/map", "esri/arcgis/utils",
"esri/dijit/Legend","esri/dijit/Legend",
"esri/tasks/query", "esri/tasks/QueryTask",
"dojo/domReady!"], 

function(map, utils, Legend, Query, QueryTask){

		utils.createMap(webmapID, "mapDiv").then(function(response){
			_map = response.map; 
		
		_legend = new Legend({
			map:_map,
			layerInfos: (utils.getLegendLayers(response))
		}, "legendDiv");

			_legend.startup();

		console.log(utils.getItem);

		_layers = response.itemInfo.itemData.operationalLayers;

		//holy cow this actually returned what I was looking for
		console.log(_layers);

		});



		//  webMap = utils.createMap(webmapID, "mapDiv", {
		// 	mapOptions: {
		// 		slide:false,
		// 		wrapAround180:false,
		// 		zoomSlider: false
		// 	},
		// 	ignorePopups: true,
		// 	bingMapsKey: BingMapsKey
		// });

		// webMap.addCallback(function(response){
		// _map = response.map;

		// _layers = response.itemInfo.itemData.operationalLayers; 
		// var layerInfo = [];

		// //appends the title of the webmap to the #mapHeader selector 
		// $("#mapHeader").append(_layers[0].title);

		// var legend = new Legend({
		// 	map: mapDiv,
		// 	layerInfos: layerInfo
		// }, "legendDiv");

		// legend.startup();

		// var query = new Query();
			
		// var johnson = query.outFields = ["State", "WEB", "PHONE"];
		// console.log(johnson);

		// }); //end map 

		


		}); //end requires


	

		





	



