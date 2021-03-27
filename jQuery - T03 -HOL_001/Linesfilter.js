$(document).ready(function(){
	$('#search').click(function(){
		var s=$('#tb').val();
		var texta1=$('#texta1').val();

		var words=s.split(",");
		var result="";
		var lines=texta1.split("\n");
		for(var j=0;j<words.length;j++){

		for(var i=0;i<lines.length;i++){
			if(lines[i].includes(words[j])){
				var lineWords=lines[i].split(" ");
				for(var k=0;k<lineWords.length;k++){
					if(words[j].localeCompare(lineWords[k])){
						if(k==lineWords.length-1)
						result=result.concat(lineWords[k]).concat(", ");
						else
						result=result.concat(lineWords[k]).concat(" ");
					}
					else
					{	if(k==lineWords.length-1)
						result=result.concat("<b>").concat(lineWords[k]).concat("</b>, ");
						else
						result=result.concat("<b>").concat(lineWords[k]).concat("</b> ");
					}
				}



				
			}		
		}

		}
		$('#texta2').val(result.substring(0,result.length-2));

	})
})