import { clearArrayData, display, runCalculation } from './functions.js';

export let numberStorageArray = [];

export const storeNumber = () => {
	if (numberStorageArray.length < 2) {
		numberStorageArray.push(parseFloat(display.innerText));
	}

	if (numberStorageArray.length >= 2) {
		const quickCalc = runCalculation();

		display.innerText = quickCalc;

		clearArrayData();

		numberStorageArray.push(quickCalc);
	}
};
