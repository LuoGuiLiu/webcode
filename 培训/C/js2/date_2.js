(function(){
	var datepicker = window.datepicker;
	var monthData;
	var Oui_datepicker_rili;
	datepicker.buildUi = function(year,month){

		monthData = datepicker.getMonthData(year,month);
		var html = 
		'<div class="ui-datapicker-head">' +
		'<a href="#" class="ui-datepicker-choick ui-datepicker-choick_left">&lt</a>' +
		'<a href="#" class="ui-datepicker-choick ui-datepicker-choick_right">&gt</a>' +
		'<span class="ui-datepicker-year_month">' + 
		monthData.year + '-' + monthData.month + 
		
		'</span>' + 
		'</div>' +
 		'<div class="ui-datepicker-byerody">' +
	 	'<table>' +
		'<thead>' +
		'<tr>' +
		'<th>日</th>' +
		'<th>一</th>' +
		'<th>二</th>' +
		'<th>三</th>' +
		'<th>四</th>' +
		'<th>五</th>' +
		'<th>六</th>' +
		'</tr>' +
		'</thead>' +
			 '<tbody>';
		for(var i = 0;i < monthData.length; i++){
			var date = monthData[i];
			if(i%7 === 0){
				html += '<tr>';
				}

			html += '<td>' + date.showDate + '</td>';

			if(i%7 === 6){
				html += '</tr>';
				}
				
			}
				
		html += '</tbody>' +
		'</table>' +
		'</div>';
		return html;
	}
	datepicker.render = function(direction){
		var year,month;
		if(monthData){
			year = monthData.year;
			month = monthData.month;
			
			}
		if(direction === 'last') month--;
			
		if(direction === 'next') month++;
			
		var html = datepicker.buildUi(year,month);
		//$dom.innerHTML = html;

		Oui_datepicker_rili = document.createElement('div');
		Oui_datepicker_rili.className = "ui-datepicker-rili";
		Oui_datepicker_rili.innerHTML = html;
		document.body.appendChild(Oui_datepicker_rili);
		}
	datepicker.init = function(input){
		datepicker.render();
		var  Oinput = document.querySelector(input);
		var open = false;		
		Oinput.addEventListener('click',function(){

			if(open){
				Oui_datepicker_rili.classList.remove('ui-datepicker-rili-show');
				open = false;
				}
			else{
				Oui_datepicker_rili.classList.add('ui-datepicker-rili-show');
				var Oinput_left = Oinput.offsetLeft;
				var Oinput_top = Oinput.offsetTop;
				var Oinput_height = Oinput.offsetHeight;
				Oui_datepicker_rili.style.left =Oinput_left + 'px';
				Oui_datepicker_rili.style.top = Oinput_top + Oinput_height + 'px';
				open = true;
				}
			},false)
			Oui_datepicker_rili.addEventListener('click',function(e){
			 var Omouseup = e.target;
		if(!Omouseup.classList.contains('ui-datepicker-choick'))
				return;					
 
			if(Omouseup.classList.contains('ui-datepicker-choick_left')){
				datepicker.render('last');					
				}
			else if(Omouseup.classList.contains('ui-datepicker-choick_right')){
					datepicker.render('next');	
					}
 			},false)
		
		}		
	})();
