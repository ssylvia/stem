define(["dojo/dom","dojo/date/locale","esri/dijit/TimeSlider"], function(dom,locale,Slider){
	/**
	 * Time Slider
	 * @class Time Slider
	 *
	 * NOTE: Requires Jquery
	 */
	return function TimeSlider(selector,map,timeProperties,showSingleTimePoint){
		
		//  $("#" + selector).append('\
		// 	<div class="time-string"></div>\
		// 	<div class="slider"></div>');
		
		// var _timeStrEl = $("#" + selector + " .time-string");
		// var _sliderEl = $("#" + selector + " .slider");

		console.log(timeProperties);
		console.log(selector);
		console.log(map);
		// var _dateProperties = getDatePattern(timeProperties.timeStopInterval);

		var slider = new Slider({
			style: "width: 100%;"
		},dom.byId(selector));
		var startTime = timeProperties.startTime;
		var endTime = timeProperties.endTime;
		var fullTimeExtent = new esri.TimeExtent(new Date(startTime), new Date(endTime));

		map.setTimeExtent(fullTimeExtent);
		map.setTimeSlider(slider);

		if (showSingleTimePoint){
			timeProperties.thumbCount = 1;
			slider.singleThumbAsTimeInstant(true);

		}

		slider.setThumbCount(timeProperties.thumbCount);
		slider.setThumbMovingRate(timeProperties.thumbMovingRate);

		if (timeProperties.numberOfStops) {
			slider.createTimeStopsByCount(fullTimeExtent, timeProperties.numberOfStops);
		}
		else {
			slider.createTimeStopsByTimeInterval(fullTimeExtent, timeProperties.timeStopInterval.interval, timeProperties.timeStopInterval.units);
		}

		if (timeProperties.thumbCount === 2) {
			slider.setThumbIndexes([0, 1]);
		}
		
		slider.startup();

		$("#" + selector + ".esriTimeSlider .dijitSliderImageHandle").append('<div class="slider-handle"></div></div><div class="slider-handle-point-border"></div><div class="slider-handle-point"></div>');

		slider.on('time-extent-change',function(){
			console.log(slider);
		});


		// function getDatePattern(interval)
		// {
		// 	var datePattern;
			
		// 	if (interval && interval.unit){

		// 		switch (interval.unit) {
		// 		case 'esriTimeUnitsCenturies':
		// 			datePattern = 'yyyy G';
		// 			break;
		// 		case 'esriTimeUnitsDecades':
		// 			datePattern = 'yyyy';
		// 			break;
		// 		case 'esriTimeUnitsYears':
		// 			datePattern = 'yyyy';
		// 			break;
		// 		case 'esriTimeUnitsWeeks':
		// 			datePattern = 'MMMM d, yyyy';
		// 			break;
		// 		case 'esriTimeUnitsDays':
		// 			datePattern = 'MMMM d, yyyy';
		// 			break;
		// 		case 'esriTimeUnitsHours':
		// 			datePattern = 'h a';
		// 			break;
		// 		case 'esriTimeUnitsMilliseconds':
		// 			datePattern = 'h:mm:ss:SSS a';
		// 			break;
		// 		case 'esriTimeUnitsMinutes':
		// 			datePattern = 'h:mm a';
		// 			break;
		// 		case 'esriTimeUnitsMonths':
		// 			datePattern = 'MMMM y';
		// 			break;
		// 		case 'esriTimeUnitsSeconds':
		// 			datePattern = 'h:mm:ss a';
		// 			break;
		// 		}

		// 	}
		// 	else{
		// 		datePattern = 'MMMM d, yyyy';
		// 	}

		// 	return datePattern;
		// }

		// function formatDate(date, datePattern)
		// {
		// 	var dateObj = date;
		// 	var pattern = _dateProperties.pattern;
			
		// 	if(!(date instanceof Date)){
		// 		dateObj = new Date(date);
		// 	}
		// 	if (datePattern){
		// 		pattern = datePattern;
		// 	}

		// 	return locale.format(dateObj,{
		// 		selector: 'date',
		// 		datePattern: pattern
		// 	});
		// }

	}
});