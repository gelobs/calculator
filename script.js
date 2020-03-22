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

// Initialize variables
var temp;
var tempOp;
var opCount = 0;
var opStore = [];
var fullValue = [];
var tempValue = [];
var valueStore = [];

// Digit events
var digits = document.querySelectorAll("#digit");
digits.forEach((digit) => {
	digit.addEventListener('click', (e) => {
		// console.logs
		// console.log(e);
		// console.log(e.target.value);

		// Temporary input value
		var tempValue = e.target.value;

		// Add to fullValue
		fullValue.push(tempValue);
		
		// Display input

		// Round number if it's too long
		if (fullValue.length > 9){
			fullValue.pop();
		};
		document.getElementById("screen").value = (fullValue.join(''));
			
	});
});

// Operator events
var operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
	op.addEventListener("click", (e) => {

		// Log event
		// console.log(e);
		// console.log(e.target.id);
		
		// Check if fullValue is empty
		if(!isNaN(parseInt(fullValue))){
			valueStore.push(+(fullValue.join('')));
		}
		
		// Clear full temporary value
		fullValue = [];

		// Temporary operator string
		tempOp = e.target.id;

		// Push operand to stack
		opStore.push(tempOp);

		// Increase counter by one
		opCount++;

		// Check if need to operate
		if(opCount > 1){
			temp = operate(window[opStore[opStore.length-2]], valueStore[valueStore.length-2], valueStore[valueStore.length-1]);
			// fullValue.push(temp);

			// Round number if it's too long
			if(temp.length > 9){
				temp = +temp.toFixed(9);
				valueStore.push(temp);
			}else{
				valueStore.push(+(temp));
			};

			// Set operator counter
			opCount = 1;
		}

		// Display value on screen
		document.getElementById("screen").value=valueStore[valueStore.length-1];
	});
});

// Equals button
var equalButton = document.querySelector(".equal-sign");
equalButton.addEventListener("click", (e) => {
	// console.log(e);
	// Check if it is correct to press equals button
	if (!isNaN(fullValue.join(''))) {
		valueStore.push(+(fullValue.join('')));
		var result = operate(window[tempOp], valueStore[valueStore.length - 2], valueStore[valueStore.length - 1]);

		// Round number if long
		if (result.toString().length > 9) {
			result = (+result).toFixed(9);
		};

		// Warn user if tried to divide by zero
		if (result == Infinity){
			// Alert message
			window.alert('You tried to divide by zero.')

			// Clear all
			valueStore=[];
			opCount = 0;
			opStore = [];
			tempValue = [];
			valueStore = [];

			// Display 0
			document.getElementById("screen").value = 0;
		}else{
			valueStore.push(result);
			document.getElementById("screen").value = result;
			fullValue=result.toString().split('');
		}
		
		// Clear full temporary value
		// fullValue = [];
	}

	opCount = 0;
});

// All clear button
var allClearButton = document.querySelector(".all-clear");
allClearButton.addEventListener("click", (e) => {
	opCount = 0;
	opStore = [];
	fullValue = [];
	tempValue = [];
	valueStore = [];
	document.getElementById("screen").value = 0;
});

// Decimal button
var decButton = document.querySelector(".decimal");
decButton.addEventListener("click", (e) => {
	// console.log(e.target.value);

	// Check if there is an existing decimal sign
	if (!fullValue.find(dec => dec == '.')){
		fullValue.push(e.target.value);
	}
	
	
	// Display input
	document.getElementById("screen").value = fullValue.join('');
})

// Backspace button
var backButton = document.querySelector(".backspace");
backButton.addEventListener("click", (e) => {
	// console.log(e);
	fullValue.pop();
	document.getElementById("screen").value = fullValue.join('');
});

// Add keyboard support

// using jQuery
// $('.element').on('keyup keypress blur change', function(e) {
//     // e.type is the type of event fired
// });

/* Add one or more listeners to an element
** @param {DOMElement} element - DOM element to add listeners to
** @param {string} eventNames - space separated list of event names, e.g. 'click change'
** @param {Function} listener - function to attach for each event as a listener
*/
// function addListenerMulti(element, eventNames, listener) {
// 	var events = eventNames.split(' ');
// 	for (var i=0, iLen=events.length; i<iLen; i++) {
// 	  element.addEventListener(events[i], listener, false);
// 	}
//   }
// function addListenerMulti(el, s, fn) {
// 	s.split(' ').forEach(e => el.addEventListener(e, fn, false));
// }; 

// //   addListenerMulti(window, 'click keydown', function(){…});
// var backButton = document.querySelector(".backspace");
// addListenerMulti(backButton, 'keydown click', delElement);
// function delElement(e){
// 	console.log(e);
// 	if(e.keyCode == 8 || e.target.className == "backspace"){
// 		fullValue.pop();
// 		document.getElementById("screen").value = fullValue.join('');
// 	};
	
// };