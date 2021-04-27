import {
  numbers, 
  clearArrayData, 
  setCurrentOperandToNull
  } from "./functions.js";

export const setFirstNumberToResult = (result) => {
  clearArrayData(); 
  numbers[0] = result;
  setCurrentOperandToNull();
}