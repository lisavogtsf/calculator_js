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
      divOp = document.getElementById("op_mult"),
      entOp = document.getElementById("op_ent"),
      clrOp = document.getElementById("op_clr");

  // state
  var firstOperand = true, operand1 = '', operand2 = '', operation;
  
  // event handlers
  numOne.onclick = function() {
    if (firstOperand) {
      operand1 += numOne.innerHTML;
    } else {
      operand2 += numOne.innerHTML; 
    }
    display.innerHTML += numOne.innerHTML;
  };
  numTwo.onclick = function() {
    if (firstOperand) {
      operand1 += numTwo.innerHTML;
    } else {
      operand2 += numTwo.innerHTML; 
    }
    display.innerHTML += numTwo.innerHTML;
  };
  numThree.onclick = function() {
    if (firstOperand) {
      operand1 += numThree.innerHTML;
    } else {
      operand2 += numThree.innerHTML; 
    }
    display.innerHTML += numThree.innerHTML;
  };

  addOp.onclick = function() {
    operation = '+';
    firstOperand = false;
    display.innerHTML = '';
    operator.innerHTML = addOp.innerHTML;
  };
  subOp.onclick = function() {
    operation = '-';
    firstOperand = false;
    display.innerHTML = '';
    operator.innerHTML = subOp.innerHTML;
  };
  multOp.onclick = function() {
    operation = '*';
    operator.innerHTML = multOp.innerHTML;
  };
  clrOp.onclick = function() {
    firstOperand = true;
    operand1 = '';
    operand2 = '';
    display.innerHTML = '';
    operator.innerHTML = '';
    operation = undefined;
  };
  entOp.onclick = function() {
    var result;
    if (operation === '+') {
      result = parseInt(operand1) + parseInt(operand2);
    } else if (operation === '-') {
      result = parseInt(operand1) - parseInt(operand2);
    } else if (operation === '/') {
      result = parseInt(operand1) / parseInt(operand2);
    }
    display.innerHTML = result;
  };

  
};
    