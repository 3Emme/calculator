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
    $("#output-add").text(result);
  });
  
  $("form#sub").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#sub1").val());
    const number2 = parseInt($("#sub2").val());
    const result = sub(number1, number2);
    $("#output-sub").text(result);
  });

  $("form#mul").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#mul1").val());
    const number2 = parseInt($("#mul2").val());
    const result = mul(number1, number2);
    $("#output-mul").text(result);
  });
  
  $("form#div").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#div1").val());
    const number2 = parseInt($("#div2").val());
    const result = div(number1, number2);
    $("#output-div").text(result);
  });
});