// My javascript code

// Operator functions

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(op, num1, num2) {
	return op(num1, num2);
}

var temp;
var tempOp;
var opCount = 0;
var opStore = [];
var fullValue = [];
var tempValue = [];
var valueStore = [];
var digits = document.querySelectorAll("#digit");
digits.forEach((digit) => {
	digit.addEventListener('click', (e) => {
		// console.logs
		console.log(e);
		console.log(e.target.value);

		// Temporary input value
		var tempValue = e.target.value;

		// Add to fullValue
		fullValue.push(tempValue);
		valueStore.push(parseInt(fullValue.join('')));
		document.getElementById("screen").value = fullValue.join('');
		// valuesArray.push(tempValue);
		// if (isNaN(parseInt(valuesArray[valuesArray.length - 2]))) {
		// 	var op = window[valuesArray[valuesArray.length - 2]];
		// 	var num1 = parseInt(valuesArray[valuesArray.length - 3]);
		// 	var num2 = parseInt(valuesArray[valuesArray.length - 1]);
		// 	var result = operate(op, num1, num2);
		// 	valuesArray.push(result);
		// 	document.getElementById("screen").value = result;
		// }
	});
});

// Operators
var operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
	op.addEventListener("click", (e) => {
		console.log(e);
		console.log(e.target.id);

		fullValue = [];
		tempOp = e.target.id;
		opStore.push(tempOp);
		opCount++;
		if(opCount > 1){
			temp = operate(window[opStore[opStore.length-2]], valueStore[valueStore.length-1], valueStore[valueStore.length-2]);
			fullValue.push(temp);
			valueStore.push(parseInt(temp));
			opCount = 1;
		}

		document.getElementById("screen").value=fullValue.join('');
		fullValue = [];
	});
});

// Equals button
var equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", (e) => {
	console.log(e);
	var result = operate(window[tempOp], valueStore[valueStore.length-2], valueStore[valueStore.length-1]);
	document.getElementById("screen").value=result;
	fullValue = [];
	valueStore = [];
	valueStore.push(result);
	opCount = 0;
});

// All clear button
var allClear = document.querySelector(".all-clear");
allClear.addEventListener("click", (e) => {
	opCount = 0;
	opStore = [];
	fullValue = [];
	tempValue = [];
	valueStore = [];
	document.getElementById("screen").value = 0;
});

