import { numbers, currentOperand } from './functions/functions.js';

export const display = document.getElementById('calc-display');

export const resetDisplay = () => {
	display.innerText = '0';
};

export const setDisplay = (result = null) => {

	if (result) {
		display.textContent = result; 
		return; 
	}

	if (!currentOperand) {
		display.textContent = numbers[0];
		return; 
	}

	debugger; 
	if (currentOperand && numbers.length === 2) {
		display.textContent = numbers[1];
	}

};
