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

		if (numberStorageArray.length < 2) {
			numberStorageArray.push(parseFloat(calcDisplay.innerText));
		} else if ((numberStorageArray.length = 2)) {
			const quickCalc = calculate(buttonValue);
			clearArray();
			numberStorageArray.push(quickCalc);
		}

		if (buttonValue !== '=' && buttonValue !== 'CE') {
			currentOperator = buttonValue;
		} else if (buttonValue === 'CE') {
			clearArray();
		}

		clearDisplay();

		if (buttonValue === '=') {
			calculate();
		}
	});
});

const displayNumbers = (numberValue) => (calcDisplay.innerText += numberValue);

const clearDisplay = () => (calcDisplay.innerText = '');

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

const clearArray = () => (numberStorageArray.length = 0);
