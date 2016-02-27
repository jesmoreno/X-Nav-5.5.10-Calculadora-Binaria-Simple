var result = "";
var operands = [];
var onePushed = false;
var zeroPushed = false;

one = function(){
	$("#resultado").html("1");
	onePushed = true;
};

zero = function(){
	$("#resultado").html("0");
	zeroPushed = true;

};

add = function(){
	if(onePushed){
		operands.push(1);
		onePushed = false;
	}
	if(zeroPushed){
		operands.push(0);
		zeroPushed = false;
	}
	$("#resultado").html("");
};

equal = function(){
	operands.push(parseInt($("#resultado").text()));//añado lo ultimo que hay en el display
	if(operands.length>0){
		for(var i=0;i<operands.length;i++){
			if(result === ""){
				result = operands[i];
			}else{
				result = result+operands[i];
			}
		}
	}
	$("#resultado").html(result.toString(2));
	//vacio el array de operandos y reinicio resultado a 0
	operands.splice(0,operands.length);
	result = "";
};
