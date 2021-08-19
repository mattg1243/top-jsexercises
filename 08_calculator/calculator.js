const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
	
  if (a.length !== 0) {
    return a.reduce((accum, currentValue) => accum + currentValue, 0)
  } else {
    return 0;
  }
};

const multiply = function(a) {
  
  if (a.length !== 0) {
    return a.reduce((accum, currentValue) => accum * currentValue)
  } else {
    return 0;
  }
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a < 0) {
    return -1;
  } else if (a === 0) {
    return 1;
  } else {
  return (a * factorial(a-1))}
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
