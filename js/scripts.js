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
  $("form#calculator").submit(function() {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    const result = add(number1, number2);
    $("#output").text(result);
  });
});