import {
	calculate,
	setNumber,
	clearArrayData,
	storeCurrentOperator,
	resetDisplay,
	setDisplay, 
	setFirstNumberToResult
} from './modules/functions/functions.js';

document.querySelector('#number-button-container')
.addEventListener('click', e => {
		const number = e.target.textContent;
		setNumber(number);
		setDisplay();
});

document.querySelector('#math-operands-container')
.addEventListener('click', e => {
		const operation = e.target.textContent;

		if (operation === '=') {
			const result = calculate();
			setDisplay(result);
			setFirstNumberToResult(result);
			return; 
		} 
		
		if (operation === 'CE') {
			resetDisplay();
			clearArrayData();
			return; 
		} 
		
		storeCurrentOperator(operation);
});
