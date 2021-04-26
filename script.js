let numberStorageArray = [];
let currentOperator = null;

const calcDisplay = document.getElementById('calc-display');

// -- Listens to Number Buttons
document.querySelectorAll('#number-button-container').forEach(button => {
	button.addEventListener('click', e => {
		const buttonValue = e.target.textContent;

		displayUserNumber(buttonValue);
	});
});

const displayUserNumber = numberValue => {
	if ((calcDisplay.innerText = '0')) {
		calcDisplay.innerText = null;
	}

	calcDisplay.innerText += numberValue;
};

// -- Listens to Math Operators
document.querySelectorAll('#math-operator-container').forEach(button => {
	button.addEventListener('click', e => {
		const buttonValue = e.target.textContent;
		debugger;
		console.log(numberStorageArray);

		// -- Checks the Number Storage Array to decide whether to store the
		// number from the display into the array or replace the array
		// data with the calculated result (if the aray has 2 numbers)
		if (numberStorageArray.length < 2) {
			numberStorageArray.push(parseFloat(calcDisplay.innerText));
			calcDisplay.innerText = `${calculate(buttonValue)}`;
		} else if (numberStorageArray.length >= 2) {
			const quickCalc = calculate(buttonValue);

			clearNumberStorageArray();

			numberStorageArray.push(quickCalc);
		}

		if (buttonValue !== '=' && buttonValue !== 'CE') {
			currentOperator = buttonValue;
		} else if (buttonValue === 'CE') {
			clearNumberStorageArray();
		}

		clearCalcDisplay();

		if (buttonValue === '=') {
			calculate();
		}
	});
});

const clearCalcDisplay = () => (calcDisplay.innerText = '0');
const clearNumberStorageArray = () => (numberStorageArray.length = 0);

const calculate = () => {
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
};
