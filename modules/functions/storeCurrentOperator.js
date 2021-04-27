export let currentOperand = null;

export const storeCurrentOperator = operand => {
	currentOperand = operand;
};

export const setCurrentOperandToNull = () => {
	currentOperand = null;
}