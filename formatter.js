var original = document.getElementById("original");
var formatted = document.getElementById("formatted");

function format(){
	var numSpaces = 0;
	var spaces = "";
	var text = original.value; 
	var result = "";
	for (var i=0; i< text.length; i++){
		if (text[i] == '{'){
			numSpaces += 1;
			spaces = generateSpaces(numSpaces);
			result += "{\n"+ spaces;
		} else if (text[i] == '}'){
			numSpaces -= 1;
			spaces = generateSpaces(numSpaces);
			var comma = ((i<text.length-1)&&(text[i+1]==",")) ? "," : "";
			result += "\n" + spaces + "}" + comma + "\n"+ spaces;			
		} else if (text[i] == ','){		
			if ((i>0) && (text[i-1]=="}")){
				//do nothing
			} else {
				result += ",\n"+spaces;
			}
		} else if (text[i] == '\n'){
			result += "\n"+spaces;
		} else if ((i>0) && (text[i] == ' ') && (text[i-1]==",")){
			//do nothing
		} else {
			result += text[i];
		}		
	}
	var lines = result.split("\n")
	result = ""
	for (i=0; i<lines.length; i++){
		if (lines[i].trim() != ""){
			result += lines[i] + "\n";
		}
	}	
	
	formatted.value = result;
}

function generateSpaces(num){
	var spaces = "";
	for (var i=0; i< num*4; i++){
		spaces += " ";
	}
	return spaces;
}
