// for testing
const print = (text, output) => console.log(`${text}: ${output}`);

const calcDisplay = document.getElementById('calc-display');
const clearButton = document.getElementById('clear');
const numberButtonContainer = document.querySelectorAll(
	'#number-button-container'
);
const operatorButtonContainer = document.querySelectorAll(
	'#operator-button-container'
);

const numberStorageArray = [];

numberButtonContainer.forEach((button) => {
	button.addEventListener('click', (e) => {
		const buttonValue = e.target.textContent;
		numberStorageArray.push(parseInt(buttonValue));

		displayNumbers(buttonValue);
	});
});

operatorButtonContainer.forEach((button) => {
	button.addEventListener('click', (e) => {
		const buttonValue = e.target.textContent;

		performOperation(buttonValue);
	});
});

const displayNumbers = (numberValue) => (calcDisplay.innerText += numberValue);

const performOperation = (operator) => {
	calcDisplay.innerText = '';

	if (operator === '=') {
		calcDisplay.innerText = numberStorageArray.reduce((a, b) => a + b, 0);
	}
};

const addNumbers = (a, b) => {
	return a + b;
};
