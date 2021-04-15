// for testing
const print = (text, output) => console.log(`${text}: ${output}`);

const calcDisplay = document.getElementById('calc-display');
const clearButton = document.getElementById('clear');

const numberStorageArray = [];
let currentOperator = null;

document.querySelectorAll('#number-button-container').forEach((button) => {
	button.addEventListener('click', (e) => {
		const buttonValue = e.target.textContent;
		numberStorageArray.push(parseInt(buttonValue));
		displayNumbers(buttonValue);
	});
});

document.querySelectorAll('#math-operator-container').forEach((button) => {
	button.addEventListener('click', (e) => {
		const buttonValue = e.target.textContent;
		if (buttonValue !== '=') {
			currentOperator = buttonValue;
		}
		beginCalculation(buttonValue);
	});
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
