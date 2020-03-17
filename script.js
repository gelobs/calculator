// My javascript code

// Operator functions

function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (obj) {
	return obj.reduce((acc, elem) => acc + elem,0);
}

function multiply (obj) {
	return obj.reduce((acc, elem) => acc * elem);
}

function operate(op, num1, num2){
    return op(num1, num2);
}

var digits = document.querySelectorAll("#digit");
digits.forEach((digit) => {
	digit.addEventListener('click', (e) => {
	  console.log(e);
	  console.log(e.target.value);
	  var tempValue = e.target.value;
	  document.getElementById("screen").value=tempValue;
	});
});

var operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
	op.addEventListener("click", (e) => {
		console.log(e);
		console.log(e.target.id)
		var tempOp = e.target.value;
		// document.getElementById("screen").value=tempOp;
	})
})