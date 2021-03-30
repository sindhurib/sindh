$(document).ready(function(){
	$('span').mouseover(function(){
		var s=$(this).text();
		$(this).css('background-color','bisque');
		if(s.includes("th")){
			$(this).css('font-style','italic');
			$(this).css('text-shadow','2px 2px pink')
		}
	})
	$('span').mouseout(function(){
		$(this).css('background-color','white');
	})
})