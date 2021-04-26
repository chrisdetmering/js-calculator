import {
	clearArrayData,
	display,
	runCalculation,
	storeCurrentOperator,
} from './functions.js';
// import { storeCurrentOperator } from './storeCurrentOperator.js';

export let numberStorageArray = [];

export const storeNumber = calcFunctionValue => {
	if (numberStorageArray.length < 2) {
		numberStorageArray.push(parseFloat(display.innerText));
	}

	if (numberStorageArray.length >= 2) {
		if (calcFunctionValue === NaN) {
			const quickCalc = runCalculation(storeCurrentOperator(calcFunctionValue));

			display.innerText = quickCalc;

			clearArrayData();

			numberStorageArray.push(quickCalc);
		}
		// const quickCalc = runCalculation(storeCurrentOperator(calcFunctionValue));

		// display.innerText = quickCalc;

		// clearArrayData();

		// numberStorageArray.push(quickCalc);
	}
};
