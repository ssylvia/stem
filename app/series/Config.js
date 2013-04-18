define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "14db98e4960140b190f4b4e2c7e653c4",
			//The web map id
			webmaps: [
			{
				id: "739db23c3f674005a405c68e337f5011",
				title: "Federal funding for STEM education"
			}],
			//Enter a title, if no title is specified, the webmap's title is used.
			title: "",
			//Enter a subtitle, if not specified the ArcGIS.com web map's summary is used
			subtitle: "",
			//Sync maps scale and location
			syncMaps: false,
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey: "Akt3ZoeZ089qyG3zWQZSWpwV3r864AHStal7Aon21-Fyxwq_KdydAH32LTwhieA8",
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: ""
		}
	}
);