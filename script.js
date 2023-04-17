let num1 = '';
let num2 = '';
let operator = '';

function addNumber(num) {
  if (operator === '') {
    num1 += num;
    document.getElementById('result').value = num1;
  } else {
    num2 += num;
    document.getElementById('result').value = num2;
  }
}

function calculate(op) {
  if (op === '=') {
    let result = eval(num1 + operator + num2);
    document.getElementById('result').value = result;
    num1 = result;
    num2 = '';
    operator = '';
  } else if (op === 'C') {
    document.getElementById('result').value = '0';
    num1 = '';
    num2 = '';
    operator = '';
  } else {
    operator = op;
  }
}
