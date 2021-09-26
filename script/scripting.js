var firstValue;
var secondValue;
var operation;
var result;
 
const enterOne = () => {
	
	if(document.getElementById("dw").value=="0."){
		document.getElementById("dw").value = "0.1";	
		} else if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 1;
		} else {
			document.getElementById("dw").value = document.getElementById("dw").value + "1";
		}				
}

const enterTwo = () => {
	
	if(document.getElementById("dw").value=="0."){
		document.getElementById("dw").value = "0.2";	
		} else if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 2;
		} else {
			document.getElementById("dw").value = document.getElementById("dw").value + "2";
		}				
}

const enterThree = () => {
	
	if(document.getElementById("dw").value=="0."){
		document.getElementById("dw").value = "0.3";	
		} else if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 3;
		} else {
			document.getElementById("dw").value = document.getElementById("dw").value + "3";
		}				
}

const enterFour = () => {
	
	if(document.getElementById("dw").value=="0."){
		document.getElementById("dw").value = "0.4";	
		} else if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 4;
		} else {
			document.getElementById("dw").value = document.getElementById("dw").value + "4";
		}				
}

const enterFive = () => {
	
	if(document.getElementById("dw").value=="0."){
		document.getElementById("dw").value = "0.5";	
		} else if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 5;
		} else {
			document.getElementById("dw").value = document.getElementById("dw").value + "5";
		}				
}

const enterSix = () => {
	
	if(document.getElementById("dw").value=="0."){
		document.getElementById("dw").value = "0.6";	
		} else if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 6;
		} else {
			document.getElementById("dw").value = document.getElementById("dw").value + "6";
		}				
}

const enterSeven = () => {
	
	if(document.getElementById("dw").value=="0."){
		document.getElementById("dw").value = "0.7";	
		} else if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 7;
		} else {
			document.getElementById("dw").value = document.getElementById("dw").value + "7";
		}				
}

const enterEight = () => {
	
	if(document.getElementById("dw").value=="0."){
		document.getElementById("dw").value = "0.8";	
		} else if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 8;
		} else {
			document.getElementById("dw").value = document.getElementById("dw").value + "8";
		}				
}

const enterNine = () => {
	
	if(document.getElementById("dw").value=="0."){
		document.getElementById("dw").value = "0.9";	
		} else if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 9;
		} else {
			document.getElementById("dw").value = document.getElementById("dw").value + "9";
		}				
}

const enterZero = () => {
	
	if(document.getElementById("dw").value=="0."){
		document.getElementById("dw").value = "0.0";	
		} else if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 0;
		} else {
			document.getElementById("dw").value = document.getElementById("dw").value + "0";
		}				
}

const sum = () => {
			
	if(document.getElementById("up").value==""){	
		if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 0;
		} else {
			operation = "+"; 
			document.getElementById("dw").value = document.getElementById("dw").value + operation;
			}	
		firstValue = parseFloat(document.getElementById("dw").value);
		document.getElementById("dw").value = 0;
		document.getElementById("up").value = firstValue + operation;
	} else{
		resulting();
		}
}

const minus = () => {
	if(document.getElementById("up").value==""){
		if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 0;
		} else {
			operation = "-";
			document.getElementById("dw").value = document.getElementById("dw").value + operation;
		}		
		firstValue = parseFloat(document.getElementById("dw").value);
		document.getElementById("dw").value = 0;
		document.getElementById("up").value = firstValue + operation;
	} else {
		resulting();
	}
}

const mult = () => {
	if(document.getElementById("up").value==""){
		if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 0;
		} else {
			operation = "*";
			document.getElementById("dw").value = document.getElementById("dw").value + operation;
		}		
		firstValue = parseFloat(document.getElementById("dw").value);
		document.getElementById("dw").value = 0;
		document.getElementById("up").value = firstValue + operation;
	} else {
		resulting();
	}
}

const divide = () => {
	if(document.getElementById("up").value==""){
		if(document.getElementById("dw").value==0){
			document.getElementById("dw").value = 0;
		} else {
			operation = "/";
			document.getElementById("dw").value = document.getElementById("dw").value + operation;
		}			
	 	firstValue = parseFloat(document.getElementById("dw").value);
		document.getElementById("dw").value = 0;
	document.getElementById("up").value = firstValue + operation; 
	} else {
		resulting();
	}
}
const dotting = () => {
			let dotttin = document.getElementById("dw").value;
			document.getElementById("dw").value = dotttin + ".";
		
}

const resulting = () => {
   if (operation == "+"){
    	secondValue = parseFloat(document.getElementById("dw").value);
		document.getElementById("up").value = firstValue + "+" + secondValue;
		document.getElementById("dw").value = firstValue + secondValue;
	} else if(operation == "-"){
		secondValue = parseFloat(document.getElementById("dw").value);
		document.getElementById("up").value = firstValue + "-" + secondValue;
		document.getElementById("dw").value = firstValue - secondValue;

	} else if(operation == "*"){
		secondValue = parseFloat(document.getElementById("dw").value);
		document.getElementById("up").value = firstValue + "*" + secondValue;
		document.getElementById("dw").value = firstValue * secondValue;		
		
	} else if (operation == "/") {
		secondValue = parseFloat(document.getElementById("dw").value);
		document.getElementById("up").value = firstValue + "/" + secondValue;
		document.getElementById("dw").value = firstValue / secondValue;		

	}           
}

const reflesh = () => {

	//location.reload(true);
		document.getElementById("up").value = "";
		document.getElementById("dw").value = 0;		

}