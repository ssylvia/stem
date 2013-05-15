define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
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
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "http://www.arcgis.com/sharing/rest/content/items"
		}
	}
);
