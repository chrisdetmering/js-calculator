// TO DO:
// - Be able to store a multi-digit number, like "44"

// user hits multiple numbers
// user hits a math operator button
// total number displayed is stored
// if user hits equals, then numbers are calculated

const calcDisplay = document.getElementById('calc-display');

let numberStorageArray = [];
let currentOperator = null;

document.querySelectorAll('#number-button-container').forEach((button) => {
	button.addEventListener('click', (e) => {
		const buttonValue = e.target.textContent;
		displayNumbers(buttonValue);
	});
});

document.querySelectorAll('#math-operator-container').forEach((button) => {
	button.addEventListener('click', (e) => {
		const buttonValue = e.target.textContent;
		debugger;
		numberStorageArray.push(parseInt(calcDisplay.innerText));

		if (buttonValue !== '=' && buttonValue !== 'CE') {
			currentOperator = buttonValue;
		}

		beginCalculation(buttonValue);
	});
});

document.getElementById('clear').addEventListener('click', (e) => {
	numberStorageArray.splice(0, numberStorageArray.length);
	for (const number of numberStorageArray) {
		numberStorageArray.pop(number);
	}
});

const displayNumbers = (numberValue) => (calcDisplay.innerText += numberValue);

const beginCalculation = (operator) => {
	calcDisplay.innerText = '';

	if (operator === '=') {
		if (currentOperator === '+') {
			calcDisplay.innerText = numberStorageArray.reduce((a, b) => a + b);
		} else if (currentOperator === '-') {
			calcDisplay.innerText = numberStorageArray.reduce((a, b) => a - b);
		} else if (currentOperator === 'X') {
			calcDisplay.innerText = numberStorageArray.reduce((a, b) => a * b);
		} else if (currentOperator === '/') {
			calcDisplay.innerText = numberStorageArray.reduce((a, b) => a / b);
		}
	}
};
