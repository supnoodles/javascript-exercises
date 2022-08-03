const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
  }

  return sum;
};

const multiply = function(arr) {
  let mult = 1;
  
  for (let i = 0; i < arr.length; ++i) {
    mult *= arr[i];
  }

  return mult;

};

const power = function(x, y) {
  return x ** y;
};

const factorial = function (x) {
  
  if (x == 0) {
    return 1;
  }

  let factorial = 1;

  while (x > 0) {
    factorial *= x;
    --x;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
