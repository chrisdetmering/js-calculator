import { numberStorageArray } from './functions/numberStorageArray.js';

export const display = document.getElementById('calc-display');

export const resetDisplay = () => (display.innerText = '0');

export const displayUserInputNumbers = e => {
	const numberButtonValue = e.target.textContent;

	if (display.innerText === '0') {
		display.innerText = '';
	}

	if (numberStorageArray.length >= 1) {
		if (display.innerText == numberStorageArray[0]) {
			display.innerText = '';
		}
	}

	display.innerText += numberButtonValue;
};
