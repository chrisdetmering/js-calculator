import { clearArrayData, display, runCalculation } from './functions.js';

export let numberStorageArray = [];

export const storeNumber = calcFunctionValue => {
	if (numberStorageArray.length < 2) {
		numberStorageArray.push(parseFloat(display.innerText));
	}

	if (numberStorageArray.length >= 2) {
		const quickCalc = runCalculation(
			calcFunctionValue,
			numberStorageArray,
			display
		);

		display.innerText = quickCalc;

		clearArrayData();

		numberStorageArray.push(quickCalc);
	}
};
