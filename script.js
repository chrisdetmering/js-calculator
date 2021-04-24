let numberStorageArray = [];
let currentOperator = null;

const calcDisplay = document.getElementById('calc-display');

// -- Listens to Number Buttons
document.querySelectorAll('#number-button-container').forEach(button => {
	button.addEventListener('click', e => {
		calcDisplay.innerText = null;
		const buttonValue = e.target.textContent;
		displayUserNumber(buttonValue);
	});
});

// -- Listens to Math Operators
document.querySelectorAll('#math-operator-container').forEach(button => {
	button.addEventListener('click', e => {
		const buttonValue = e.target.textContent;

		// -- Checks the Number Storage Array to decide what to do
		if (numberStorageArray.length < 2) {
			numberStorageArray.push(parseFloat(calcDisplay.innerText));
		} else if ((numberStorageArray.length = 2)) {
			const quickCalc = calculate(buttonValue);
			clearNumberStorageArray();
			debugger;
			calcDisplay.innerText = quickCalc;
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

const displayUserNumber = numberValue => (calcDisplay.innerText += numberValue);
const clearCalcDisplay = () => (calcDisplay.innerText = '0');
const clearNumberStorageArray = () => (numberStorageArray.length = 0);
