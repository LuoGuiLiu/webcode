(function(){
	var datepicker = {};
	datepicker.getMonthData = function(year,month){
		var ret = [];

		if(!year || !month){
			var datepickerToday = new Date();
			var year = datepickerToday.getFullYear();
			var month = datepickerToday.getMonth() + 1;
			}

		var firstDate = new Date(year, month - 1, 1)
		//var firstDayOfThisMonth =firstDate.getDate();
		var firstDayOfWeekDay = firstDate.getDay();
		if(firstDayOfWeekDay === 0) firstDayOfWeekDay = 7;

		var lastDatelastMonth = new Date(year , month - 1 , 0);
		var lastDayOflastMonth = lastDatelastMonth.getDate();
		var lastDayOfWeekDay = lastDatelastMonth.getDay();
		var beforefirstDayOfWeekDayCount = firstDayOfWeekDay;

		var lastDatethisMonth = new Date(year , month, 0);
		var lastDayOfThisMonth = lastDatethisMonth.getDate();

		for(var i = 0; i<42; i++){
			var date = i + 1 - beforefirstDayOfWeekDayCount;
			var showDate = date;
			var thisMonth = month;

			if(date <= 0){
				thisMonth = month - 1;
				showDate = lastDayOflastMonth + date;
				}
			else if(date > lastDayOfThisMonth){
				thisMonth = month + 1;
				showDate = showDate - lastDayOfThisMonth;
			}

			if(thisMonth === 0) thisMonth = 12;
			if(thisMonth === 13) thisMonth = 1;
			

			ret.push({
				month:thisMonth,
				date:date,
				showDate:showDate
				});
			}
		return ret;	
	}
	window.datepicker = datepicker;
})();