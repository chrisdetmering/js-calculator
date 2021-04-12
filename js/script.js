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

const print = (text, output) => console.log(`${text}: ${output}`);

const calcDisplay = document.getElementById("calc-display");

const addNumbers = (...nums) => {
  console.log(
    nums.reduce((acc, currValue) => {
      return acc + currValue;
    })
  );
};

const numbers = [];

const initiateCalculation = (e) => {
  const buttonValue = e.target.value;

  if (
    buttonValue !== undefined &&
    buttonValue !== "+" &&
    buttonValue !== "-" &&
    buttonValue !== "X" &&
    buttonValue !== "/" &&
    buttonValue !== "CE" &&
    buttonValue !== "="
  ) {
    print("Button clicked", buttonValue);
    calcDisplay.innerText = e.target.value;
    numbers.push(parseInt(buttonValue));
    print("Numbers Array", numbers);
  } else if (buttonValue === "=") {
    const add = numbers[0] + numbers[1];
    print("Add", add);
    calcDisplay.innerText = add;
  }
};

const checkButtonClick = document
  .getElementById("calc-buttons-container")
  .addEventListener("click", initiateCalculation);
