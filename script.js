function total() {
  var num1 = document.budgetForm.rent.value;
  var num2 = document.budgetForm.car.value;
  var num3 = document.budgetForm.phone.value;
  var num4 = document.budgetForm.foodGas.value;
  var num5 = document.budgetForm.other.value;

  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
    alert('*** Sorry, you can only budget numbers. ***');
    total = "$0.00";
  } else if (num1 < 1 && num2 < 1 && num3 < 1 && num4 < 1 && num5 < 1) {
    total = "$0.00";
  } else {
    var total = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);
    document.getElementById("answer").value = '$' + total / 4 + '.00';
    document.getElementById("answer2").value = '$' + total + '.00';
  }
}
