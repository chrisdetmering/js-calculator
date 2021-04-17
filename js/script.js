const calcDisplay = document.getElementById('calc-display');

let numberStorageArray = [];
let currentOperator = null;

document.querySelectorAll('#number-button-container').forEach((button) => {
	button.addEventListener('click', (e) => {
		const buttonValue = e.target.textContent;
		displayNumbers(buttonValue);
		// debugger;
	});
});

document.querySelectorAll('#math-operator-container').forEach((button) => {
	button.addEventListener('click', (e) => {
		const buttonValue = e.target.textContent;

		numberStorageArray.push(parseFloat(calcDisplay.innerText));

		if (buttonValue !== '=' && buttonValue !== 'CE') {
			currentOperator = buttonValue;
		}

		beginCalculation(buttonValue);
		// debugger;
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
	// debugger;
	calcDisplay.innerText = '';

	if (operator === '=') {
		switch (currentOperator) {
			case '+':
				return (calcDisplay.innerText =
					parseFloat(numberStorageArray[0]) +
					parseFloat(numberStorageArray[1]));
			case '-':
				return (calcDisplay.innerText =
					parseFloat(numberStorageArray[1]) -
					parseFloat(numberStorageArray[0]));
			case 'X':
				return (calcDisplay.innerText =
					parseFloat(numberStorageArray[0]) *
					parseFloat(numberStorageArray[1]));
			case '/':
				return (calcDisplay.innerText =
					parseFloat(numberStorageArray[1]) /
					parseFloat(numberStorageArray[0]));
			default:
				break;
		}

		// REPLACE NUMBER ARRAY WITH LAST CALCULUTIOIN
		// numberStorageArray.splice(0, 2, calcDisplay.innerText);
	}
};
