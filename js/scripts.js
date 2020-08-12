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

function add(number1, number2) {
  return number1 + number2;
}

function sub(number1, number2) {
  return number1 - number2;
}

function mul(number1, number2) {
  return number1 * number2;
};

function div(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});