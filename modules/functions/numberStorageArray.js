import { currentOperand } from './functions.js';

export const numbers = [];

export const setNumber = number => {
	if (!currentOperand && numbers.length === 0) {
		numbers.push(number);
		return; 
	}

	if (!currentOperand) {
		numbers[0] += number; 
		return; 
	}

	if (currentOperand && numbers.length === 1) {
		numbers.push(number); 
		return; 
	} else {
		numbers[1] += number; 
	}

};
