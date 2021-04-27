import {
	storeNumber,
	clearArrayData,
	storeCurrentOperator,
	display,
	resetDisplay,
	displayUserInputNumbers,
} from './modules/functions/functions.js';

// -- Number Buttons -- //
document.querySelectorAll('#number-button-container').forEach(button => {
	button.addEventListener('click', e => {
		e.preventDefault();

		if (e.target.value !== undefined) {
			displayUserInputNumbers(e);
		}
	});
});

// -- Math Operators -- //
document.querySelectorAll('#math-operands-container').forEach(button => {
	button.addEventListener('click', e => {
		e.preventDefault();

		if (e.target.value !== undefined) {
			const calcFunctionValue = e.target.textContent;

			if (calcFunctionValue === '=') {
				if (display.innerText !== null || display.innerText !== '0') {
					storeNumber(display.innerText);
				}
			} else if (calcFunctionValue === 'CE') {
				resetDisplay();
				clearArrayData();
			} else {
				storeCurrentOperator(calcFunctionValue);
				storeNumber(display.innerText);
			}
		}
	});
});
