// Calculator should be able to:
//   - Add two numbers
//   - Subtract two numbers
//   - Multiply two numbers
//   - Divide two numbers
//   - Display at least 10 digits on the screen
//   - Display decimals to at least the thousandth (.001)
//   - Perform continuous functions
//       Example:
//         Press the 1 button
//         Press the add button
//         Press the 1 button
//         Press the add button again (result should show as 2 on the screen)
//         Press the 1 button
//         Press the add button again (result should show as 3 on the screen)
//   - Pressing the clear button resets screen to 0

class CalculationMachine {
  constructor(userStartingNumber) {
    this.userStartingNumber = userStartingNumber;
  }

  multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => {
      return multiplier * element;
    });
  }
}

let calc = new CalculationMachine(2);
console.log(calc.multiply(2, 2, 3, 4));

// const adding = (adder, ...theArgs) => {
//   return theArgs.map((element) => {
//     return adder + element;
//   });
// }

// const multiply = (multiplier, ...theArgs) => {
// 	return theArgs.map((element) => {
// 		return multiplier * element;
// 	});
// }

// user clicks on a number button
// and it is stored in an array

// once the user clicks "="
// the array is used to perform the
// operation using the stored numbers
// from the array. (using the spread operator)
