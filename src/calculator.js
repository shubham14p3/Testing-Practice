function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.add = function add() {
  return this.num1 + this.num2;
};

Calculator.prototype.multiply = function multiply() {
  return this.num1 * this.num2;
};

Calculator.prototype.divide = function divide() {
  return this.num1 / this.num2;
};

Calculator.prototype.substract = function substract() {
  return this.num1 - this.num2;
};

export default Calculator;
