import { numberStorageArray, display, currentOperand } from './functions.js';

export const runCalculation = () => {
	switch (currentOperand) {
		case '+':
			return (display.innerText =
				parseFloat(numberStorageArray[0]) + parseFloat(numberStorageArray[1]));
		case '-':
			return (display.innerText =
				parseFloat(numberStorageArray[1]) - parseFloat(numberStorageArray[0]));
		case 'X':
			return (display.innerText =
				parseFloat(numberStorageArray[0]) * parseFloat(numberStorageArray[1]));
		case '/':
			return (display.innerText =
				parseFloat(numberStorageArray[1]) / parseFloat(numberStorageArray[0]));
		default:
			break;
	}
};
