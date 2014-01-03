define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
				id: "34aeb3a82e144839b24d721f25559bff",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false
			},{
				id: "a63e4640f3c4499faee32811c85e82b5",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: true
			},
			{
				id: "e226760a7e6741c9b2f21ab9308b7286",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: true
			}
			// To add additional maps to the template, uncomment the below section for
			// each map you would like to add. Webmap titles from ArcGIS Online will
			// be used unless you fill in title attribute.
			//, {
			//
			//	id: "739db23c3f674005a405c68e337f5011",
			//	title: "",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			//	showSingleTimeInstance: true
			//	},{
			//
			//	id: "739db23c3f674005a405c68e337f5011",
			//	title: "",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			//	showSingleTimeInstance: true
			//	}
			],
			//Enter a title, if no title is specified, the webmap's title is used.
			title: "Add a title here",
			//Enter a subtitle, if not specified the ArcGIS.com web map's summary is used
			subtitle: "Add a subtitle here",
			// If false, each tab will have a number on it. If true, the first tab will not have a number and the second tab will start counting at 1.
			startCountOnSecondTab: false,
			//Sync maps scale and location
			syncMaps: true,
			//Display geocoder search widget
			geocoderWidget: false,
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey : "",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "http://www.arcgis.com/sharing/rest/content/items"
		}
	}
);
