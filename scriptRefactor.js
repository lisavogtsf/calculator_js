window.onload = function() {

  // displays
  var display = document.getElementById("result_display_value");
  var operator = document.getElementById("operator_display");

  // Number buttons
  var numOne = document.getElementById("number_1"),
      numTwo = document.getElementById("number_2"),
      numThree = document.getElementById("number_3"),
      numFour = document.getElementById("number_4"),
      numFive = document.getElementById("number_5"),
      numSix = document.getElementById("number_6"),
      numSeven = document.getElementById("number_7"),
      numEight = document.getElementById("number_8"),
      numNine = document.getElementById("number_9"),
      numZero = document.getElementById("number_0");

  // Operations

  var addOp = document.getElementById("op_plus"),
      subOp = document.getElementById("op_sub"),
      multOp = document.getElementById("op_mult"),
      divOp = document.getElementById("op_div"),
      entOp = document.getElementById("op_ent"),
      clrOp = document.getElementById("op_clr");

  // state
  var hiddenOperand;
  
  // event handlers
  numOne.onclick = function() {
    display.innerHTML += '1';
  };
  numTwo.onclick = function() {
    display.innerHTML += '2';
  };
  numThree.onclick = function() {
    display.innerHTML += '3';
  };

  addOp.onclick = function() {
    hiddenOperand = display.innerHTML;
    display.innerHTML = '';
    operator.innerHTML = '+';
  };
  subOp.onclick = function() {
    hiddenOperand = display.innerHTML;
    display.innerHTML = '';
    operator.innerHTML = '-';
  };
  multOp.onclick = function() {
    hiddenOperand = display.innerHTML;
    display.innerHTML = '';
    operator.innerHTML = '*';
  };
  divOp.onclick = function() {
    hiddenOperand = display.innerHTML;
    display.innerHTML = '';
    operator.innerHTML = '/';
  };
  entOp.onclick = function() {
    var result = parseInt(hiddenOperand);
    if (operator.innerHTML === '+') {
      result += parseInt(display.innerHTML);
    } else if (operator.innerHTML === '-') {
      result -= parseInt(display.innerHTML);
    } else if (operator.innerHTML === '*') {
      result *= parseInt(display.innerHTML);
    } else if (operator.innerHTML === '/') {
      result /= parseInt(display.innerHTML);
    } else {
      result = display.innerHTML;
    }
    display.innerHTML = result;
  };
  clrOp.onclick = function() {
    hiddenOperand = undefined;
    display.innerHTML = '';
    operator.innerHTML = '';
  };
  
};
    