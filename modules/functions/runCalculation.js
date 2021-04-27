import { numbers, currentOperand } from './functions.js';

export const calculate = () => {
	switch (currentOperand) {
		case '+':
			return parseFloat(numbers[0]) + parseFloat(numbers[1]);
		case '-':
			return parseFloat(numbers[0]) - parseFloat(numbers[1]);
		case 'X':
			return parseFloat(numbers[0]) * parseFloat(numbers[1]);
		case '/':
			return parseFloat(numbers[0]) / parseFloat(numbers[1]);
	}
};
