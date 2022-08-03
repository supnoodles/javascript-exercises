const ftoc = function(celsius) {
  return Math.round(((celsius - 32) * 0.5556) * 10) / 10;
};

const ctof = function(fahrenheit) {
  return Math.round(((fahrenheit * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
