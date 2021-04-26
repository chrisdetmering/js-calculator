import {
	storeNumber,
	storeCurrentOperator as currentOperator,
	runCalculation,
	display,
	resetDisplay,
	displayUserInputNumbers,
} from '/modules/functions/functions.js';

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
		debugger;

		if (e.target.value !== undefined) {
			const calcFunctionValue = e.target.textContent;

			if (calcFunctionValue === '=') {
				// storeNumber(display.innerText);
				runCalculation();
			} else if (calcFunctionValue === 'CE') {
				resetDisplay();
			} else {
				storeNumber(currentOperator(calcFunctionValue));
			}
		}
	});
});
