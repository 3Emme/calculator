//function add(number1, number2) {
//  return number1 + number2;
//}
//
//function subtract(number1, number2) {
//  return number1 - number2;
//}
//
//function multiply(number1, number2) {
//  return number1 * number2;
//}
//
//function divide(number1, number2) {
//  return number1 / number2;
//}
//
//const number1 = parseInt(prompt("enter a number:"));
//alert(number1);
//const number2 = parseInt(prompt("enter another number:"));
//const result = add(number1, number2);
//alert(result);

// Business logic:

const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
  return number1 - number2;
};

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface logic:

$(document).ready(function() {
  const number1 = parseInt($("#add1").val());
  const number2 = parseInt($("#add2").val());
  alert(add(number1, number2));
});